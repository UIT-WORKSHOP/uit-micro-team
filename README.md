# UIT Micro team

An API used as micro service for UTI WORKSHOP Team tracker / management

## Stacks
- Key framework: [loopback](https://loopback.io/)
- Database: MongoDB


## Installation

After Cloning the project:

- Setting up your local mongoDB
  - [Install Mongodb](https://docs.mongodb.com/manual/installation/)
  - [Enable authentication](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
- Configure MongoDB data source
```javascript
  // In server/datasources.json
  ...
  "mongo": {
    "host": "127.0.0.1",
    "port": 27017,
    "url": <mongodb://username:password@host:port/database>,
    "database": <database>,
    "password": <password>,
    "name": "mongo",
    "user": <username>,
    "connector": "mongodb"
  }
  ...
```

- Install dependencies and start the server
```
  // Install the dependencies
  $ npm install
```

## Getting started

- Run the server
```
  $ npm start // Or node .
```
- API explorer: http://localhost:3000/explorer

Some common usage:
```
  // Get GTM current time
  # http://localhost:3000/
  // Get the list of common members
  # http://localhost:3000/api/commonMembers/
  //
```

**Notes:** Check explorer for more use cases
