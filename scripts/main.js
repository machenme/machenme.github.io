let myImage = document.querySelector('img');

myImage.onclick = () =>{
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/icon.jpg'){
        myImage.setAttribute('src','images/icon2.jpg')
    } else{
        myImage.setAttribute('src','images/icon.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入名字');
    if (!myName){
        setUserName();
    }else{

    localStorage.setItem('name', myName);
    myHeading.textContent = '下午好,' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '下午好,' + storedName;
}
myButton.onclick = function(){
    setUserName();
}