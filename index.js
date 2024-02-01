const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

const gitDetail = {
  login: "AmaanSarfaraz",
  id: 109590097,
  node_id: "U_kgDOBog2UQ",
  avatar_url: "https://avatars.githubusercontent.com/u/109590097?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/AmaanSarfaraz",
  html_url: "https://github.com/AmaanSarfaraz",
  followers_url: "https://api.github.com/users/AmaanSarfaraz/followers",
  following_url:
    "https://api.github.com/users/AmaanSarfaraz/following{/other_user}",
  gists_url: "https://api.github.com/users/AmaanSarfaraz/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/AmaanSarfaraz/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/AmaanSarfaraz/subscriptions",
  organizations_url: "https://api.github.com/users/AmaanSarfaraz/orgs",
  repos_url: "https://api.github.com/users/AmaanSarfaraz/repos",
  events_url: "https://api.github.com/users/AmaanSarfaraz/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/AmaanSarfaraz/received_events",
  type: "User",
  site_admin: false,
  name: "AMAAN SARFARAZ",
  company: "Learn with AMAAN",
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: " I am a highly skilled web developer who has a deep understanding of the MERN stack and its components.",
  twitter_username: "AmaanSarfaraz",
  public_repos: 8,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-07-19T10:00:36Z",
  updated_at: "2024-01-26T18:35:32Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("welcome to twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

app.get("/gitapi", (req, res) => {
  res.json(gitDetail);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
