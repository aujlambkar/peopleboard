const neo4j = require('neo4j-driver').v1;
const environment = require('../environments/environment.js').environment;

var driver = neo4j.driver(environment.NEO4J_URL, neo4j.auth.basic(environment.NEO4J_USER, environment.NEO4J_PASS));

// Register a callback to know if driver creation was successful:
driver.onCompleted = function () {
  // proceed with using the driver, it was successfully instantiated
  console.log('Driver instantiation successful');
};

// Register a callback to know if driver creation failed.
// This could happen due to wrong credentials or database unavailability:
driver.onError = function (error) {
  console.log('Driver instantiation failed', error);
};

// Close the driver when application exits.
// This closes all used network connections.
// driver.close();

module.exports.neo4jDriver = driver;

