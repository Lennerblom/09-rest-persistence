'use strict';

const api = require('../../../src/api/api.js');
const superagent = require('superagent');

describe('api', () => {
  //let expected, actual;
  it('should return the ID for GET /?id =123', () => {

    superagent
      .get('http://localhost:3002/api/vi/dogs?id=123')
      .then(data => console.log(data))
      .catch(err => console.error(err));
  });

  it('POST should return a status code 400 with "bad request" if no request body was provided or the body was invalid', () => {
    superagent
      .post('http://localhost:3002/data')
      .then(data => console.log(data))
      .catch(err => console.error(err));
  });
});


// write a test to ensure that your api returns a status code of 404 for routes that have not been registered
// write tests to ensure the /api/simple-resource-name endpoint responds as described for each condition below:
// GET: test 404, it should respond with 'not found' for valid requests made with an id that was not found
// GET: test 400, it should respond with 'bad request' if no id was provided in the request
// GET: test 200, it should contain a response body for a request made with a valid id
// POST: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
// POST: test 200, it should respond with the body content for a post request with a valid body