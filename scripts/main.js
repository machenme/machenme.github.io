let myImage = document.querySelector('div img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mdn_01.png') {
        myImage.setAttribute('src', 'images/mdn_02.png');
    }
    if (mySrc === 'images/mdn_02.png') {
        myImage.setAttribute('src', 'images/mdn_03.png');
    }
    if (mySrc === 'images/mdn_03.png') {
        myImage.setAttribute('src', 'images/mdn_04.png');
    }
    if (mySrc === 'images/mdn_04.png') {
        myImage.setAttribute('src', 'images/mdn_01.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Python 酷毙了，' + myName;
    }
}

// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
// }

myButton.onclick = function () {
    setUserName();
}