 export class Repo{
    name:string;
    desc:string;
    url:string;
    size:number;
    forkCnt:number;
    constructor(repo:any){
        this.name=repo.name;
        this.desc=repo.description;
        this.url=repo.html_url;
        this.size=repo.size;
        this.forkCnt=repo.forks;
    }
    
}