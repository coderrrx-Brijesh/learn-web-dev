//1.to monitor events use monitorEvents(object) and unmonitorEvents(object)


// 2.Event listner
document.addEventListener('click', function(event) {
     console.log('clicked');
})

function alrt(){
     alert("You clicked on document");
}
document.addEventListener("click",alrt,true);
document.removeEventListener("click",alrt,true);