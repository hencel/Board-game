import "../scss/main.scss";
import { throws } from "assert";
import { pathToFileURL } from "url";

document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    class Generator {
        constructor() {
            this.width = 10;
            this.height = 10;
        };
        createBoard() {
            let gamePath = [];
            for (let i=0; i<this.width*this.height; i++) {
                let newDiv = document.createElement('div');
                document.getElementById("board").appendChild(newDiv);
                newDiv.className = "cell";
                newDiv.classList.add('potentialActive');
                newDiv.setAttribute('data-id',i);
                
                newDiv.addEventListener('click', function() {
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
                        console.log((parseInt(numberingCells)-1)%10);
                    }
                    this.classList.remove('potentialActive');
                })
            }
            console.log(gamePath)
        }
    }

    let generator = new Generator();
    generator.createBoard();

    //ustawienie napisów Start, Koniec na pierwszym i ostatnim polu ścieżki
    //randomowe przypisanie funkcji pod pola ścieżki, poza startem i końcem
    //kostka do gry
    //pionki i poruszanie się po ścieżce
});