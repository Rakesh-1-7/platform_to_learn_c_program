const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Hello there !","","Welcome to your first C program.","","Hope you have Fun !"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type(){

    if(charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        //erase current text
        setTimeout(erase,newTextDelay);
    }

}

function erase(){
    if(charIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        if(textArrayIndex>=textArray.length)textArrayIndex=0;
        setTimeout(type,typingDelay+1100);
        textArrayIndex = textArrayIndex+1;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type,newTextDelay+250);
    type();
});