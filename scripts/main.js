let myImage = document.querySelector('div img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mdn_01.png') {
      myImage.setAttribute ('src','images/mdn_02.png');
    }
    if(mySrc === 'images/mdn_02.png') {
        myImage.setAttribute ('src','images/mdn_03.png');
    } 
    if(mySrc === 'images/mdn_03.png') {
        myImage.setAttribute ('src','images/mdn_04.png');
    } 
    if(mySrc === 'images/mdn_04.png') {
    myImage.setAttribute ('src','images/mdn_01.png');
    } 
}