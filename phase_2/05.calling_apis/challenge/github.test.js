const Github = require("./github");
const GithubApi = require("./githubApi");

describe("Github Data", () => {
  it("should  ", () => {
    const api = new GithubApi();
    const github = new Github(api);

    github.fetch("sinatra/sinatra");
    expect(github.getRepoData());
  });
});
