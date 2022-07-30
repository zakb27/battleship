import {Player} from '../js_files/player.js';
import {AI} from '../js_files/ai.js';
import {Gameboard} from '../js_files/gameboard.js';
import {Ship} from '../js_files/ship.js';








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
    while(!userBoard.checkEnd() || !userBoard.checkEnd()){

    }
}