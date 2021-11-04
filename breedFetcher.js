const request = require("request");

const argv = process.argv;

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${argv[2]}`,
  (error, response, body) => {
    // console.log("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Requested breed is not found: ${error}`);
    } else if (data[0].description) {
      console.log(data[0].description);
    }
  }
);
