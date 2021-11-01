let monies = ['USD','MXN','COP','EUR','GBP'];

monies.forEach ((e)=>{

    let option= document.createElement ('option') 
    option.innerHTML=e; 
    document.getElementById ('inputType').appendChild (option)

})

monies.forEach ((e)=>{

    let option2= document.createElement ('option')
    option2.innerHTML=e;
    document.getElementById ('resultType').appendChild (option2)

})

let alert= document.createDocumentFragment()
let error=document.createElement('span')
alert.appendChild(error)
    document.getElementsByClassName ('form-section').item(0).appendChild(alert)

document.getElementById ('submit').addEventListener('click', ()=>{
    let money = document.getElementById('currency').value;
    let currencyFrom = document.getElementById('inputType').value;
    let currencyTo = document.getElementById('resultType').value;
    let worth = 0;

    if(isNaN(money) || money < 1) {
        error.setAttribute('class','error') 
        error.innerHTML='<strong>Invalid form!</strong><br> Please provide a value for the required field in the form.';
    } else{
        error.setAttribute('class','')
        error.innerHTML='';

        if(currencyFrom === "USD" && currencyTo == "GBP"){
        
            worth=Number(money)*0.72;
        }else if(currencyFrom === "USD" && currencyTo === "EUR"){
    
            worth=Number(money)*0.85;
        }else if(currencyFrom === "USD" && currencyTo === "MXN"){
    
            worth=Number(money)*19.88;
        }else if(currencyFrom === "USD" && currencyTo === "COP"){
    
            worth=Number(money)*3820.98;
        }else if(currencyFrom === "USD" && currencyTo === "USD"){
    
            worth=Number(money)*1;
        }
    
        if(currencyFrom === "GBP" && currencyTo === "USD"){
            
            worth=Number(money)*1.38;
        }else if(currencyFrom === "GBP" && currencyTo === "EUR"){
    
            worth=Number(money)*1.17;
        }else if(currencyFrom === "GBP" && currencyTo === "MXN"){
    
            worth=Number(money)*27.52;
        }else if(currencyFrom === "GBP" && currencyTo === "COP"){
    
            worth=Number(money)*5291.09;
        }else if(currencyFrom === "GBP" && currencyTo === "GBP"){
    
            worth=Number(money)*1;
        }
    
        if(currencyFrom === "EUR" && currencyTo === "USD"){
            
            worth=Number(money)*1.18;
        }else if(currencyFrom === "EUR" && currencyTo === "GBP"){
    
            worth=Number(money)*0.85;
        }else if(currencyFrom === "EUR" && currencyTo === "MXN"){
    
            worth=Number(money)*23.49;
        }else if(currencyFrom === "EUR" && currencyTo === "COP"){
    
            worth=Number(money)*4523.71;
        }else if(currencyFrom === "EUR" && currencyTo === "EUR"){
    
            worth=Number(money)*1;
        }
    
        if(currencyFrom === "MXN" && currencyTo === "USD"){
            
            worth=Number(money)*0.050;
        }else if(currencyFrom === "MXN" && currencyTo === "GBP"){
    
            worth=Number(money)*0.036;
        }else if(currencyFrom === "MXN" && currencyTo === "EUR"){
    
            worth=Number(money)*0.043;
        }else if(currencyFrom === "MXN" && currencyTo === "COP"){
    
            worth=Number(money)*192.26;
        }else if(currencyFrom === "MXN" && currencyTo === "MXN"){
    
            worth=Number(money)*1;
        }
    
        if(currencyFrom === "COP" && currencyTo === "USD"){
            
            worth=Number(money)*0.00026;
        }else if(currencyFrom === "COP" && currencyTo === "GBP"){
    
            worth=Number(money)*0.00019;
        }else if(currencyFrom === "COP" && currencyTo === "EUR"){
    
            worth=Number(money)*0.00022;
        }else if(currencyFrom === "COP" && currencyTo === "MXN"){
    
            worth=Number(money)*0.0052;
        }else if(currencyFrom === "COP" && currencyTo === "COP"){
    
            worth=Number(money)*1;
        }


        document.getElementById('currency').value = eval(worth);
    }


})