/**
 * cart1()-cart(6) operations
 *  
 */
function cart1(){
    const cartName=getCartTitle('cart-title');
    setTextElement('cart-list',cartName);
    //total price set
    const cart1Price=document.getElementById('cart1-price');
    const cartPriceString=cart1Price.innerText;
    const cartPriceValue=parseFloat(cartPriceString);
    addTotalPrice(cartPriceValue);    
}

function cart2(){
    const cartName=getCartTitle('card-title-2');
    setTextElement('cart-list',cartName);
    // total price set
    const cart1Price=document.getElementById('cart2-price');
    const cartPriceString=cart1Price.innerText;
    const cartPriceValue=parseFloat(cartPriceString);
    addTotalPrice(cartPriceValue);  
}
function cart3(){
    const cartName=getCartTitle('card-title-3');
    setTextElement('cart-list',cartName);
     // total price set
     const cart1Price=document.getElementById('cart3-price');
     const cartPriceString=cart1Price.innerText;
     const cartPriceValue=parseFloat(cartPriceString);
     addTotalPrice(cartPriceValue);  
}
function cart4(){
    const cartName=getCartTitle('card-title-4');
    setTextElement('cart-list',cartName);
     // total price set
     const cart1Price=document.getElementById('cart4-price');
     const cartPriceString=cart1Price.innerText;
     const cartPriceValue=parseFloat(cartPriceString);
     addTotalPrice(cartPriceValue);  
}
function cart5(){
    const cartName=getCartTitle('card-title-5');
    setTextElement('cart-list',cartName);
     // total price set
     const cart1Price=document.getElementById('cart5-price');
     const cartPriceString=cart1Price.innerText;
     const cartPriceValue=parseFloat(cartPriceString);
     addTotalPrice(cartPriceValue);  
}
function cart6(){
    const cartName=getCartTitle('card-title-6');
    setTextElement('cart-list',cartName);
     // total price set
     const cart1Price=document.getElementById('cart6-price');
     const cartPriceString=cart1Price.innerText;
     const cartPriceValue=parseFloat(cartPriceString);
     addTotalPrice(cartPriceValue);  
}



// function for get the cart title

function getCartTitle(cartId){
    const cartName=document.getElementById(cartId);
    const cartNameString=cartName.innerText;
    return cartNameString;
}

// setCartTitle value
function setTextElement(elementId,value){
    const setValue=document.getElementById(elementId);
    const count=setValue.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML=`${count+1}. ${value} `;
    setValue.appendChild(p);
}
// sum to carts
let totalPrice=0;
function updateProductPrice(){
    const productPriceElement=document.getElementById('product-price');
    productPriceElement.innerText=totalPrice.toFixed(2);
  

}


function addTotalPrice(cartPrice){
    totalPrice+=cartPrice;
    updateProductPrice();
    updatePurchaseBtn();//calling the function in cart section
}

// disable button purchase ....if the total price is grater then total price then it will be enable 
function updatePurchaseBtn(){
    const btn=document.getElementById('btn-purchase');
    btn.disabled=totalPrice <=0;


}
updatePurchaseBtn();//call the updatepurchse btn here too

// apply cupon button function
  
    function updateCuponBtn(){

          // for apply btn 
    const cupon=document.getElementById('cupon-code');
    const btn2=document.getElementById('btn-cupon');
    btn2.disabled=cupon.value.toLowerCase()!=="sell20";
    }
    updateCuponBtn();
    document.getElementById('cupon-code').addEventListener('input',updateCuponBtn);