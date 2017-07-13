const express = require('express');
const router = express.Router();
const driver = require('../dbutil/driver.js').neo4jDriver;

/* GET api listing. */
router.get('/people/:name', (req, res) => {
  // res.send('express api works');
  let session = driver.session();
  session.run(`MATCH (person:Person{name: '${req.params.name}'})-[:PART_OF]->(team:Team) RETURN person, team`).then(function (result) {
    // result.records.forEach(function (record) {
    //   console.log(record.get('name'));
    // });
    res.send(result);
    session.close();
  }).catch(function (error) {
    console.log(error);
  });
});

module.exports = router;


