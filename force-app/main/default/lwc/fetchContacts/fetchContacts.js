import { LightningElement, api ,wire } from "lwc";
import getContacts from "@salesforce/apex/LwcController.getContacts";

// "export default class Hello extends LightningElement {}";
export default class FetchContacts extends LightningElement {
    @api recordId;
    contactsData;
    @wire(getContacts, {accId :'$recordId'})
    contacts({data,error}){
        if(data){
            this.contactsData = data;
        }
        if(error){
            //console.error('Error in fetching contacts:', error);
            this.error = error;
        }
        console.log('Contact list ==:',this.contactsData);
    };
	
}