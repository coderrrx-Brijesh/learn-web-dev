let i=0;
function counter(){
    console.log(i++)
    for(let j=0;j<2000000000;j++){

    }
    counter();
}
counter()