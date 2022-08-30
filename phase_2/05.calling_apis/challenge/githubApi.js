const got = require("got");

class GithubApi {
  constructor() {}

  fetchRepoData(params, callback) {
    const url = `https://api.github.com/repos/${params}`;
    got(url).then((res) => {
      const data = JSON.parse(res.body);
      {
        callback(data);
      }
    });
  }
}

const test = new GithubApi();

test.fetchRepoData("sinatra/sinatra", (response) => {
  console.log(response);
});

module.exports = GithubApi;
