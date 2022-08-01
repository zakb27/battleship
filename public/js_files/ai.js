import {Player} from "./player.js";



export class AI extends Player{
    constructor(name){
        super(name);
        this.turn=false;
        this.attacks = []
    }

    randomAttack(user,userBoard){
        if(this.checkTurn()) {
            while (true) {
                let random = {
                    x: Math.floor((Math.random() * 10)),
                    y: Math.floor((Math.random() * 10))
                }
                const isFound = this.attacks.some(element => {
                    if (element.x === random.x && element.y === random.y) {
                        return true;
                    }

                    return false;
                });

                if(!isFound){
                    console.log(this.attacks,random);
                    this.attacks.push(random);
                    this.move(random.x,random.y,user,userBoard);
                    break;
                    }
        }
        }
    }
}

