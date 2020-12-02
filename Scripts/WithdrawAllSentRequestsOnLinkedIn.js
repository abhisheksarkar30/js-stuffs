var button1 = document.getElementsByClassName("invitation-card__action-btn artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary ember-view")
var button2 = document.getElementsByClassName("artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view")
setInterval(()=>{
    for(var i=0;i<button1.length;i++){
        button1[i].click()
		while(button2.length > 0) {
		button2[0].click()
		break
		}
        }},1000)
