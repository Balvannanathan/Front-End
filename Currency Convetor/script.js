let select=document.querySelectorAll('.currency')
let btn=document.getElementById('btn')
let input=document.getElementById('inp')
let result=document.getElementById('res')

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displaydropdown(res))

function displaydropdown(res){
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}

btn.addEventListener('click',()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputValue=input.value
    if(curr1==curr2)
        alert('choose difference currencies')
    else
        convert(curr1,curr2,inputValue)
})

function convert(curr1,curr2,inputValue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
    document.getElementById('res').value=Object.values(data.rates)[0];
  });
}