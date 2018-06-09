'use strict';

const router = require('../lib/router.js');

/**
 * GET Route (/)
 * Accepts an optional "name" query string parameter and says Hello
 * test with httpie:
 *     http http://localhost:8080
 *     http http://localhost:8080?name=John
 */
router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/dogs', (req, res) => {
  const id = req.query.id;
  if(id == 1976) {
    res.statusCode = 200;
    let msg = `ID: ${req.query.id}`;
    res.write(msg);
  } else if(id) {
    res.statusCode = 404;
    res.statusMessage = 'not found';
  } else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    console.log(res.statusMessage);
    //res.write((JSON.stringify({error: 'bad request'})));
  }
  res.end();
});
/**
 * POST Route (/data)
 * Accepts a JSON object and simply regurgitates it back to the browser
 * test with httpie:
 *     echo '{"title":"Go Home","content":"foobar"}' | http post http://localhost:8080/data
 */
router.post('/data', (req,res) => {
  console.log('here in post');
  res.statusCode = 200;
  res.statusMessage = 'OK';
  if(req.body) {
    res.write( JSON.stringify(req.body));
  } else {
    res.statusCode = 400;
  }
  res.end();
});

router.put('/update', (req, res) => {
  const id = req.query.id;
  if(id) {
    console.log('here in PUT');
    res.statusCode = 200;
    res.statusMessage = 'OK';
    let msg = '{"ID": "`${req.query.id}`", "content": "PUT to the test"}';
    res.write(JSON.stringify(msg));
  } else {
    console.log('here in PUT error');
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    console.log(res.statusMessage);
  }
  res.end();

  router.delete('/delete', (req,res) => {
    console.log('here in DELETE');
    const id = req.query.id;
    if(id === req.body.id) {
      delete(req.query.id);
      let msg = `Deleted ID: ${req.query.id}`;
      res.write(msg);
      res.statusCode = 400;

    }
  });
});

module.exports = {};