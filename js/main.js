(function () {
    'use strict';

    // all My variabler
    var word = document.getElementsByClassName("word")[0];
    var letters = document.getElementsByClassName("letters")[0];
    var result = document.getElementsByClassName("result")[0];
    var hangman = window.Hangman;
    var randomWord = window.Hangman.peek();
    var hang_head = document.getElementById('hang_head');
    var lost = "YOU LOST!";
    var won = "YOU WON!";
    var randomword_split = randomWord.split("");
    var incr = 0;


    var all_alphabet = "abcdefghijklmnopqrstuvwxyzäåö".split("").map(function(alphabet) {
        return alphabet.toUpperCase();
    });


    for (var i = 0; i < hangman.validParts.length; i++) {
        hangman.hide(hangman.validParts[i]);
    }



    var line = "_";
    var lines = line.repeat(randomWord.length);

    lines = lines.split("");

    var word_Lines = document.createElement("div");

    word_Lines.className = "lines";
    word_Lines.innerHTML = lines;
    word.appendChild(word_Lines);


    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (var i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }




    function guess(letter) {
        for (var i = 0; i < randomWord.length; i++) {
            if (arraysEqual(lines, randomword_split)) {
                console.log("You Won!");
                var yoyWon = document.createElement("div");

                yoyWon.innerHTML = won;
                result.appendChild(yoyWon);
                break;
            } else if (hang_head.style.display === "inline") {
                console.log("You Lost!");
                var youLost = document.createElement("div");

                youLost.innerHTML = lost;
                result.appendChild(youLost);
                break;
            } else if (randomword_split.includes(letter)) {
                var index = randomword_split.indexOf(letter);

                lines.splice(index, 1, randomword_split[index]);
                word_Lines.innerHTML = lines;
                word.appendChild(word_Lines);

                if (randomword_split.indexOf(letter) > -1) {
                    if (randomword_split[i] === letter) {
                        lines[i] = letter;
                        console.log(lines);
                    }
                }
            } else {
                hangman.show(hangman.validParts[incr]);
                incr++;
                break;
            }
        }
    }




    for (i = 0; i < all_alphabet.length; i++) {
        var temp = document.createElement("button");

        temp.className = "letter";
        temp.id = all_alphabet[i];
        temp.innerHTML = all_alphabet[i];
        temp.addEventListener("click", function(event) {
            guess(event.target.innerHTML);
            var letter = document.getElementById(event.target.innerHTML);

            console.log(letter);

            letter.style.color = "black";
            letter.style.background = "red";
            letter.disabled = true;
        });
        letters.appendChild(temp);
    }
})();
