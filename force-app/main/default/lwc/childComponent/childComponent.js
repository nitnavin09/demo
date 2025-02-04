import { LightningElement, api } from "lwc";
export default class ChildComponent extends LightningElement {
	@api recordId;
	@api objectApiName;
	@api name='Navin';
	@api phone=234424032;

	childHandler(){
		let tag =this.template.querySelector('child');
		let pTag = document.createElement('p').innerText ='Nitnawar';
		tag.appendChild(pTag);

	}
}