
const username=document.getElementById('username')
const password=document.getElementById('password')
const formm=document.getElementById('form')

formm.addEventListener('submit',(e)=>{
    if(!validateLogInput()){
        e.preventDefault()
    }
    
})

function validateLogInput(){
    const UN=username.value.trim()
    const PS=password.value.trim()
    let success=true

    if(UN===''){
        success=false
        setLogError(username,'Username is required')
    }
    else{
        setLogSuccess(username)
    }

    if(PS===''){
        success=false
        setLogError(password,'Username is required')
    }
    else{
        setLogSuccess(password)
    }
}

function setLogError(element,message){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setLogSuccess(element){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
let arr=[{
    name:'hai',
    age:20,
    mark:95
}]
