import { LightningElement,api,wire,track } from "lwc";
import getOpportunity from "@salesforce/apex/LwcController.getOpportunity";

import OPP_NAME from "@salesforce/schema/Opportunity.Name";
import OPP_STAGENAME from "@salesforce/schema/Opportunity.StageName";
import OPP_CLOSEDATE from "@salesforce/schema/Opportunity.Closedate";

const columns = [
    {label:'Name', type:'text',fieldName:OPP_NAME.fieldApiName},
    {label:'Stage Name', type:'text',fieldName:OPP_STAGENAME.fieldApiName},
    {label:'Closed Date', type:'Date',fieldName:OPP_CLOSEDATE.fieldApiName}
]
export default class LightingDataTableOpportunity extends LightningElement {
    @track column = columns;
    opportunities;
    searchName = null;
    error;
   handleInputChange(event){
        this.searchName= event.target.value;
   }
    async searchHandler(){
        try {
            this.opportunities = await getOpportunity({name : this.searchName})
           this.error = undefined;
        }catch(e){
            this.error = e.message;
            this.opportunities = null;
        }
        console.log('Opportunity',this.opportunities);
    }
    
    
}