import {Player} from './player.js';
import {AI} from './ai.js';
import {Gameboard} from './gameboard.js';
import {Ship} from './ship.js';

let userBoard = new Gameboard();
const user = new Player(name);
let aiBoard = new Gameboard();
const ai = new AI("Enemy",user,userBoard);

const createSelBoard = () =>{
    let grid_container = document.querySelector(`.grid_container`);

    for(let i =0;i<10;i++){
        for(let j=0;j<10;j++) {
            const div = document.createElement('div');
            div.className = 'grid_item';
            div.id =  's'+j.toString()+i.toString();
            grid_container.appendChild(div);
        }
    }

}


const createGameBoard = () =>{
    let grid_container = document.querySelector(`.user_grid_container`);
    let ai_grid_container = document.querySelector(`.ai_grid_container`);
    while(grid_container.firstChild){
        grid_container.removeChild(grid_container.firstChild);
    }
    for(let i =0;i<10;i++){
        for(let j=0;j<10;j++) {
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            div1.className = 'grid_item';
            div2.className = 'shoot';
            div1.id = 'u'+ j.toString()+i.toString();
            div2.id = 'a'+ j.toString()+i.toString();
            grid_container.appendChild(div1);
            ai_grid_container.appendChild(div2);
        }
    }

}

const randomShip = () =>{
    let count=5;
    while(aiBoard.placed_ships<5){
        const x =Math.floor((Math.random() * 10))
        const y = Math.floor((Math.random() * 10))
        let temp = aiBoard.placed_ships;
        let a;
        if((Math.floor(Math.random() * 2))===1){
            a='y';
        }
        else{
            a='x';
        }
        placeShip(aiBoard,x,y,count,a)
        if(aiBoard.placed_ships>temp){
            count--;
        }
    }
}

const render = (board,version) =>{
    const list = (board.getLocations());
    for (let i=0;i<list.length;i++){
        document.getElementById(
            version+list[i][0].toString()+list[i][1].toString()).
            style.backgroundColor="blue";
    }
};

const placeShip = (board,x,y,length,a=axis)=>board.placeShip(new Ship(length),x,y,a);

const placingContainer = (item)=>{
    switch(userBoard.placed_ships){
        case(0):
            placeShip(userBoard,parseInt(item[1]),parseInt(item[2]),5);
            break;
        case(1):
            placeShip(userBoard,parseInt(item[1]),parseInt(item[2]),4);
            break;
        case(2):
            placeShip(userBoard,parseInt(item[1]),parseInt(item[2]),3);
            break;
        case(3):
            placeShip(userBoard,parseInt(item[1]),parseInt(item[2]),3);
            break;
        case(4):
            placeShip(userBoard,parseInt(item[1]),parseInt(item[2]),2);
            break;
    }
}
const renderHits = (board,version)=>{
    const list = (board.getHits());
    const list2 = (board.getMisses());
    console.log(list);
    for (let i=0;i<list.length;i++){
        document.getElementById(
            version+list[i][0].toString()+list[i][1].toString()).
            style.backgroundColor="red";
    }
    for (let i=0;i<list2.length;i++){
        document.getElementById(
            version+list2[i].x.toString()+list2[i].y.toString()).
            style.backgroundColor="lightblue";
    }

}

const playGame =()=>{

    createGameBoard();
    select_grid.style.display = 'none';
    game_container.style.display = 'flex';
    render(userBoard, 'u');
    randomShip()

    const possible_sink = document.querySelectorAll('.shoot');

    possible_sink.forEach((button)=>{

        button.addEventListener('click',()=>{
            button.style.color= 'green';
            console.log('here');
            playRound(button.id);
        })
    })
}

const playRound = (item)=>{
    user.move(parseInt(item[1]),parseInt(item[2]),ai,aiBoard);
    renderHits(aiBoard,'a');
    if(aiBoard.checkEnd()){
        alert("GAME END");
        window.location.reload();
    }
    ai.randomAttack(user,userBoard);
    renderHits(userBoard,'u');
    if(userBoard.checkEnd()){
        alert("GAME END");
        window.location.reload();
    }
}


createSelBoard();
const current = document.querySelectorAll('.grid_item');

let axis ='x';

const axis_button = document.querySelector('.axis');
const reset = document.querySelector('#reset');
const current_axis = document.querySelector('.current_axis');
const select_grid = document.querySelector('.something');
const game_container = document.querySelector('.full_game');
game_container.style.display = 'none';
const start = document.querySelector('.start');


current.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(userBoard.placed_ships<5) {
            placingContainer(button.id);
            render(userBoard,'s');
        }
    })
})
axis_button.addEventListener('click',()=>{
    axis = (axis === "x" ? "y" : "x");
    current_axis.textContent = axis;
})
start.addEventListener('click',()=>{
    if(userBoard.placed_ships>4) {
        playGame();
    }
})


