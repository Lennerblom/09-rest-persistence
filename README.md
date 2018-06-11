[![Build Status](https://travis-ci.org/Lennerblom/09-rest-persistence.svg?branch=master)](https://travis-ci.org/Lennerblom/09-rest-persistence)

# 09: Vanilla RESTful API With Persistence
___
###### TRAVIS: https://travis-ci.org/Lennerblom/09-rest-persistence
###### HEROKU: https://rest-persistence.herokuapp.com/
###### MASTER:
###### PR: https://github.com/Lennerblom/09-rest-persistence/pull/1
___
This HTTP server was created using the native NodeJS http module.  The home route URL is: https://rest-persistence.herokuapp.com/ and accepts an optional name query string (?name=name), which will display "Hello" or "Hello Name" if option is added.  It will handle `GET`, `POST`, `PUT` and `DELETE` requests. 

### **In order to run my app, do the following:**
###**In order to run my app, do the following:**

* Using HTTPie run the following commands in the terminal in order:

  1. `http POST :3009/api/v1/notes title=tamale content=pork`

  2. `http GET :3009/api/v1/notes?id=9eb6eea0-6cfb-11e8-aea6-4907e97e5990`

  3. `http DELETE :3009/api/v1/notes?id=9eb6eea0-6cfb-11e8-aea6-4907e97e5990`
