'use strict';

const router = require('../lib/router.js');
const Notes = require('../models/notes.js');

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};
let serverError = (res, err) => {
  let error = {error:err};
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/notes', (req, res) => {
  if ( req.query.id ) {
    Notes.findOne(req.query.id)
      .then( data => sendJSON(res,data) )
      .catch( err => serverError(res,err) );
  } else {
    Notes.fetchAll()
      .then( data => sendJSON(res,data) )
      .catch( err => serverError(res,err) );
  }
});

router.post('/api/v1/notes', (req,res) => {
  console.log('here in post');
  let record = new Notes(req.body);
  record.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.delete('/api/v1/notes', (req,res) => {
  console.log('here in DELETE');
  if(req.query.id) {
    Notes.deleteOne(req.query.id)
      .then(success => {
        let data = {id:req.query.id, deleted: success};
        sendJSON(res,data);
      })
      .catch(console.error);
  }
});

module.exports = {};