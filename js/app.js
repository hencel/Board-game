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
        //kostka do gry
        dice() {
           //odpalana jeśli stan gry jest 0
            if (this.state == 0){
                console.log(document.querySelector('.diceArea'));

                let button = document.createElement('button');
                button.classList.add('roll');
                document.getElementById('diceContainer').appendChild(button);
                button.innerHTML = 'Rzuć kostką';

                let dice = document.createElement('div');
                dice.classList.add('diceArea');

                document.getElementById('diceContainer').appendChild(dice);

                let diceParagraph = document.createElement('p');
                diceParagraph.classList.add('diceParagraph');
                dice.appendChild(diceParagraph);

                button.addEventListener('click', () => { diceRoll() })
                //losowanie wartości. Podanie wartości na ekranie i zapisanie w diceValue
                let diceRoll = () => {
                    let diceValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                    diceParagraph.innerHTML = diceValue;
                    this.diceValue = diceValue;
                    // this.movement();
                }
            }
        }
        //definiujemy graczy, gracze podają imiona zapisywane w state
        players() {
            if(this.state == 0) {
                this.players[0].name = prompt("Podaj imię pierwszego gracza. Gracz biały");
                this.players[1].name = prompt("Podaj imię drugiego gracza. Gracz czarny");
                this.pawns();
            }
        }
        //tworzenie pionków, odpalone zaraz po imionach graczy
        pawns() {
            let firstBox = document.querySelector("[data-counter='0']");
            firstBox.style.position = 'relative';
            let pawn0 = document.createElement('div');
            pawn0.classList.add('pawn0');
            firstBox.appendChild(pawn0);
            let pawn1 = document.createElement('div');
            pawn1.classList.add('pawn1');
            firstBox.appendChild(pawn1);
            //odpalenie pierwszego ruchu
            this.movement();
        }
        movement() {
            if(this.nextPlayer === 0) {

            }
            this.players[i].position += this.diceValue;
            if(this.players[i].position === this.gamePath.length-1) {
            
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
            //funkcje do przypisania do wybranej ścieżki
            this.cellsFunc = [
                {description: "Jedno pole do przodu", val: 1},
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
                    } else if (this.state == 2) { //stan 2 czyli wybieranie własności i przypisanyanie do ścieżki
                        
                        if(el.target.classList.contains('active')) {
                            let func = this.cellsFunc[Math.floor(Math.random() * (this.cellsFunc.length))].val;
                            console.log(func);
                            el.target.setAttribute('data-val', func);
                        }
                        
                    }
                    el.target.classList.remove('potentialActive');
                    newDiv.classList.remove('potentialActive');
                });
                

            } 
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
                    // document.querySelectorAll('[data-counter]').classList.add('gamePath');
                    
                    super.dice();
                }else{
                    console.log("aktualna?",this.state);
                }
                
                let start = document.querySelector("[data-counter='0']");
                start.classList.add('startMeta');
                start.classList.remove('active');
                start.innerHTML = 'START';
               
                let lastPoint = this.gamePath.length-1;
                let meta = document.querySelector("[data-counter='"+lastPoint+"']");
                meta.classList.add('startMeta');
                meta.classList.remove('active');
                meta.innerHTML = 'META';

                super.players();

            })
        }
}

//     //randomowe przypisanie funkcji pod pola ścieżki, poza startem i końcem

//     //pionki i poruszanie się po ścieżce