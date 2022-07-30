export class Ship{
    constructor(length){
        this.hits = [];
        this.size=length;
        for(let i=0;i<length;i++){
            this.hits.push(false);
        }
    }

    getSize(){
        return this.size;
    }

    isSunk(){
        for(let i=0;i<this.size;i++) {
            if (this.hits[i] === false) {
                return false;

            }
        }
        return true;
    }

    hit(position){
        this.hits[position]=true;
    };

}

