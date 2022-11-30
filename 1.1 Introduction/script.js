console.log(document.title);

document.title = "Modifying the DOM";

document.body.style.backgroundColor = "hotpink";

function colorback(){
    let number = Math.floor(Math.random() * ( 255 - 0 + 1 ) + 0);
    return number;
}

document.body.style.backgroundColor = `rgb(${colorback()},${colorback()},${colorback()})`;

for (let elem of document.body.children){
    console.log(elem);
}   