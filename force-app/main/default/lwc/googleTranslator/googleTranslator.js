import { LightningElement, api } from "lwc";
import GOOGLEAPI from "@salesforce/apex/GoogleApiController.getlanguageList";
import TRANSLATE from "@salesforce/apex/GoogleApiController.translate";
export default class GoogleTranslator extends LightningElement {
	
	sourceLang;
	targetLang;
	langText;
	optionsLangauge;
    connectedCallback(){
		this.getLanguage();
    }

	handlesrbClick(event){
		this.sourceLang = event.detail.value;	
	}
	handletrgClick(event){
		this.targetLang = event.detail.value;	
	}
	handleTextChange(event){
		this.langText = event.target.value;
	}
	swaphandler(){
		console.log('Hit');
		let tempStr =''
		tempStr = this.sourceLang;
		this.sourceLang = this.targetLang;
		this.targetLang = tempStr;
	}

	translateHandler(){
		translate(this.sourceLang, this.targetLang, this.langText)
		.then((result )=>{
			console.log( 'Translate Txt',result);
		})
		.catch((error)=>{
			console.error('Error in translating:', error);
		})
	}

	async getLanguage(){
		this.optionsLangauge = await GOOGLEAPI();
		//console.log('optionsLangauge ===: ',this.optionsLangauge);
	}
	@api get options(){
		return [
  { label: 'Automatic', value: 'auto' },
  { label: 'Afrikaans', value: 'af' },
  { label: 'Albanian', value: 'sq' },
  { label: 'Amharic', value: 'am' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Armenian', value: 'hy' },
  { label: 'Assamese', value: 'as' },
  { label: 'Aymara', value: 'ay' },
  { label: 'Azerbaijani', value: 'az' },
  { label: 'Bambara', value: 'bm' },
  { label: 'Basque', value: 'eu' },
  { label: 'Belarusian', value: 'be' },
  { label: 'Bengali', value: 'bn' },
  { label: 'Bhojpuri', value: 'bho' },
  { label: 'Bosnian', value: 'bs' },
  { label: 'Bulgarian', value: 'bg' },
  { label: 'Catalan', value: 'ca' },
  { label: 'Cebuano', value: 'ceb' },
  { label: 'Chinese (Simplified)', value: 'zh' },
  { label: 'Chinese (Simplified, PRC) ', value: 'zh-cn' },
  { label: 'Chinese (Traditional, Taiwan)', value: 'zh-tw' },
  { label: 'Chinese (Simplified, Singapore)', value: 'zh-sg' },
  { label: 'Chinese (Traditional, Hong Kong)', value: 'zh-hk' },
  { label: 'Corsican', value: 'co' },
  { label: 'Croatian', value: 'hr' },
  { label: 'Czech', value: 'cs' },
  { label: 'Danish', value: 'da' },
  { label: 'Dhivehi', value: 'dv' },
  { label: 'Dogri', value: 'doi' },
  { label: 'Dutch', value: 'nl' },
  { label: 'English', value: 'en' },
  { label: 'Esperanto', value: 'eo' },
  { label: 'Estonian', value: 'et' },
  { label: 'Ewe', value: 'ee' },
  { label: 'Filipino (Tagalog)', value: 'fil' },
  { label: 'Finnish', value: 'fi' },
  { label: 'French', value: 'fr' },
  { label: 'Frisian', value: 'fy' },
  { label: 'Galician', value: 'gl' },
  { label: 'Georgian', value: 'ka' },
  { label: 'German', value: 'de' },
  { label: 'Greek', value: 'el' },
  { label: 'Guarani', value: 'gn' },
  { label: 'Gujarati', value: 'gu' },
  { label: 'Haitian Creole', value: 'ht' },
  { label: 'Hausa', value: 'ha' },
  { label: 'Hawaiian', value: 'haw' },
  { label: 'Hebrew', value: 'he' },
  { label: 'Hebrew', value: 'iw' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Hmong', value: 'hmn' },
  { label: 'Hungarian', value: 'hu' },
  { label: 'Icelandic', value: 'is' },
  { label: 'Igbo', value: 'ig' },
  { label: 'Ilocano', value: 'ilo' },
  { label: 'Indonesian', value: 'id' },
  { label: 'Irish', value: 'ga' },
  { label: 'Italian', value: 'it' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Javanese', value: 'jv' },
  { label: 'Javanese', value: 'jw' },
  { label: 'Kannada', value: 'kn' },
  { label: 'Kazakh', value: 'kk' },
  { label: 'Khmer', value: 'km' },
  { label: 'Kinyarwanda', value: 'rw' },
  { label: 'Konkani', value: 'gom' },
  { label: 'Korean', value: 'ko' },
  { label: 'Krio', value: 'kri' },
  { label: 'Kurdish', value: 'ku' },
  { label: 'Kurdish (Sorani)', value: 'ckb' },
  { label: 'Kyrgyz', value: 'ky' },
  { label: 'Lao', value: 'lo' },
  { label: 'Latin', value: 'la' },
  { label: 'Latvian', value: 'lv' },
  { label: 'Lingala', value: 'ln' },
  { label: 'Lithuanian', value: 'lt' },
  { label: 'Luganda', value: 'lg' },
  { label: 'Luxembourgish', value: 'lb' },
  { label: 'Macedonian', value: 'mk' },
  { label: 'Maithili', value: 'mai' },
  { label: 'Malagasy', value: 'mg' },
  { label: 'Malay', value: 'ms' },
  { label: 'Malayalam', value: 'ml' },
  { label: 'Maltese', value: 'mt' },
  { label: 'Maori', value: 'mi' },
  { label: 'Marathi', value: 'mr' },
  { label: 'Meiteilon (Manipuri)', value: 'mni-mtei' },
  { label: 'Mizo', value: 'lus' },
  { label: 'Mongolian', value: 'mn' },
  { label: 'Myanmar (Burmese)', value: 'my' },
  { label: 'Nepali', value: 'ne' },
  { label: 'Norwegian', value: 'no' },
  { label: 'Nyanja (Chichewa)', value: 'ny' },
  { label: 'Odia (Oriya)', value: 'or' },
  { label: 'Oromo', value: 'om' },
  { label: 'Pashto', value: 'ps' },
  { label: 'Persian', value: 'fa' },
  { label: 'Polish', value: 'pl' },
  { label: 'Portuguese (Portugal, Brazil)', value: 'pt' },
  { label: 'Punjabi', value: 'pa' }
	]
	}
}