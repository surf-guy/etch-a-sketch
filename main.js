
let color='black'
let size=100

//Set up the default 16*16 grid
function populateBoard(size){
    let board=document.querySelector(".board");
    let squares=board.querySelectorAll('div');
    squares.forEach((stuff) => stuff.remove());
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    
    for(let i=0; i<size**2; i++){
        let square=document.createElement('div');
        square.addEventListener('mousemove', colorSquare)
        //square.style.backgroundColor='gray';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(100);

function changeSize(input){
    size=input
    if(size>=2 && size<=200)
        populateBoard(size);
    else
        alert('too much');
}

function changeColor(input){
    if(input=="random")
        //color='#'+Math.floor(Math.random()*16777215).toString(16)
        color="random"
    else
       color=input;
}

function colorSquare(){   
    
    //alert(color)
    if(color=="random")
        this.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16)
    else
        this.style.backgroundColor=color
}

