import { organization } from "../types/organization";

export class Organization {
   
   private orgId: number = 0;
   private orgName: string = "";
   private createDt: string = "";

   constructor(orgName: string) {
      this.orgName = orgName;
   }

   public create() :any {
        return {};
   }

   public edit(orgName: string) :number {
        return this.orgId;
   }

   public search(orgName: string) :any {
        return;
   }
}
