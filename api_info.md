# radio garden

source: https://jonasrmichel.github.io/radio-garden-openapi/

## to grab places id
```
  https://radio.garden/api/ara/content/places
```
```jsx
  data.list[0].id
```
```jsx
{
  "apiVersion": 1,
  "version": "9bd5454",
  "data": {
    "list": [
      {
        "id": "Aq7xeIiB", //places id
        "geo": [
          -97.74306,
          30.267153
        ],
        "url": "/visit/austin-tx/Aq7xeIiB",
        "size": 21,
        "boost": true,
        "title": "Austin TX",
        "country": "United States"
      }
    ],
    "version": "9bd5454"
  }
}
```


## to grab list of channels in certain area
```
  http://radio.garden/api/ara/content/page/{placesId}/channels
```

```jsx
data.content[0].items[0].href      .split("/")[last_index]
```

```jsx
{
  "apiVersion": 1,
  "version": "9bd5454",
  "data": {
    "title": "Austin TX",
    "subtitle": "All Stations",
    "url": "/visit/austin-tx/Aq7xeIiB/channels",
    "map": "Aq7xeIiB",
    "count": 21,
    "utcOffset": -360,
    "content": [
      {
        "itemsType": "channel",
        "type": "list",
        "items": [
          {
            "title": "KUTX FM 98.9",
            "href": "/listen/kutx-98-9/vbFsCngB" //last string is the channelId
          }
        ]
      }
    ]
  }
}
```

## to grab the mp3 url
```
  http://radio.garden/api/ara/content/listen/{channelId}/channel.mp3

```

## html5 mp3 player
```jsx
  <audio controls>
      <source src="http://radio.garden/api/ara/content/listen/{chanelId}/channel.mp3" type="audio/ogg"/>
  </audio>
```