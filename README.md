[![Build Status](https://travis-ci.org/Lennerblom/09-rest-persistence.svg?branch=master)](https://travis-ci.org/Lennerblom/09-rest-persistence)

# 09: Vanilla RESTful API With Persistence
___
###### TRAVIS: https://travis-ci.org/Lennerblom/09-rest-persistence
###### HEROKU: https://rest-persistence.herokuapp.com/
###### MASTER:
###### PR: https://github.com/Lennerblom/09-rest-persistence/pull/1
___
This HTTP server was created using the native NodeJS http module.  The home route URL is: https://rest-persistence.herokuapp.com/ and accepts an optional name query string (?name=name), which will display "Hello" or "Hello Name" if option is added.  It will handle `GET`, `POST`, and `DELETE` requests. 

### **In order to run my app, do the following:**

Fork this repo and clone it to your system so you can run the below commands.  In the terminal cd into the root folder of the cloned repo.  Type `npm init -y` then `npm i` to load the dependencies. Type `npm run watch` to start the server with nodemon.

Open another tab in the terminal and run the following commands with HTTPie

* Using HTTPie run the following commands in the terminal in order:

  1. `http POST :3009/api/v1/notes title=tamale content=pork`

  You should receive a JSON object in the terminal and you'll need to copy and paste the long id and replace the id in the GET, and DELETE commands below.

  2. `http GET :3009/api/v1/notes?id=829c4c60-6df0-11e8-8bb8-8f5a2fd3ddda`

  3. `http DELETE :3009/api/v1/notes?id=829c4c60-6df0-11e8-8bb8-8f5a2fd3ddda`
