const cnt_value=document.getElementsByClassName('counter')[0];
const increment=()=>{
    let value=parseInt(cnt_value.innerText);
    value++;
    cnt_value.innerText=value;
}
const decrement=()=>{
    let value=parseInt(cnt_value.innerText);
    value--;
    cnt_value.innerText=value;
}