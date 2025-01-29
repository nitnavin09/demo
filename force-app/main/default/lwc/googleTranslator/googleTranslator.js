import { LightningElement, api } from "lwc";
export default class GoogleTranslator extends LightningElement {
	@api recordId;
	@api objectApiName;
	sourceLang;
	targetLang;

	handleClick(event){
		let {name,value} =event.target;
		if(name === 'sourceLanguge'){
			this.sourceLang = value;
		}else if(name === 'targetLanguge'){
			this.targetLang = value;
		}else{
			
		}
		console.log('Source lag: ' + this.sourceLang);
		console.log('Target lag: ' + this.targetLang);
	}
	swaphandler(){
		console.log('Hit');
		let tempStr =''
		tempStr = this.sourceLang;
		this.sourceLang = this.targetLang;
		this.targetLang = tempStr;
	}

	translateHandler(){
		let url = `https://translation.googleapis.com/language/translate/v2?key=YOUR_GOOGLE_TRANSLATION_API_KEY&source=${this.sourceLang}&target=${this.targetLang}&q=${encodeURIComponent(this.template.querySelector('lightning-input[data-field="text"]').value)}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.template.querySelector('lightning-input[data-field="translatedText"]').value = data.data.translations[0].translatedText;
            })
            .catch(error => console.error('Error:', error));
	}
}