# Endpoints

Documentation for planned endpoints and responses.

## Get Route

```
GET /api/route/:id
```

Retriev information for a route.

## Get Area

```
GET /api/area/:id
```

Retrieve information for an area.

## Edit Request of Area

```
PUT /api/area/request
```

Make a request to edit an area.

## Edit Request of Route

```
PUT /api/route/request
```

Make a request to edit a route.

## Search

```
GET /api/search/:query
```

Search the website for routes or areas.

## Random

```
GET /api/search/random
```

Get a random route from the crag.

## Sign Up

```
POST /api/authentication/sign-up
```

## Login

```
POST /api/authentication/login
```

## Logout

```
POST /api/authentication/logout
```

## Log Send

```
POST /api/route/send
```

Logs a send of a boulder.

## Log Attempt

```
POST /api/route/attempt
```

Logs an attempt on a boulder.

## Log Interest

```
POST /api/route/interest
```

Logs that climber is interested in projecting a route.

## Post historical information

```
POST /api/route/history
```

Upload history of a route.

## Post Beta

```
POST /api/route/beta
```

Upload a video and or text of your beta for a route.

## Update Status

```
PUT /api/route/status
```

Updates the status of a route: weather, clean, hold integrity