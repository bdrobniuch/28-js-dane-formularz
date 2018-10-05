/*
W pliku html stwórz podstawową strukturę html5, a następnie stwórz folder "js" a w nim plik "main.js". W pliku html podepnij Twój skrypt.

W html stwórz prosty formularz z następującymi polami:
1. Imię
2. Nazwisko 
3. Numer telefonu

Poniżej formularza stwórz następującą strukturę:

<button>Wyświetl dane</button>
<div id="container">
    <p>Dane:</p>
    <p id="name"></p>
    <p id="surname"></p>
    <p id="phone"></p>
</div>
Twoim zadaniem jest stworzyć funkcję uruchamianą po kliknięciu buttona.

Funkcja powinna pobierać dane z inputów formularza i wstawiać je do odpowiednich paragrafów. 
Należy użyć do tego właściwości .value

Przykład:

var nazwa = document.getElementById("nazwa-id");
console.log(nazwa.value);
Dodatkowo do projektu dołącz plik css, w którym nadaj dowolny wygląd Twojej stronie.

Pliki dodaj do zdalnego repozytorium i podeślij link do sprawdzenia.
*/

function getdata()
{
  var vname = document.getElementById("iname").value;
  console.log(vname);
    var vsurname = document.getElementById("isurname").value;
  console.log(vsurname);
    var vphone = document.getElementById("iphone").value;
  console.log(vphone);
    
 document.getElementById("name").textContent = vname;
 document.getElementById("surname").textContent = vsurname;   
 document.getElementById("phone").textContent = vphone; 
}

document.getElementById("send").onclick = getdata;

