const body = document.querySelector('body');
const label = document.querySelector('label');
const span = document.querySelectorAll('span');
const col = document.querySelector(".col-sm-4");
console.log(col)


label.addEventListener('click',(e)=>
{
    if(e.target.checked === true)
    {
        body.style.background="black";  
        span.forEach((i)=>{
            i.style.color="green";
        })
        

    }else{
        body.style.background="white";
        span.forEach((i)=>{
            i.style.color="black";
        })
    }
});