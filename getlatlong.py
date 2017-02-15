import random
import csv
import json
from decimal import Decimal
from math import ceil

import sys



lat = sys.argv[0]
lon = sys.argv[1]
print '-------------------------------------------'
print 'check', type(lat), lon
lat = Decimal(float(lat) )- Decimal(float(lat))%Decimal(0.0625)
lon = Decimal(float(lon)) - Decimal(float(lon))%Decimal(0.0375)
lat = ceil(lat*10000)/10000.0
lon = ceil(lon*10000)/10000.0


f = open('data1.csv', 'rb')
spamreader = csv.reader(f, delimiter=',')
for row in spamreader:
	if(Decimal(row[0])==Decimal(lat) and Decimal(row[1])==Decimal(lon)):
		print row[2]