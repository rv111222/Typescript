import request from "request";
import { User } from "./User";
import { Repo } from "./Repo";
const options: any = {
  headers: {
    "User-Agent": "request",
  },
  json: true,
};
export class GithubApiService {
  getUserInfo(username: string, cb: (user: User) => any) {
    request.get(
      "https://api.github.com/users/" + username,
      options,
      (error: any, response: any, body: any) => {
        let user = new User(body);
        cb(user);
      }
    );
  }
  getRepos(username:string,cb:(repos:Repo[])=>any) {
    request.get(
      "https://api.github.com/users/" + username + "/repos",
      options,
      (error: any, response: any, body: any) => {
       
       let repos = body.map(repo=>new Repo(repo));
       cb(repos);
      }
    );
  }
}
