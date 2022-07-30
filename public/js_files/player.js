import {Gameboard} from "./gameboard";

export class Player{
    constructor(name){
        this.name = name;
        this.turn=true;
    }

    getName(){
        return this.name;
    }
    checkTurn() {
        return this.turn;
    }
    setName(newName){
        this.name=newName;
    }
    endTurn(player2) {
        if (this.turn == true) {
            this.turn = false;
            player2.startTurn();
        }
    }
    startTurn() {
        if(this.turn == false){
            this.turn = true;
        }
    }

    move(x,y,enemy,board){
        if(this.checkTurn()){
            board.receiveAttack(x,y);
            this.endTurn(enemy)
        }
    }


}