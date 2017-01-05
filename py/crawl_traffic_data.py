import googlemaps
import googlemaps.distance_matrix
import googlemaps.directions
from datetime import datetime, timedelta
import os
import pickle
import time

client = googlemaps.Client(key="AIzaSyB3NeUqcq1e-ecQSBF_6G54IBo0_34Qy0Y")

loc = {
    'A': {'lat': 34.161328, 'lng': -118.167635},   #Rose bowl
    'B': {'lat': 34.137649, 'lng': -118.125269},   #Caltech
    'C': {'lat': 34.134675, 'lng': -118.051038},   #Westfield Mall
    'D': {'lat': 34.148743, 'lng': -117.992588},   #Monrovia Hospital
    'E': {'lat': 34.110381, 'lng': -117.987364}    #Speedway
}

idxMap = ['A', 'B', 'C', 'D', 'E']

local_date = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
date_string = local_date.strftime('%m%d%y')
date_dire = './' + date_string
data_dire = date_dire + '/data/' + date_string
pickle_dire = date_dire + '/pickle'
recovery_dire = './recovery'

for dire in [date_dire, data_dire, pickle_dire]:
    try:
        os.makedirs(dire)
    except:
        continue

class Path:
    def __init__(self, id, query_item):
        self.id = id
        self.desc = query_item['summary']
        self.len = query_item['legs'][0]['distance']['value']    # meter
        steps = query_item['legs'][0]['steps']
        self.pts = [steps[0]['start_location'], steps[0]['end_location']]
        for i in range(1, len(steps)):
            self.pts.append(steps[i]['end_location'])


class Trip:
    def __init__(self, OD):
        self.__OD = OD
        self.__file_name = OD + '.js'
        self.__text = '//date: ' + date_string + '\nfunction getObj() {\n'
        self.__paths = {}                       # key: string of coordinates, value: Path object
        self.__paths_stat = {}                  # key: path_id, value: a list of durations
        self.__data = []                        # element: dictionary with time and route
        self.__min_duration = float("inf")      # min duration of this trip
        self.__max_duration = -1                # max duration of this trip

    def __get_key(self, query_item):
        steps = query_item['legs'][0]['steps']
        key = ''
        for s in steps:
            key += '(' + str(s['start_location']['lat']) + ', ' + str(s['start_location']['lng']) + ')'
        return key

    def add_new(self, dep_time, query):
        routes = []
        is_visited =[]
        for q in query:
            key = self.__get_key(q)
            if key in is_visited:
                continue
            is_visited.append(key)
            duration = round(q['legs'][0]['duration_in_traffic']['value'] / 60, 1)
            if duration < self.__min_duration:
                self.__min_duration = duration
            if self.__max_duration < duration:
                self.__max_duration = duration
            if key in self.__paths:
                path_id = self.__paths[key].id
                self.__paths_stat[path_id].append(duration)
            else:
                path_id = len(self.__paths)
                self.__paths[key] = Path(path_id, q)
                self.__paths_stat[path_id] = [duration]
            routes.append({'duration': duration, 'pathId': path_id})
        time_string = dep_time.strftime("%I:%M %p")
        self.__data.append({'time': time_string, 'routes': routes})

    def write_trip(self, dire=data_dire):
        #paths
        self.__text += '\tvar paths = [\n'
        for v in self.__paths.values():
            self.__text += '\t\t{\n' + \
                           '\t\t\tdesc: \'' + v.desc + '\',\n' + \
                           '\t\t\tlen: ' + str(v.len) + ',\n' + \
                           '\t\t\tpts: [\n'
            for pt in v.pts:
                self.__text += '\t\t\t\t{lat:' + str(pt['lat']) + ', lng:' + str(pt['lng']) + '},\n'
            self.__text += '\t\t\t]\n' + \
                           '\t\t},\n'
        self.__text += '\t];\n\n'
        #data
        self.__text += '\tvar data = [\n'
        for d in self.__data:
            self.__text += '\t\t{\n' + \
                           '\t\t\ttime: \'' + d['time'] + '\',\n' + \
                           '\t\t\troutes: [\n'
            for r in d['routes']:
                self.__text += '\t\t\t\t{duration: ' + ("%0.1f" % r['duration']) + ', pathId:' + str(r['pathId']) + '},\n'
            self.__text += '\t\t\t]\n' + \
                           '\t\t},\n'
        #data-ave
        self.__text += '\t\t{\n' + \
                       '\t\t\ttime: \'AVERAGE\',\n' + \
                       '\t\t\troutes: [\n'
        for k, v in self.__paths_stat.items():
            self.__text += '\t\t\t\t{duration: ' + ("%0.1f" % round(sum(v)/len(v), 1)) + ', pathId: ' + str(k) + '},\n'
        self.__text += '\t\t\t]\n' + \
                       '\t\t}\n'
        self.__text += '\t];\n\n'
        #return
        self.__text += '\treturn {\n' + \
                       '\t\tO: \'' + self.__OD[0] + '\',\n' + \
                       '\t\tD: \'' + self.__OD[1] + '\',\n' + \
                       '\t\tminDuration: ' + str(self.__min_duration) + ',\n' + \
                       '\t\tmaxDuration: ' + str(self.__max_duration) + ',\n' + \
                       '\t\tpaths: paths,\n' + \
                       '\t\tdata: data\n' + \
                       '\t}\n'
        self.__text += '};'
        with open(dire + '/' + self.__file_name, 'w') as f:
            f.write(self.__text)
            f.flush()
            f.close()

class Crawler:
    def __init__(self):
        self.__trips = {}
        self.__queries = {}
        self.__cp_num = 0
        for i in range(0, 5):
            for j in range(0, 5):
                if i == j:
                    continue
                OD_name = idxMap[i] + idxMap[j]
                self.__trips[OD_name] = Trip(OD_name)

    def __crawl(self):
        dep_time = datetime.now()
        mode = 'driving'
        temp = {}
        for i in range(0, 5):
            for j in range(0, 5):
                if i == j:
                    continue
                orig = loc[idxMap[i]]
                dest = loc[idxMap[j]]
                query = googlemaps.directions.directions(client=client,
                                                         origin=[orig['lat'], orig['lng']],
                                                         destination=[dest['lat'], dest['lng']],
                                                         departure_time=dep_time,
                                                         mode=mode,
                                                         alternatives=True)
                temp[idxMap[i] + idxMap[j]] = query
                self.__queries[dep_time.strftime('%H%M')] = temp
        for k, v in temp.items():
            self.__trips[k].add_new(dep_time, v)

    def __write_queries(self):
        if self.__cp_num == 0:
            self.__cp_num += 1
            return
        keys = list(self.__queries.keys())
        keys.sort()
        with open(pickle_dire + '/' + keys[0] + '.pickle', 'wb') as f:
            pickle.dump(self.__queries, f)
        self.__cp_num += 1
        self.__queries.clear()

    def crawl(self, s_time, f_time, dt=60, check_point=330):
        curr_time = datetime.now()
        if s_time < curr_time or f_time < s_time:
            print('invalid start time or finish time')
            return
        else:
            delay = (s_time - curr_time).seconds
            time.sleep(delay)

        while True:
            curr_time = datetime.now()
            if f_time < curr_time:
                break
            delta = (curr_time - s_time).seconds
            if delta % dt == 0:
                self.__crawl()
            if delta % check_point == 0:
                self.__write_queries()
            time.sleep(1)

        for v in self.__trips.values():
            v.write_trip()
        self.__write_queries()
"""""
crawler = Crawler()
s_time = local_date + timedelta(hours=6, minutes=00)
f_time = local_date + timedelta(hours=9, minutes=00)
crawler.crawl(s_time, f_time, dt=120, check_point=1850)
"""""
