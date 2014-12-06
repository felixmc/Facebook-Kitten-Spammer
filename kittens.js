var baseUrl  = "http://www.randomkittengenerator.com/images/cats/rotator.php";
var chatBox  = document.getElementsByName("message_body")[0];
var replyBut = document.getElementById("u_0_s");

var kitInt   = setInterval(function() {
	chatBox.classList.remove("DOMControl_placeholder")
	chatBox.value = baseUrl + "?x=" + new Date().getTime();

	getEventListeners(chatBox).paste[0].listener();

	setTimeout(function(){
			replyBut.click();
		}, 4000);

}, 6000);

var stopKittens = function() { clearInterval(kitInt); };
