if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "% craze.wtf", "% craze.wt", "% craze.w", "% craze", "% craz", "% cra", "% cr", "% c", "% cr", "% cra", "% craz", "% craze", "% craze.w", "% craze.wt", "% craze.wtf"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
