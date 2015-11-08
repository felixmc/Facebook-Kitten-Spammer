var baseUrl  = 'http://www.randomkittengenerator.com/cats/rotator.php';
var chatBox  = document.getElementsByName('message_body')[0];
var replyBut = document.getElementById('u_0_r');

var kitInt   = setInterval(function() {
	chatBox.classList.remove('DOMControl_placeholder');
	chatBox.value = baseUrl + '?x=' + new Date().getTime();
	
	//this only seems to work on Chrome (Firefox doesn't seem to have this)
	getEventListeners(chatBox).paste[0].listener();
}, 6000);

var replyClicker = setInterval(function(){
	replyBut.click();
}, 10000);

var stopKittens = function() { 
	clearInterval(kitInt);
	clearInterval(replyClicker); 
};
