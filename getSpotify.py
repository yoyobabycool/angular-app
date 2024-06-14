import requests
import json
response = requests.get('http://devara.pythonanywhere.com/getToken')
response_json = response.json()
access_token = response_json.get('accessToken')
head = "Bearer "+ access_token
url = "https://api-partner.spotify.com/pathfinder/v1/query?operationName=fetchPlaylist&variables=%7B%22uri%22%3A%22spotify%3Aplaylist%3A15uBOFXJMjU3u5BEf3frVO%22%2C%22offset%22%3A0%2C%22limit%22%3A25%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2291d4c2bc3e0cd1bc672281c4f1f59f43ff55ba726ca04a45810d99bd091f3f0e%22%7D%7D"
headers={"Authorization" : head}
response2 = requests.get(url, headers=headers)
data = response2.json()
tracks = []

for item in data["data"]["playlistV2"]["content"]["items"]:
    track_data = item["itemV2"]["data"]
    tracks.append({
        "name": track_data["name"],
        "playcount": track_data["playcount"]
    })

result = {
    "tracks": tracks
}

print(json.dumps(result, indent=4))
with open('src/assets/spotify.json', 'w') as f:
    f.write(json.dumps(result, indent=4))
