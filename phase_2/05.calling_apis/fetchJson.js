const got = require("got");

const fetchJson = (url, callback) => {
  got(url).then((res) => {
    const data = JSON.parse(res.body);
    {
      callback(data);
    }
  });
};

fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
  console.log(response);
});
