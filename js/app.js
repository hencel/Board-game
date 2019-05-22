import "../scss/main.scss";

document.addEventListener('DOMContentLoaded', function() {
    class Generator {
        constructor() {
            this.width = 10;
            this.height = 10;
            this.cells = [];
        };
        createBoard() {

            for (let i=0; i<=10; i++) {
                this.cells[i] = [];
                for(let j=0; j<10; j++) {
                    let newDiv = document.createElement('div');
                    this.cells[i][j] = newDiv;
                    newDiv.className = "cell";
                    document.getElementById("board").appendChild(newDiv);  
                }
            }
            // for(let i=0; i<this.width; i++) {
            //     let newDiv = document.createElement("div");  
            //     newDiv.classList.add("col");
            //     document.getElementById("board").appendChild(newDiv); 
            // };
            // let column = document.querySelectorAll(".col");
            // for (let i = 0; i < column.length; i++) {
            //     this.cells[i] = [];
            //     for (let j = 0; j < this.height; j++) {
            //         let newDiv = document.createElement('div');
            //         this.cells[i][j] = newDiv;
            //         newDiv.className = "cell";
            //         column[i].appendChild(newDiv);
            //     }
            // };
            let a = 1;

            for(let i=0; i<this.cells.length; i++) {
                for(let j=0; j<this.cells[i].length; j++)
                    this.cells[i][j].addEventListener('click', function() { 
                        console.log("działa");
                        this.classList.add("active");
                        console.log(`[${i}][${j}]`);
                        console.log( this.parentElement.find(this.cells[1][2]));
                        this.parentElement.find(this.cells[i+1][j+2]).classList.add("active");
                })
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