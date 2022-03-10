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

var titleText = [ "$ trickster.pw", "$ trickster.p", "$ trickster.", "$ trickster", "$ trickste", "$ trickst", "$ tricks", "$ trick", "$ tric", "$ tri", "$ tric", "$ trick", "$ tricks", "$ trickst", "$ trickste", "$ trickster", "$ trickster.", "$ trickster.p", "$ trickster.pw"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
