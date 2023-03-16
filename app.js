const input =document.querySelector('.default-inp')
const btn = document.querySelector('button')
const regEx = /^[a-zA-Z0-9]{1,12}$/;

input.addEventListener('keyup', (e)=>{
    console.log(e.target.value, input.value);
    if(regEx.test(e.target.value)){
        input.setAttribute('class', 'succes')
    }
    else{
        input.setAttribute('class', 'error')
    }
})