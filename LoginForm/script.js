const UserName=document.getElementById('username')
const Email=document.getElementById('email')
const Password=document.getElementById('password')
const ConfirmPassword=document.getElementById('confirm')
const form=document.getElementById('form')
const button=document.getElementById('btn')

form.addEventListener('submit',(e)=>{
    if(!validateInput()){
        e.preventDefault()
    }
})


function validateInput(){
    const usernameVal=UserName.value.trim()
    const EmailVal=Email.value.trim()
    const passVal=Password.value.trim()
    const cpassVal=ConfirmPassword.value.trim()
    let success=true

    if(usernameVal===''){
        success=false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }


    if(EmailVal===''){
        success=false
        setError(Email,'Email Id is required')
    }
    else if(!validateEmail(EmailVal)){
        success=false
        setError(Email,'Please Enter valid Email')
    }
    else{
        setSuccess(Email)
    }


    if(passVal===''){
        success=false
        setError(Password,'password is required')
    }
    else if(passVal.length<8){
        success=false
        setError(Password,'Password must be atleast 8 characters')
    }
    else{
        setSuccess(Password)
    }


    if(cpassVal===''){
        success=false
        setError(ConfirmPassword,'password is required')
    }
    else if(cpassVal.length<8){
        success=false
        setError(ConfirmPassword,'Password must be atleast 8 characters')
    }
    else if(cpassVal!=passVal){
        success=false
        setError(ConfirmPassword,'Confirm  password must be same as Password')
    }
    else{
        setSuccess(ConfirmPassword)
    }
}

function setError(element,message){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };