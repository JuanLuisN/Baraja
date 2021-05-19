var carta1 = document.querySelector("#carta1");
var carta2 = document.querySelector("#carta2");
var carta3 = document.querySelector("#carta3");
var carta4 = document.querySelector("#carta4");
var carta5 = document.querySelector("#carta5");

carta1.addEventListener('mouseover', ()=>{carta1.src = './images/carta1.jpg'});
carta1.addEventListener('mouseout', ()=>{carta1.src = './images/cartahetor.jpg'});

carta2.addEventListener('click', ()=>{carta2.src = './images/carta2.jpg'});
carta2.addEventListener('mouseout', ()=>{carta2.src = './images/cartadiana.jpg'});

carta3.addEventListener('mouseover', ()=>{carta3.src = './images/carta3.jpg'});
carta3.addEventListener('mouseout', ()=>{carta3.src = './images/cartajuancho.jpg'});

carta4.addEventListener('click', ()=>{carta4.src = './images/carta4.jpg'});
carta4.addEventListener('mouseout', ()=>{carta4.src = './images/cartaoctano.jpg'});

carta5.addEventListener('mouseover', ()=>{carta5.src = './images/carta5.jpg'});
carta5.addEventListener('mouseout', ()=>{carta5.src = './images/cartachloe.jpg'});