from pymongo import MongoClient
from pprint import pprint
import requests




client = MongoClient("mongodb://localhost:27017/")
db = client.admin


task = {"Name": "Ram", "Shop" : "Ram Shop" ,"Status" : "Good" , "_id": 1}
resp = requests.post('http://localhost:7777/send', json=task)


serverStatusResult = db.command("serverStatus")
pprint(serverStatusResult)
