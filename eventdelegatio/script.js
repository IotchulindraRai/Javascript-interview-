document.querySelector("#form").addEventListener('keyup',(e) =>{
    console.log(e);
    if(e.target.value !=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
})