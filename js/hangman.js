/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function () {
    "use strict";
    var words = [
        "PETER",
        "JAVASCRIPT",
        "PYTHON",
        "PHP",
        "BTH",
    ];

    var random = words[Math.floor(Math.random()*words.length)];




    var hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill": document.getElementById('hang_hill'),
            "gallow": document.getElementById('hang_construction'),
            "body": document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm": document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg": document.getElementById('hang_leftleg'),
            "rope": document.getElementById('hang_rope'),
            "head": document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],

        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */

        peek: function() {
            return random;
        },

        wordlist: function() {
            return words;
        },

        "isValid": function (words) {
            if (this.validParts.indexOf(words) === -1) {
                window.console.log("The part is not valid: " + words);
                return false;
            }
            window.console.log("The part is valid: " + words);
            return true;
        },



        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (words) {
            if (this.isValid(words)) {
                window.console.log("Hiding part: " + words);
                this.partAsElement[words].style.display = "none";
            }
        },


        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (words) {
            if (this.isValid(words)) {
                window.console.log("Showing part: " + words);
                this.partAsElement[words].style.display = "inline";
            }
        }
    };

    // window.console.log("You can now use the hangman object as a part of the window-object." +
    // "Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')" +
    // "\n\nHere are all the parts you can work on.");
    window.console.log(hangman.validParts);



    // window.console.log(random);


    // Return the object to make it visible.
    return hangman;
})();
