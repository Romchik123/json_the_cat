const request = require("request");

// const argv = process.argv;

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("body:", body); // Print the HTML for the Google homepage.
      const data = JSON.parse(body);
      // callback(error, data);
      if (data.length === 0) {
        callback(`Requested breed is not found: ${error}`, null);
      } else if (data[0].description) {
        callback(undefined, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
