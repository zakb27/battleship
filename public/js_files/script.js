import {Player} from './player.js';
import {AI} from './ai.js';
import {Gameboard} from './gameboard.js';
import {Ship} from './ship.js';



const startGame=(name)=>{
    const user1 = new Ship(2);
    const user2 = new Ship(3);
    const user3 = new Ship(3);
    const user4 = new Ship(4);
    const user5 = new Ship(5);

    const ai1 = new Ship(2);
    const ai2 = new Ship(3);
    const ai3 = new Ship(3);
    const ai4 = new Ship(4);
    const ai5 = new Ship(5);

    const userBoard = new Gameboard();
    const aiBoard = new Gameboard();

    const user = new Player(name);
    const ai = new AI("Enemy",user,userBoard);
    // while(!userBoard.checkEnd() || !userBoard.checkEnd()){
    //
    // }
}


const createSelBoard = () =>{
    let grid_container = document.querySelector(`.grid_container`);

    for(let i =0;i<10;i++){
        console.log('here');
        for(let j=0;j<10;j++) {
            const div = document.createElement('div');
            div.className = 'grid_item';
            div.id = i.toString() + j.toString();
            grid_container.appendChild(div);
        }
    }

}

createSelBoard();

const current = document.querySelectorAll('.grid_item');

current.forEach((button)=>{
    button.addEventListener('click',()=>{
        button.style.backgroundColor='blue';
    })
})

