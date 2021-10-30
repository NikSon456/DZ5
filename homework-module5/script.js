let container = document.querySelector('.container');

for(let k of container.getElementsByClassName('img')){
    k.onclick = function(){
        alert(k.getAttribute('src'));
    }
}



let link = document.querySelector('a');
let href = link.getAttribute('href');
let j = 0;

function addLink() {
    if (j === 0) {
        link.textContent += '   ' + href;
    }
    j++;
}

link.addEventListener('mousemove', addLink);
link.removeEventListener('mouseout', addLink);



let inputs = document.querySelector('.inputs');
let paragraph = document.getElementById('text');

let Write = function() {
    paragraph.innerHTML = this.value;
}

for(let z of inputs.getElementsByTagName('input')){
    z.addEventListener('focusout', Write);
}



let f = 0;

let WriteValue = function(){
    if(f === 0){
        alert(this.value);
        f++;
    } 
}

inputs.onclick = function(){
    for(let y of inputs.getElementsByTagName('input')){
        y.addEventListener('click', WriteValue);  
    }
}



let numberInput = document.querySelector('.number');

numberInput.onclick = function(){
    numberInput.value = Math.pow(numberInput.value, 2);
}



let PaintRed = function(){
    this.style.backgroundColor = 'red';
}
let PaintGreen = function(){
    this.style.backgroundColor = 'green';
}

container.onclick = function(){
    for (let j of container.getElementsByClassName('image')) {
        if(j.getAttribute('style') === 'background-color: red;'){
            j.removeEventListener('click', PaintRed);
            j.addEventListener('click', PaintGreen);
        } else if(j.getAttribute('style') === 'background-color: green;'){
            j.removeEventListener('click', PaintGreen);
            j.addEventListener('click', PaintRed);
        } else{
            j.addEventListener('click', PaintRed);
        }
    }
}