import {Player} from '../js_files/player.js';
import {AI} from '../js_files/ai.js';
import {Gameboard} from '../js_files/gameboard.js';
import {Ship} from '../js_files/ship.js';

describe('player',()=>{
    const tester = new Player('Zak');
    const enemyBoard = new Gameboard();
    const userBoard = new Gameboard();
    const enemy = new AI('AI',tester,userBoard);

    test('Checks player is initalised',() =>{
        expect(tester.getName()).toEqual('Zak');
    })

    test('Checks player can set name',() =>{
        tester.setName('John')
        expect(tester.getName()).toEqual('John');
    })

    test('Checks player can sink a ship from move on enemy',() =>{

        const enemyShip = new Ship(1);
        const enemy = new AI('AI',tester,userBoard);
        enemyBoard.placeShip(enemyShip,3,3,'x');
        tester.move(3,3,enemy,enemyBoard);
        expect(enemyShip.isSunk()).toEqual(true);
    })

    test('Checks player can miss and notsink a ship from move on enemy',() =>{

        const enemyShip = new Ship(1);
        enemyBoard.placeShip(enemyShip,4,3,'x');
        tester.move(3,3,enemy,enemyBoard);
        expect(enemyShip.isSunk()).toEqual(false);
    })

    test('Checks player can miss and notsink a ship from move on enemy',() =>{

        const enemyShip = new Ship(1);
        enemyBoard.placeShip(enemyShip,4,3,'x');
        tester.move(3,3,enemy,enemyBoard);
        expect(enemyShip.isSunk()).toEqual(false);
    })

    test('Checks player can hit and not finish game',() =>{

        const enemyShip = new Ship(2);
        enemyBoard.placeShip(enemyShip,3,3,'x');
        tester.move(3,3,enemy,enemyBoard);
        expect(enemyShip.isSunk()).toEqual(false);
    })

    test('Checks enemy can hit and moves correctly',() =>{
        const tester = new Player('Zak');
        const enemyBoard = new Gameboard();
        const userBoard = new Gameboard();
        const enemy = new AI('AI',tester,userBoard);
        tester.move(4,6,enemy,enemyBoard);
        enemy.randomAttack(tester,userBoard);
        expect(tester.turn).toEqual(true);
    })
})