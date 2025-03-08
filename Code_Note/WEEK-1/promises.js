async function pro() {
    try {
        let p1 =await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("started promise 1");
                resolve("success");
            }, 3000);
        });

        let p2 = await new Promise((resolve, reject) => {
            console.log("inside second promise");
            setTimeout(() => {
                resolve("second success");
            }, 2000);
        });

        console.log(p2); // "second success"
    } catch (error) {
        console.error(error);
    }
}

pro();

//fetching
async function utility(){
    let content=await fetch('https://jsonplaceholder.typicode.com/psots/1'); //fetch api return a promise thats why we need to call it inside async function along with await
    let output=await content.json();
    console.log(output) 
}
utility();

async function helper() {

    let options = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Babbar',
          body: 'Tagdi Body ',
          userId: 1998,
          weight: 90,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json();
    return response;
}


async function utility2() {
    let ans = await helper();
    console.log(ans);
}

utility2();