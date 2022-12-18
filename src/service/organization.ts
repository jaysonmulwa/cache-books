import { organization } from "../types/organization";

export class Organization {
   
   private orgId: number = 0;
   private orgName: string = "";
   private createDt: any = "" ;

   constructor(orgName: string) {
      this.orgName = orgName;
   }

   public create() :any {
        this.orgId = Date.now();
        this.createDt = new Date("yyyy-mm-dd");
        return {
            "orgId": this.orgId,
            "orgName": this.orgName,
            "createDt": this.createDt
        };
   }

   public edit(orgName: string) :number {
        return this.orgId;
   }

   public search(orgName: string) :any {
        return;
   }

   private hasAnotherOrg() :boolean {
        return true;
   }
}
