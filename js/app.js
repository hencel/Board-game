import "../scss/main.scss";
import { throws } from "assert";
import { pathToFileURL } from "url";
import { timingSafeEqual } from "crypto";

document.addEventListener('DOMContentLoaded', function() {
    let game = new Game();
    let generator = new Generator();
    generator.createBoard();
});
//stany gry: 1: tworzenie planszy 2: przypisywanie funkcji kolejnym 
class Game { 
        constructor() {          
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
            this.diceValue = 0;
            this.positionBox;
            this.pawn0;
            this.pawn1;
            this.lostRound = false;
            this.bonusRound = false;
            this.lostRoundCheck = false
        }
        //kostka do gry
        dice() {
           //odpalana jeśli stan gry jest 0
            if (this.state == 0){
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
                    this.movement();
                }
            }
        }
        //definiujemy graczy, gracze podają imiona zapisywane w state
        players() {
            if(this.state == 0) {
                this.players[0].name = prompt("Podaj imię pierwszego gracza. Gracz żółty");
                this.players[1].name = prompt("Podaj imię drugiego gracza. Gracz czarny");
                this.pawns();
            }
        }
        //tworzenie pionków, odpalone zaraz po zabraniu imion graczy
        pawns() {
            let firstBox = document.querySelector("[data-counter='0']");
            firstBox.style.position = 'relative';
            this.pawn0 = document.createElement('div');
            this.pawn0.classList.add('pawn0');
            firstBox.appendChild(this.pawn0);
            this.pawn1 = document.createElement('div');
            this.pawn1.classList.add('pawn1');
            firstBox.appendChild(this.pawn1);
        }
        movement() {
            //zmienna do wyświetlania komunikatów
            let infoContainer = document.querySelector('#infoContainer');
            //dodajemy wynik z kostki do pozycji gracza
            this.players[this.nextPlayer].position += this.diceValue;
            //działa jesli pozycja gracza jakiegokolwiek, jest niższa niż długość ścieżki
            if(this.players[this.nextPlayer].position < this.gamePath.length-1) {

                //przeniesienie pionka
                this.positionBox = document.querySelector("[data-counter='"+this.players[this.nextPlayer].position+"']");
                //przypisanie pionka do danego pola
                this.changePawnPosition();

                //sprawdzenie funkcji danego pola
                //plus 1
                    if(this.positionBox.dataset.val === '1') {
                        infoContainer.innerHTML = "Idziesz jeden do przodu";
                        //korekta pozycji gracza
                        this.players[this.nextPlayer].position += 1;
                        //ustawienie właściwego pola
                        this.positionBox = document.querySelector("[data-counter='"+this.players[this.nextPlayer].position+"']");
                        //przestawienie pionka
                        this.changePawnPosition();
                //minus 1
                    } else if (this.positionBox.dataset.val === '-1') {
                        infoContainer.innerHTML = "Idziesz jeden do tyłu";
                        //korekta pozycji gracza
                        this.players[this.nextPlayer].position -= 1;
                        //ustawienie właściwego pola
                        this.positionBox = document.querySelector("[data-counter='"+this.players[this.nextPlayer].position+"']");
                        //przestawienie pionka
                        this.changePawnPosition();
                    
                // strata kolejki
                    } else if(this.positionBox.dataset.val === '0') {
                        infoContainer.innerHTML = "Tracisz kolejkę";
                        this.lostRound = true;
                        this.lostRoundCheck = true;
                //Dodatkowy ruch
                    } else if(this.positionBox.dataset.val === 'x') {
                        infoContainer.innerHTML = "Masz dodatkowy ruch";
                        this.bonusRound = true;
                //Powrót na start        
                    } else if(this.positionBox.dataset.val === 'y') {
                        infoContainer.innerHTML = "Wracasz na start";
                        this.players[this.nextPlayer].position = 0;
                        this.positionBox = document.querySelector("[data-counter='"+this.players[this.nextPlayer].position+"']");
                        this.changePawnPosition();
                    }
                //sprawdzenie kolejnego gracza    
                if(this.nextPlayer === 0) {
                    if(this.bonusRound === true) {
                        infoContainer.innerHTML = "Teraz gracz żółty";
                        this.nextPlayer = 0;
                        this.bonusRound = false;
                    } else {
                        if(this.lostRound === true && this.lostRoundCheck === true) {
                            infoContainer.innerHTML = "Teraz gracz czarny";
                            this.nextPlayer = 1;
                            this.lostRoundCheck = false;
                        } else if (this.lostRound === true && this.lostRoundCheck === false) {
                            infoContainer.innerHTML = "Teraz gracz czarny";
                            this.nextPlayer = 1;
                        } else {
                            infoContainer.innerHTML = "Teraz gracz czarny";
                            this.nextPlayer = 1
                        }
                    }
                    
                
                } else {
                    if(this.bonusRound === true) {
                        infoContainer.innerHTML = "Teraz gracz czarny";
                        this.nextPlayer = 1;
                        this.bonusRound = false;
                    } else {
                        if(this.lostRound === true && this.lostRoundCheck === true) {
                            infoContainer.innerHTML = "Teraz gracz żółty";
                            this.nextPlayer = 0;
                            this.lostRoundCheck = false;
                        } else if (this.lostRound === true && this.lostRoundCheck === false) {
                            infoContainer.innerHTML = "Teraz gracz żółty";
                            this.nextPlayer = 0;
                        } else {
                            infoContainer.innerHTML = "Teraz gracz żółty";
                            this.nextPlayer = 0
                        }
                    }
                }
            //sytuacja: wyrzucenie więcej oczek niż długość trasy
            } else if(this.players[this.nextPlayer].position > this.gamePath.length-1) {
                this.players[this.nextPlayer].position -= this.diceValue;
                infoContainer.innerHTML = 'Ups, wyrzuciłeś za dużo. Teraz drugi gracz';
                if(this.nextPlayer === 0) {
                    this.nextPlayer = 1;
                } else (
                    this.nextPlayer = 0
                )
               
            //Informacja o wygranej    
            } else {
                this.positionBox = document.querySelector("[data-counter='"+this.players[this.nextPlayer].position+"']");
                infoContainer.innerHTML = 'Gracz ' + this.players[this.nextPlayer].name + ' wygrał';
                document.getElementById('diceContainer').style.display = 'none';
                if(this.nextPlayer === 0) {
                    this.positionBox.appendChild(this.pawn0);
                } else {
                    this.positionBox.appendChild(this.pawn1);
                }
            }
        }
        changePawnPosition() {
            if(this.nextPlayer === 0) {
                this.positionBox.appendChild(this.pawn0);
            } else {
                this.positionBox.appendChild(this.pawn1);
            }
        }
    }

class Generator extends Game {
        constructor() {
            super();
            this.width = 10;
            this.height = 10;
            this.gamePath = [];
            //funkcje do przypisania do wybranej ścieżki
            this.cellsFunc = [
                {description: "Jedno pole do przodu", val: '1'},
                {description: "Jedno pole do tyłu", val: '-1'},
                {description: "Strata kolejki", val: '0'},
                {description: "Dodatkowy ruch", val: 'x'},
                {description: "Powrót na start", val: 'y'}
            ]
        };
        createBoard() {
            let counter = 0;
            this.createNextButton();
            for (let i=0; i<this.width*this.height; i++) { //budowa tablicy elementów planszy gry
                let newDiv = document.createElement('div'); //tworzenie nowych elementów planszy i przypięcie do planszy
                document.getElementById("board").appendChild(newDiv); 
                newDiv.className = "cell";
                newDiv.classList.add('potentialActive');
                newDiv.setAttribute('data-id',i); //przypisanie id elementom od 0 do 99
                document.querySelector('#infoContainer').innerHTML = 'Narysuj ścieżkę gry! Potem kliknij "Następny etap"';

                newDiv.addEventListener('click', (el) => { //event na click do rysowania ścieżki

                    if (this.state == 1){ //stan 1 czyli rysowanie ścieżki

                        if(el.target.classList.contains('potentialActive')){ 
                            let numberingCells = el.target.getAttribute('data-id');
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
                    } else if (this.state == 2) { //stan 2 czyli wybieranie własności i przypisywanie do ścieżki
                        let infoContainer = document.querySelector('#infoContainer');
                        //przypisanie funkcji
                        if(el.target.classList.contains('active')) {
                            let func = this.cellsFunc[Math.floor(Math.random() * (this.cellsFunc.length))].val;
                            el.target.setAttribute('data-val', func);
                            el.target.style.background = "url('/img/obj_stoneblock009.png') no-repeat center bottom/cover"; 
                            //wyświetlenie przypisanej funkcji w polu info
                            if(func === '1') {
                                infoContainer.innerHTML = "Jedno pole do przodu";
                            } else if(func === '-1') {
                                infoContainer.innerHTML = "Jedno pole do tyłu";
                            } else if(func === 'x') {
                                infoContainer.innerHTML = "Dodatkowy ruch";
                            } else if(func === '0') {
                                infoContainer.innerHTML = "Strata kolejki"; 
                            } else if(func === 'y') {
                                infoContainer.innerHTML = "Powrót na start"; 
                            }
                        }

                    }
                });
                

            } 
        }
        //tworzenie przycisku do przełączania kolejnych etapów
        createNextButton() {
            let nextButton = document.createElement('button');
            document.getElementById("diceContainer").appendChild(nextButton);
            nextButton.className = 'roll';
            nextButton.innerHTML = 'Następny etap';
            //usuwamy pozostałe klasy potencial
            nextButton.addEventListener('click', (el) => {
                let potential = document.querySelectorAll('.potentialActive');
                    for(let i=0; i<potential.length; i++) {
                        potential[i].classList.remove('potentialActive');
                    }
                    //info dla usera o kolejnym kroku
                document.querySelector('#infoContainer').innerHTML = 'Przypisz losowe funkcje do wybranych pól. Potem kliknij "Następny etap"';
                //zmieniamy stan gry 
                this.state += 1;
                if(this.state > 2 ){
                    this.state = 0;
                    nextButton.style.display = 'none';
                    document.querySelector('#infoContainer').innerHTML = '';
                    super.dice();
                } else if( this.state == 0) {
                    nextButton.style.display = 'none';
                    document.querySelector('#infoContainer').innerHTML = '';
                    super.dice();
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
