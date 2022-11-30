function rand(x){
    return Math.floor(Math.random() * x);
}

let classe = document.querySelectorAll('.important');
for (let elem of classe)
    elem.setAttribute('title', 'This is an important item');