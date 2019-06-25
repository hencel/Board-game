import "../scss/main.scss";
import { throws } from "assert";
import { pathToFileURL } from "url";

document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    class Generator {
        constructor() {
            this.width = 10;
            this.height = 10;
            this.features = [
                {num:1, feature: 2}
            ]
        };
        createBoard() {
            let gamePath = [];
            for (let i=0; i<this.width*this.height; i++) {
                let newDiv = document.createElement('div');
                document.getElementById("board").appendChild(newDiv);
                newDiv.className = "cell";
                newDiv.classList.add('potentialActive');
                
                newDiv.setAttribute('data-id',i);
                
                newDiv.addEventListener('click', (e) => {
                    if(this.classList.contains('potentialActive')){
                        let numberingCells = this.getAttribute('data-id');
                        console.log(numberingCells);
                        this.classList.add('active');

                        gamePath.push(this.getAttribute('data-id'));
                        this.setAttribute('data-counter',counter);
                        counter++;
                        this.classList.remove('potentialActive');

                        let potentialList = document.querySelectorAll('div.potentialActive');
                        for(let j=0; j<potentialList.length; j++) {
                            potentialList[j].classList.remove('potentialActive');
                        }
                        let numberingCellsminus10 = document.querySelector('div[data-id="'+(numberingCells-10)+'"]');
                        if(!numberingCellsminus10.classList.contains('active') ) {
                            numberingCellsminus10.classList.add('potentialActive');
                        } 
                        let numberingCellsplus10 = document.querySelector('div[data-id="'+(parseInt(numberingCells)+10)+'"]');
                        if(!numberingCellsplus10.classList.contains('active') ) {
                            numberingCellsplus10.classList.add('potentialActive');
                        }
                        let numberingCellsplus1 = document.querySelector('div[data-id="'+(parseInt(numberingCells)+1)+'"]');
                        if(!numberingCellsplus1.classList.contains('active') && (parseInt(numberingCells)+1)%10!=0) {
                            numberingCellsplus1.classList.add('potentialActive');
                        }
                        let numberingCellsminus1 = document.querySelector('div[data-id="'+(parseInt(numberingCells)-1)+'"]');
                        if(!numberingCellsminus1.classList.contains('active') && (parseInt(numberingCells)-1)%10!=9) {
                            numberingCellsminus1.classList.add('potentialActive');
                        }  
                    } 
                    this.classList.remove('potentialActive');
                })
            }
            console.log(gamePath);
            return gamePath;
        }
        
        dice() {
            document.getElementById('diceContainer').style.display = 'block';

            let button = document.createElement('button');
            button.classList.add('roll');
            document.getElementById('diceContainer').appendChild(button);
            button.innerHTML = 'Rzuć kostką';

            let diceRoll = () => {
                let diceValue = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                diceParagraph.innerHTML = diceValue;
                return diceValue;
            }

            button.addEventListener('click', () => { diceRoll() })

            let dice = document.createElement('div');
            dice.classList.add('diceArea');
            document.getElementById('diceContainer').appendChild(dice);

            let diceParagraph = document.createElement('p');
            diceParagraph.classList.add('diceParagraph');
            dice.appendChild(diceParagraph);
            
        }
        
        game() {

        }
    }

    let generator = new Generator();
    generator.createBoard();
    generator.dice();

    //ustawienie napisów Start, Koniec na pierwszym i ostatnim polu ścieżki
    //randomowe przypisanie funkcji pod pola ścieżki, poza startem i końcem
    //kostka do gry
    //pionki i poruszanie się po ścieżce
});