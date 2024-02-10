// const express = require("express");
// const bodyParser = require("body-parser");
// const PORT = process.env.PORT || 3001;

// const app = express();
// app.use(bodyParser.json());
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });
// app.post("/form", (req, res) => {
//   res.json({ message: "Hello " + req.body.name });
// });
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

const express = require("express");
const app = express();

app.get("/posts", (req, res) => {
  console.log("inside posts");
  const apiUrl = "https://course-api.com/react-tours-project";

  // Construct the query string with all query parameters
  const params = new URLSearchParams(req.query);
  const queryString = params.toString();

  // Append the query string to the API URL if it's not empty
  const apiUrlWithParams = queryString ? `${apiUrl}?${queryString}` : apiUrl;
  console.log(apiUrlWithParams);
  fetch(apiUrlWithParams)
    .then((response) => response.json())
    .then((data) => {
      // Process the fetched data
      // ...

      // Send the processed data as the response
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    });
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
