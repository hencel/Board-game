import "../scss/main.scss";
import { throws } from "assert";
import { pathToFileURL } from "url";

document.addEventListener('DOMContentLoaded', function() {
    console.log("Dom content loaded");

    let game = new Game();
    let generator = new Generator();
    generator.createBoard();

    
});

class Game { 
        constructor() {
            console.log("start game constructor");
            
            this.state = 1;
            this.players = [
                {
                    id: 0,
                    name : "",
                    position: 0,
                },
                {
                    id: 1,
                    name : "",
                    position: 0,
                }
            ];
            this.nextPlayer = 0 ;
            this.area = [];
            this.diceValue = 0
        }
        dice() {
            console.log("rys");
            
            if (this.state == 0){
                console.log(document.querySelector('.diceArea'));
                
                //document.querySelector('.diceArea').
            
                let button = document.createElement('button');
                button.classList.add('roll');
                document.getElementById('diceContainer').appendChild(button);
                button.innerHTML = 'Rzuć kostką';

                let diceRoll = () => {
                    let diceValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                    diceParagraph.innerHTML = diceValue;
                    this.diceValue = diceValue;
                    this.movement();
                }

                button.addEventListener('click', () => { diceRoll() })

                let dice = document.createElement('div');
                dice.classList.add('diceArea');

                dice.style.display = 'block';
                document.getElementById('diceContainer').appendChild(dice);

                let diceParagraph = document.createElement('p');
                diceParagraph.classList.add('diceParagraph');
                dice.appendChild(diceParagraph);
            }
        }

        movement() {
            this.players[i].position += this.diceValue;
            if(this.position) {
            
            }
            if(this.position >= this.gamePath.length) {
                alert('Gracz wygrał');
            }
        }
    }

class Generator extends Game {
        constructor() {
            super();
            console.log("start generator constructor:", this.state);
            
            this.width = 10;
            this.height = 10;
            this.gamePath = [];
            this.cellsFunc = [
                {description: "Dwa pola do przodu", val: 2},
                {description: "Jedno pole do przodu", val: 1},
                {description: "Dwa pola do tyłu", val: -2},
                {description: "Jedno pole do tyłu", val: -1},
                {description: "Strata kolejki", val: 0},
                {description: "Dodatkowy ruch", val: 'x'},
            ]
        };
        createBoard() {
            let counter = 0;
            console.log(this.state);
            this.createNextButton();
            for (let i=0; i<this.width*this.height; i++) { //budowa tablicy elementów planszy gry
                let newDiv = document.createElement('div'); //tworzenie nowych elementów planszy i przypięcie do planszy
                document.getElementById("board").appendChild(newDiv); 
                newDiv.className = "cell";
                newDiv.classList.add('potentialActive');
                newDiv.setAttribute('data-id',i); //przypisanie id elementom od 0 do 99

                newDiv.addEventListener('click', (el) => { //event na click do rysowania ścieżki

                    if (this.state == 1){ //stan 1 czyli rysowanie ścieżki
                        if(el.target.classList.contains('potentialActive')){ 
                            let numberingCells = el.target.getAttribute('data-id');
                            console.log(numberingCells);
                            el.target.classList.add('active');
                            
                            this.gamePath.push(el.target.getAttribute('data-id'));
                            
                            el.target.setAttribute('data-counter',counter);
                            counter++;
                            el.target.classList.remove('potentialActive');

                            let potentialList = document.querySelectorAll('div.potentialActive');
                            for(let j=0; j<potentialList.length; j++) {
                                potentialList[j].classList.remove('potentialActive');
                            }
                            let numberingCellsminus10 = document.querySelector('div[data-id="'+(numberingCells-10)+'"]'); //zabezpieczenie na wyjście potentialClass w górę
                            if(!numberingCellsminus10.classList.contains('active') ) {
                                numberingCellsminus10.classList.add('potentialActive');
                            } 
                            let numberingCellsplus10 = document.querySelector('div[data-id="'+(parseInt(numberingCells)+10)+'"]'); //zabezpieczenie na wyjście potentialClass w dół
                            if(!numberingCellsplus10.classList.contains('active')) {
                                numberingCellsplus10.classList.add('potentialActive');
                            }
                            let numberingCellsplus1 = document.querySelector('div[data-id="'+(parseInt(numberingCells)+1)+'"]'); //zabezpieczenie na wyjście potentialClass w prawo
                            if(!numberingCellsplus1.classList.contains('active') && (parseInt(numberingCells)+1)%10!=0) {
                                numberingCellsplus1.classList.add('potentialActive');
                            }
                            let numberingCellsminus1 = document.querySelector('div[data-id="'+(parseInt(numberingCells)-1)+'"]'); //zabezpieczenie na wyjście potentialClass w lewo
                            if(!numberingCellsminus1.classList.contains('active') && (parseInt(numberingCells)-1)%10!=9) {
                                numberingCellsminus1.classList.add('potentialActive');
                            }  
                        }
                    } else if (this.state == 2) { //stan 2 czyli wybieranie własności
                        // random();
                        
                        
                        let func = this.cellsFunc[Math.floor(Math.random() * (this.cellsFunc.length))].val;
                        console.log(func);
                        el.target.setAttribute('data-val', func);
                        //addFunctionsOnPath();
                    }
                    el.target.classList.remove('potentialActive');
                });
                

            } 
            // let addFunctionsOnPath = (el) => {
            //     console.log(this.state);
            //     console.log('dupa dupa');
            //     for(let i=1; i<this.gamePath.length; i++) {
            //         let func = this.cellsFuns[(Math.random() * (this.cellsFuns.length))].val;
            //         console.log(func);
            //         this.gamePath[i].setAttribute('data-val', func);
            //     }
            // }
        }
        createNextButton() {
            let nextButton = document.createElement('button');
            document.getElementById("diceContainer").appendChild(nextButton);
            nextButton.className = 'roll';
            nextButton.innerHTML = 'Następny etap';
                
            nextButton.addEventListener('click', (el) => {
                
                this.state += 1;
                console.log("aktualna",this.state);
                if(this.state > 2 ){
                    this.state = 0;
                    nextButton.style.display = 'none';
                    super.dice();
                } else if( this.state == 0) {
                    console.log("kostka");
                    
                    nextButton.style.display = 'none';
                    super.dice();
                }else{
                    console.log("aktualna?",this.state);
                }
                

            })
        }
}

//     //randomowe przypisanie funkcji pod pola ścieżki, poza startem i końcem
//     //kostka do gry
//     //pionki i poruszanie się po ścieżce