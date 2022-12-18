import { organization } from "../types/organization";

class Organization {
   
   private orgId: number = 0;
   private orgName: string = "";
   private createDt: string = "";

   constructor(orgName: string) {
      this.orgName = orgName;
   }

   public create(orgName: string) :any {
    
   }

   public delete(orgId: string) :any {
    
   }

   public edit(orgName: string) :any {

   }

   public search(orgName: string) :any {
        return;
   }
}