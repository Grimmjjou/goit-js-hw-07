const inputFont=document.querySelector('input#font-size-control');
const inputText=document.querySelector('span#text');
inputFont.addEventListener('change', event=>{
    inputText.style.fontSize=`${event.target.value}px`;
})