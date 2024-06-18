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
#print(response2.json())
tracks = []
langs = ["Telugu", "Tamil", "Kannada", "Malayalam", "Hindi" ,"All Hail Tiger"]
urls = [
"https://music.youtube.com/playlist?list=OLAK5uy_lk4hlzR_Y1Mk5x6hjZJbwNgugWtMlrj3I",
"https://music.youtube.com/playlist?list=OLAK5uy_kgf3VBSGldkc2YVY2NB7VfMexN-QHSy4E",
"https://music.youtube.com/playlist?list=OLAK5uy_lzWQpVQXtRp27bT2R6BZs-ZPsQaPwVodA",
"https://music.youtube.com/playlist?list=OLAK5uy_nwEeoMyegxPYWlE8JY8oAlnltWnATeXZ8",
"https://music.youtube.com/playlist?list=OLAK5uy_mEqgIEi2CkDBHtFKSL1l9S9Pv5YNK9MPA",
"https://music.youtube.com/playlist?list=OLAK5uy_n62ExiozdeeiZ29vqy3wdDwEfZ4b1EgLE"
]
items = data["data"]["playlistV2"]["content"]["items"]
ytheaders = {'User-Agent': 'Safari/537.36'}
for i in range(6):
    ytresponse = requests.get(urls[i], headers=ytheaders)
    page_content = ytresponse.text
    index = page_content.find("plays")
    text = page_content[index-10:index-1]
    count = text.find("x22")
    tracks.append({
        "language": langs[i],
        "spotifyCount": items[i]["itemV2"]["data"]["playcount"],
        "ytmusicCount": text[count+3:],
		"image": items[i]["itemV2"]["data"]["albumOfTrack"]["coverArt"]["sources"][2]["url"]
    })
result = {
    "tracks": tracks
}

print(json.dumps(result, indent=4))
with open('spotify.json', 'w') as f:
    f.write(json.dumps(result, indent=4))
