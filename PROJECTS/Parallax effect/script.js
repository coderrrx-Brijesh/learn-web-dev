// let element = document.querySelector('.sport_desc');
// if (element) {
//     console.log(element.innerHTML);
// } else {
//     console.log('Element not found');
// }

// //append element at the end of the class or element
// let created_ele=document.createElement('h2')
// //1
// created_ele.textContent='I have added this Heading'
// //2
// let text1=document.createTextNode(" [Added bY appending]")
// created_ele.appendChild(text1)
// element.append(created_ele);

// //pushing element before or after an existing element as per our requird 
// //location
// let new_element=document.createElement('h2')
// new_element.textContent='I have added this Heading Before'
// let text2=document.createTextNode(" [Added bY insertAdjacentElement]")
// new_element.appendChild(text2)
// element.insertAdjacentElement("beforeend",new_element)

// // remove element
// element.removeChild(new_element)

// // modify or add css
// created_ele.style.color='red'
// created_ele.style.cssText='color:blue; font-size: 30px';
// created_ele.setAttribute('style','color:blue; font-size: 30px;')
// created_ele.setAttribute("id", "created_ele")

// //get class names of elements--> they have methods to add edit classes
// let str_classes=element.className
// let arr_classes=element.classList
// console.log(arr_classes)
