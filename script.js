const body = document.querySelector('body');
const label = document.querySelector('label');

label.addEventListener('click',(e)=>
{
    if(e.target.checked === true)
    {
        body.style.background="black";
    }else{
        body.style.background="white";
    }
});