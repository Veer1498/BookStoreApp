export class userReg{
    public firstName:string="";
    public lastName:string="";
    public emailId:string="";
    public date:Date=new Date;
    public password:string="";

    constructor(firstName:string,lastName:string,emailId:string,date:Date,password:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.date = date;
        this.password = password;
    }
}