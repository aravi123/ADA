import random
import csv
import json
from decimal import Decimal
from math import ceil


lat = 5
lon = 75
t=0
data = 0
print "hi"
with open('s4.json') as data_file:    
    data = json.load(data_file)


lat = data["lat"]
lon = data["long"]
lat = Decimal(lat) - Decimal(lat)%Decimal(0.0625)
lon = Decimal(lon) - Decimal(lon)%Decimal(0.0375)
lat = ceil(lat*10000)/10000.0
lon = ceil(lon*10000)/10000.0


f = open('data1.csv', 'rb')
spamreader = csv.reader(f, delimiter=',')
for row in spamreader:
	if(Decimal(row[0])==Decimal(lat) and Decimal(row[1])==Decimal(lon)):
		print row[2]