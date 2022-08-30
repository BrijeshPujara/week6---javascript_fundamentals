const GithubApi = require("./githubApi");

class Github {
  constructor(api) {
    this.api = api;
  }

  fetch(params) {
    this.api.fetchRepoData(params, (res) => {
      this.data = res;
    });
  }

  getRepoData() {
    return this.data;
  }
}

const test = new Github(new GithubApi());
test.fetch("sinatra/sinatra");
// (test.getRepoData());

module.exports = Github;
