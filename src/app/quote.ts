export class Quote {
    public showDescription:boolean;
    constructor(public id:number, public name:string,public description:Date){
        this.showDescription=false;

    }
}
