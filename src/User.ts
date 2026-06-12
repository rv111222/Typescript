import { Repo } from "./Repo";

export class User{
    login: string;
    fullname: string;
    repocount:number;
    fcount:number;
    repo:Repo[];
    constructor(userResponse:any){
        this.login=userResponse.login;
        this.fullname=userResponse.name;
        this.repocount=userResponse.public_repos;
        this.fcount=userResponse.followers;
        
    }
}