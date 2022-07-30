import {Ship} from '../js_files/ship.js';

describe('ship',()=>{

    test('Ship returns array as long as length',() =>{
        const tester = new Ship(5);
        expect(tester.size).toEqual(tester.hits.length);
    })

    test('Ship can be hit',() =>{
        const tester = new Ship(5);
        tester.hit[2];
        expect(tester.hits[2]).toEqual(false);
    })

    test('Ship can  be sunk',() =>{
        const tester = new Ship(2);
        tester.hit(0);
        tester.hit(1);
        expect(tester.isSunk()).toEqual(true);
    })

    test('Ship correctly checks if sunk',() =>{
        const tester = new Ship(2);
        tester.hit(1);
        expect(tester.isSunk()).toEqual(false);
    })

})