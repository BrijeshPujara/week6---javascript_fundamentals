const got = require("got");

const fetchRepoInfo = (params, callback) => {
  const url = `https://api.github.com/repos/${params}`;
  got(url).then((res) => {
    const data = JSON.parse(res.body);
    {
      callback(data);
    }
  });
};

fetchRepoInfo("sinatra/sinatra", (receivedResponse) => {
  console.log(receivedResponse);
});
