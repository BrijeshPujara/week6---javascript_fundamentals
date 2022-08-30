import got from "got";

const url = "https://api.github.com/repos/sinatra/sinatra";

got(url).then((res) => {
  let parsed_data = JSON.parse(res.body);

  console.log(parsed_data.name);
});
