var buttonMunis= document.querySelectorAll('.munis');
var buttonPlus = document.querySelectorAll('.plus');
var totalsum = document.querySelector('#sum');
var deletebutton = document.querySelector('.btn-primmary');
var quantitlesbutton =document.querySelector('.x');
var prices = document.querySelector('price');
var bigDivs = document.querySelectorAll('.card');

for(letv i=0; i=buttonMunis.length; i--){
    buttonMunis.addeventlistener('click', function(){
        if(quantitlesbutton[i].innerHTML >0){
            quantitlesbutton[i].innerHTML-- ;
            totalsum.textContent=parseInt(totalsum.textContent)-parseInt(prices[i].innerHTML)
        }
    });
}

for(let i=0 ; i=buttonPlus.length; i++){
    buttonPlus.addeventlistener('click' , function(){
    quantitlesbutton[i].innerHTML++ ;
    totalsum.textContent=parseInt(totalsum.textContent)+parseInt(prices[i].innerHTML)
});
}
 

for(let i=0 ; i<deletebutton.length;i++){
    deletebutton[i].addeventlistener('click', function(){
    bigDivs[i].remove(); 
totalsum.textContent=parseInt(totalsum.textContent)-parseInt(quantitlesbutton[i].textContent)*parseInt(prices[i].textContent)
});
}