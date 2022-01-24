let GreenMode=false;


SwitchGreen.addEventListener('click', CheckGreen);



let buttons=document.getElementsByTagName('input');
let labels=document.getElementsByTagName('label');

for(let CountToken=0;CountToken<10;CountToken++){
	let AnswButtons=[];
	for(let i=0;i<buttons.length;i++){
		let ButtonsArray = Array.from(buttons[i].classList);
		if(ButtonsArray.includes('answer'+CountToken)){

			AnswButtons.push(buttons[i])
		}
	}
	let Answer1=document.querySelector('#Answer'+CountToken+"1");
	let Answer2=document.querySelector('#Answer'+CountToken+"2");
	



	for(let i=0;i<AnswButtons.length;i++){
	};



	function addHidden(event){
	    event.classList.add('hidden');
	};
	function removeHidden(event){
	    event.classList.remove('hidden');
	};
	function PreventDefault(event){
		preventDefault();
	}

	let AnswerToken=true;

	if(AnswerToken){
		for(let i=0;i<AnswButtons.length;i++){
			if(AnswButtons[i]){
			    AnswButtons[i].addEventListener('click', function clickButton(event){
			    	const ButClassId =Array.from(AnswButtons[i].classList);
					    if(ButClassId.includes('True-Answer'+CountToken)){
					    	removeHidden(Answer1);
					    	addAtribDisabled('flexRadioDefault'+CountToken+'1');

					    }
					    else{

					    	removeHidden(Answer2);
					   	 	
					    }
				    	AllDisabled();
				    	Add_Green_to_True_Answer();
				    	addAtribChecked('flexRadioDefault'+CountToken+i);
				})
			}
		}
	};


	function Add_Green_to_True_Answer(){
		for(let i=0;i<100;i++){
			if(labels[i]){
				const labelClassId =Array.from(labels[i].classList);
				if(labelClassId.includes('True-Answer'+CountToken)){
					if(GreenMode){
						labels[i].classList.add('Green-color');
						labels[i].classList.remove('form-text-label');
					}
				}
			}
		}
	}



	function AllDisabled(){
		addAtribDisabled('flexRadioDefault'+CountToken+'1');
		addAtribDisabled('flexRadioDefault'+CountToken+'2');
		addAtribDisabled('flexRadioDefault'+CountToken+'3');
		addAtribDisabled('flexRadioDefault'+CountToken+'4');
	}

	function addAtribDisabled(Id){
		var liElem = document.getElementById(Id);
		liElem.setAttribute('disabled', '')
	};
}

	function addAtribChecked(Id){
		var liElem = document.getElementById(Id);
		liElem.setAttribute('checked', 'true');
	};


	function CheckGreen(){
		console.log()
		if(GreenMode){
			console.log('Off');
			GreenMode=false;
		}
		else{
			console.log('On',)
			GreenMode=true;
			
		}
	}
	       
