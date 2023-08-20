function cart1(){
    const cartName=getCartTitle('cart-title');
    setTextElement('cart-list',cartName);


    // testing
    
}

function cart2(){
    const cartName=getCartTitle('card-title-2');
    setTextElement('cart-list',cartName);
}
function cart3(){
    const cartName=getCartTitle('card-title-3');
    setTextElement('cart-list',cartName);
}
function cart4(){
    const cartName=getCartTitle('card-title-4');
    setTextElement('cart-list',cartName);
}
function cart5(){
    const cartName=getCartTitle('card-title-5');
    setTextElement('cart-list',cartName);
}
function cart6(){
    const cartName=getCartTitle('card-title-6');
    setTextElement('cart-list',cartName);
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
// cart price function

