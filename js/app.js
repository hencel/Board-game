import "../scss/main.scss";
import { throws } from "assert";

document.addEventListener('DOMContentLoaded', function() {
    class Generator {
        constructor() {
            this.width = 10;
            this.height = 10;
            // this.cells = [];
        };
        createBoard() {
            let array = [];

            for (let i=0; i<=10; i++) {
                array[i] = [];
                for(let j=0; j<10; j++) {
                    let newDiv = document.createElement('div');
                    array[i][j] = newDiv;
                    newDiv.className = "cell";
                    document.getElementById("board").appendChild(newDiv);  
                }
            }
            
            for(let i=0; i<array.length; i++) {
                for(let j=0; j<array[i].length; j++) {
                    array[i][j].addEventListener('click', function() { 
                        console.log('działa');
                        if (this.classList.contains('active') ) {
                            this.classList.add('active');
                        } else {
                            this.classList.add('active');
                            if(array[i+1][j].classList.contains('active') && array[i-1][j].classList.contains('active') && array[i][j+1].classList.contains('active') && array[i][j-1].classList.contains('active')) {
                                console.log('nic');    
                            } else {
                                array[i+1][j].classList.add('potentialActive');
                                array[i-1][j].classList.add('potentialActive');
                                array[i][j+1].classList.add('potentialActive');
                                array[i][j-1].classList.add('potentialActive');
                            }
                        }
                    })
                }    
            }

        }
    }

    let generator = new Generator();
    generator.createBoard();

    //blokada przed kliknięciem gdziekolwiek - tylko sąsiednie pola - dodanie klasy potentialActive
    //zapisanie współrzędnych klikniętych pól do tablicy
    //ustawienie napisów Start, Koniec na pierwszym i ostatnim polu ścieżki
    //randomowe przypisanie funkcji pod pola ścieżki, poza startem i końcem
    //kostka do gry
    //pionki i poruszanie się po ścieżce
});