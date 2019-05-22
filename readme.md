<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Programowanie funkcyjne &ndash; zadania
> Do realizacji zadań używaj odpowiednich metod do operacji na tablicach, dostępnych w ES6: ```forEach()```, ```map()```, ```reduce()```.

## Zadanie rozwiązywane z wykładowcą

### Obliczanie liczby liter w stringu  (~ 5min)

Mając do dyspozycji tablicę z nazwami miast, zwróć i wypisz nową tablicę z ilością liter każdego miasta.

Na przykład dla tablicy miast:
```JavaScript
var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
```
Wynik powinien być następujący:

```JavaScript
[6, 7, 8, 19];
```

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 10min)

Stwórz funkcję ```randomize(param1, param2, callback)```, która jako parametry przyjmuje:
* Dowolne dwie liczby -  określające przedział między jakim będziemy losować liczbę
* funkcje anonimową, której zadaniem jest wypisanie wylosowanej liczby.
* niech funkcja ```ranodmize()``` sprawdza przed wywołaniem  callback czy rzeczywiście jest ona funkcją.

### Zadanie 2 (~ 2min - 5min)

Mając do dyspozycji tablicę ze zwierzętami, wypisz kolejne zwierzę w konsoli.

```JavaScript
var animals = ["cat", "shrimp", "giraffe"];
```

### Zadanie 3 (~ 2min - 5min)

Mając do dyspozycji tablicę z latami, stwórz nową tablicę, która będzie zawierała wiek osoby urodzonej danego roku. Wyświetl nową tablicę.

```JavaScript
var years = [1995, 1856, 2014, 1987];
```

### Zadanie 4 (~ 5min - 7min)

Mając do dyspozycji tablicę z liczbami, zwróć i wyświetl:

*  wynik dodawania wszystkich liczb z tablicy (suma liczb z tablicy)
*  wynik mnożenia wszystkich liczb z tablicy (iloczyn liczb z tablicy)
