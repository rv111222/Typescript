import { Repo } from "./Repo";
import { Service } from "./service";
import { User } from "./User";
import * as _ from 'lodash';
let svc: Service = new Service();

svc.getUserInfo("bmizerany", (user: User) => {
  svc.getRepos("bmizerany", (repos: Repo[]) => {
    let sortedResponse = _.sortBy(repos,[(repo:Repo)=>repo.forkCnt])
    user.repo = sortedResponse;
    console.log(user);
  });
});
