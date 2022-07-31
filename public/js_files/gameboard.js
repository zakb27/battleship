import {Ship} from './ship.js';

export class Gameboard{

    constructor(){
        this.gameBoard = this.createBoard();
        this.misses = [];
    }

    createBoard(){
        let shipArray =[];
        let temp = []
        for(let i=0;i<10;i++){
            for(let z=0;z<10;z++){
                temp.push({shipID:null,shipNum:null,})
            }

            shipArray.push(temp);
            temp = []
        }
        return shipArray;
    }

    checkPositionX(length,x,y){
        for(let i=x;i<(x+length);i++){
            if(this.gameBoard[i][y].shipID!=null){
                return false;
            }
        }
        if(length+x > 10 || length+x < 0){
            return false;
        }

        return true;
    }
    checkPositionY(length,x,y){

        for(let i=y;i<(y+length);i++){
            if(this.gameBoard[x][i].shipID!=null){
                return false;
            }
        }
        if(length+y > 10 || length+y < 0){
            return false;
        }

        return true;
    }

    getMisses(){
        return this.misses;
    }

    placeShip(ship,x,y,axis){
        try {
            if (axis === 'y') {
                if (!this.checkPositionY(ship.size, x, y)) {
                    throw new Error('Taken');
                }
                else{

                    for (let i = y; i < (y + ship.size); i++) {
                        this.gameBoard[x][i].shipID = ship;
                        this.gameBoard[x][i].shipNum = i-y;
                    }
                }
            }
            else{
                if(!this.checkPositionX(ship.size, x, y)){
                    throw new Error('Taken');
                }
                else{
                    for(let i=x;i<(x+ship.size);i++){
                        this.gameBoard[i][y].shipID=ship;
                        this.gameBoard[i][y].shipNum=i-x;
                    }
                }
            }
        }
        catch(error){
            console.log('Incorrect placement error')
        }
    }

    receiveAttack(x,y){
        if(this.gameBoard[x][y].shipID==null){
            this.misses.push({x:x,y:y});
        }
        else{
            this.gameBoard[x][y].shipID.hit(
                this.gameBoard[x][y].shipNum
            )
        }
    }


    checkEnd() {
        let end = true;
        this.gameBoard.forEach((item) => {
            item.forEach((element) => {
                if (element.shipID) {
                    if (element.shipID.isSunk() == false) {
                        end = false;
                    }
                }
            });
        });
        return end;
    }




}

