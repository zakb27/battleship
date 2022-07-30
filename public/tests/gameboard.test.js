import {Gameboard} from '../js_files/gameboard.js';
import {Ship} from '../js_files/ship.js';
describe('game',()=>{

    test('Game returns 2d array as long as 10',() =>{
        const tester = new Gameboard();
        expect(tester.gameBoard.length).toEqual(10);
    })
    test('Game array is 10 long on an each element',() =>{
        const tester = new Gameboard();
        expect(tester.gameBoard[1].length).toEqual(10);
    })

    test('Placing ship is correctly done on y axis',()=>{
        const tester = new Gameboard();
        const ship = new Ship(4);
        tester.placeShip(ship,3,4,'y');
        expect(tester.gameBoard[3][7]).toEqual({shipID:ship,shipNum:3})
    })

    test('Placing ship incorrectly does not save ',()=>{
        const tester = new Gameboard();
        const ship = new Ship(4);
        tester.placeShip(ship,9,4,'x')
        console.log(tester.gameBoard[9][4]);
        expect(tester.gameBoard[9][4]).toEqual({shipID:null,shipNum:null})
    })

    test('If games hasnt ended then returns false ',()=>{
        const tester = new Gameboard();
        const ship = new Ship(4);
        tester.placeShip(ship,4,4,'x')
        expect(tester.checkEnd()).toEqual(false)
    })
    //
    test('If games has ended then returns true ',()=>{
        const tester = new Gameboard();
        const ship = new Ship(1);
        tester.placeShip(ship,7,4,'x');
        tester.receiveAttack(7,4);
        expect(tester.checkEnd()).toEqual(true)
    })


})