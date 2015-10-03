window.onload = function () {
  // add an event listener to each li element inside of the nav menu.
  // Make it listen for a Click event
    // this event should log to the console the text inside of the <a> tag
    // the event should only log one word per click.

var linkList = document.getElementsByClassName("navLink");
console.log(linkList);

for (i = 0; i < linkList.length; i++ ) {
	linkList[i].addEventListener("click", function(){
	console.log(this);
	
	})

}



}