import "../scss/main.scss";
import { throws } from "assert";

document.addEventListener('DOMContentLoaded', function() {
    class Generator {
        constructor() {
            this.width = 10;
            this.height = 10;
        };
        createBoard() {
            let array = [];

            for (let x=0; x<=10; x++) {
                array[x] = [];
                for(let y=0; y<10; y++) {
                    let newDiv = document.createElement('div');
                    array[x][y] = newDiv;
                    newDiv.className = "cell";
                    newDiv.setAttribute("x",x);
                    newDiv.setAttribute("y",y);
                    document.getElementById("board").appendChild(newDiv);  
                }
            }
            let something = document.querySelectorAll('.cell');
            console.log(something);
            console.log(array[0][3]);

            for(let i=0; i<=something.length; i++) {
                something[i].addEventListener('click', function() {
                    let x = this.getAttribute('x');
                    let y = this.getAttribute('y');
                    
                    //tutaj wpisać całą logikę

                });
            }

            // for(let i=0; i<array.length; i++) {
            //     for(let j=0; j<array[i].length; j++) {
                    // array[i][j].addEventListener('click', function() { 
                    //     console.log('działa');
                    //     if (this.classList.contains('active') ) {
                    //         console.log(".");
                    //     } else {
                    //         this.classList.add('active');
                    //         if(array[i+1][j].classList.contains('active') && array[i-1][j].classList.contains('active') && array[i][j+1].classList.contains('active') && array[i][j-1].classList.contains('active')) {
                    //             console.log('nic');    
                    //         } else { //tutaj wstawić sprawdzenie czy zawiera dla każdego pola indywidualnie
                    //             if (this.classList.contains('active') ) {
                    //                 console.log(".");
                    //             } else 
                    //             array[i+1][j].classList.add('potentialActive');
                    //             array[i-1][j].classList.add('potentialActive');
                    //             array[i][j+1].classList.add('potentialActive');
                    //             array[i][j-1].classList.add('potentialActive');

                    //         }
                    //     }
                    // })

            //     }    
            // }

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