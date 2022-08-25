const got = require("got");

const fetchJson = (url, callback) => {
  got(url).then((res) => {
    {
      callback(JSON.parse(res.body));
    }
  });
};

fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
  console.log(response);
});

