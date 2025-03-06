let t1=performance.now();

// let element=document.createElement('div');
let fragment=document.createDocumentFragment();
function alrt(event){
    alert(event.target.textContent);
}
for(let i=0;i<100;i++){
    let paragraph=document.createElement('p');
    paragraph.textContent='This is paragraph '+(i+1);
    // paragraph.addEventListener('click',alrt);
    // element.appendChild(paragraph);
    fragment.appendChild(paragraph)
}
// document.body.appendChild(element);
document.body.appendChild(fragment);

let t2=performance.now();
console.log(t2-t1);