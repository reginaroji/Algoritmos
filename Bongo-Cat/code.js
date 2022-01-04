let pressedKey;
let lastKeyPressed;
let pressedCode;
let audio;
let keyUp;
let keyUpCode;
let flag = false;

// function rightPaw(key) {
//     if (lastKeyPressed != key) {
//         lastKeyPressed = key;
//     }
// }


window.addEventListener("keypress", function (event) {
    console.log(event.key)
    pressedKey = event.key.toLowerCase();
    pressedCode = event.code;
    if (pressedCode === "Space" && lastKeyPressed != "Space") {
        lastKeyPressed = pressedCode;
        //flag = true;
        console.log("tecla espacio");
        this.document.getElementById("mouth").style.backgroundPosition = "100% 0";
        audio = new Audio('/assets/audio/sounds_meow.mp3');
        audio.play();
    }

    switch (pressedKey) {
        case "a":
            if (lastKeyPressed != "a") {
                lastKeyPressed = "a";
                console.log("tecla a");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/bongo.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_bongoA.mp3');
                audio.play();
            }
            break;
        case "d":
            if (lastKeyPressed != "d") {
                lastKeyPressed = "d";
                console.log("tecla d");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/bongo.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_bongoD.mp3');
                audio.play();
            }
            break;
        case "c":
            if (lastKeyPressed != "c") {
                lastKeyPressed = "c";
                console.log("tecla c");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/cymbal.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_cymbal.mp3');
                audio.play();
            }
            break;
        case "f":
            if (lastKeyPressed != "f") {
                lastKeyPressed = "f";
                console.log("tecla f");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/cowbell.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_cowbell.mp3');
                audio.play();
            }
            break;
        case "b":
            if (lastKeyPressed != "b") {
                lastKeyPressed = "b";
                console.log("tecla b");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/tambourine.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_tambourine.mp3');
                audio.play();
            }
            break;
        case "1":
            if (lastKeyPressed != "1") {
                lastKeyPressed = "1";
                console.log("tecla 1");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard1.mp3');
                audio.play();
            }
            break;
        case "2":
            if (lastKeyPressed != "2") {
                lastKeyPressed = "2";
                console.log("tecla 2");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard2.mp3');
                audio.play();
            }
            break;
        case "3":
            if (lastKeyPressed != "3") {
                lastKeyPressed = "3";
                console.log("tecla 3");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard3.mp3');
                audio.play();
            }
            break;
        case "4":
            if (lastKeyPressed != "4") {
                lastKeyPressed = "4";
                console.log("tecla 4");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard4.mp3');
                audio.play();
            }
            break;
        case "5":
            if (lastKeyPressed != "5") {
                lastKeyPressed = "5";
                console.log("tecla 5");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard5.mp3');
                audio.play();
            }
            break;
        case "6":
            if (lastKeyPressed != "6") {
                lastKeyPressed = "6";
                console.log("tecla 6");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard6.mp3');
                audio.play();
            }
            break;
        case "7":
            if (lastKeyPressed != "7") {
                lastKeyPressed = "7";
                console.log("tecla 7");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard7.mp3');
                audio.play();
            }
            break;
        case "8":
            if (lastKeyPressed != "b") {
                lastKeyPressed = "b";
                console.log("tecla 8");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard8.mp3');
                audio.play();
            }
            break;
        case "9":
            if (lastKeyPressed != "9") {
                lastKeyPressed = "9";
                console.log("tecla 9");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard9.mp3');
                audio.play();
            }
            break;
        case "0":
            if (lastKeyPressed != "0") {
                lastKeyPressed = "0";
                console.log("tecla 0");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/keyboard.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_keyboard0.mp3');
                audio.play();
            }
            break;
        case "q":
            if (lastKeyPressed != "q") {
                lastKeyPressed = "q";
                console.log("tecla q");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaQ.mp3');
                audio.play();
            }
            break;
        case "w":
            if (lastKeyPressed != "w") {
                lastKeyPressed = "w";
                console.log("tecla w");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaW.mp3');
                audio.play();
            }
            break;
        case "e":
            if (lastKeyPressed != "e") {
                lastKeyPressed = "e";
                console.log("tecla e");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaE.mp3');
                audio.play();
            }
            break;
        case "r":
            if (lastKeyPressed != "r") {
                lastKeyPressed = "r";
                console.log("tecla r");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaR.mp3');
                audio.play();
            }
            break;
        case "t":
            if (lastKeyPressed != "t") {
                lastKeyPressed = "t";
                console.log("tecla t");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-left").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaT.mp3');
                audio.play();
            }
            break;
        case "y":
            if (lastKeyPressed != "y") {
                lastKeyPressed = "y";
                console.log("tecla y");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaY.mp3');
                audio.play();
            }
            break;
        case "u":
            if (lastKeyPressed != "u") {
                lastKeyPressed = "u";
                console.log("tecla u");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaU.mp3');
                audio.play();
            }
            break;
        case "i":
            if (lastKeyPressed != "i") {
                lastKeyPressed = "i";
                console.log("tecla i");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaI.mp3');
                audio.play();
            }
            break;
        case "o":
            if (lastKeyPressed != "o") {
                lastKeyPressed = "o";
                console.log("tecla o");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaO.mp3');
                audio.play();
            }
            break;
        case "p":
            if (lastKeyPressed != "p") {
                lastKeyPressed = "p";
                console.log("tecla p");
                this.document.getElementById("instrument").style.backgroundImage = "url(/assets/instruments/marimba.png)";
                this.document.getElementById("paw-right").style.backgroundPosition = "100% 0";
                audio = new Audio('/assets/audio/sounds_marimbaP.mp3');
                audio.play();
            }
            break;
    }
    //console.log(event.key)
})


this.window.addEventListener("keyup", function (event) {
    keyUpCode = event.code;
    keyUp = event.key.toLowerCase();
    if (keyUpCode === "Space") {
        lastKeyPressed = "";
        //flag = false;
        console.log("espacio levantado")
        console.log(keyUpCode);
        this.document.getElementById("mouth").style.backgroundPosition = "0 0";
    }

    switch (keyUp) {
        case "a":
            lastKeyPressed = "";
            console.log("tecla a");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "d":
            lastKeyPressed = "";
            console.log("tecla d");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "c":
            lastKeyPressed = "";
            console.log("tecla c");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "f":
            lastKeyPressed = "";
            console.log("tecla f");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "b":
            lastKeyPressed = "";
            console.log("tecla b");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "1":
            lastKeyPressed = "";
            console.log("tecla 1");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "2":
            lastKeyPressed = "";
            console.log("tecla 2");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "3":
            lastKeyPressed = "";
            console.log("tecla 3");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "4":
            lastKeyPressed = "";
            console.log("tecla 4");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "5":
            lastKeyPressed = "";
            console.log("tecla 5");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "6":
            lastKeyPressed = "";
            console.log("tecla 6");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "7":
            lastKeyPressed = "";
            console.log("tecla 7");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "8":
            lastKeyPressed = "";
            console.log("tecla 8");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "9":
            lastKeyPressed = "";
            console.log("tecla 9");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "0":
            lastKeyPressed = "";
            console.log("tecla 0");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "q":
            lastKeyPressed = "";
            console.log("tecla q");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "w":
            lastKeyPressed = "";
            console.log("tecla w");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "e":
            lastKeyPressed = "";
            console.log("tecla e");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "r":
            lastKeyPressed = "";
            console.log("tecla r");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "t":
            lastKeyPressed = "";
            console.log("tecla t");
            this.document.getElementById("paw-left").style.backgroundPosition = "0 0";
            break;
        case "y":
            lastKeyPressed = "";
            console.log("tecla y");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "u":
            lastKeyPressed = "";
            console.log("tecla u");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "i":
            lastKeyPressed = "";
            console.log("tecla i");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "o":
            lastKeyPressed = "";
            console.log("tecla o");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
        case "p":
            lastKeyPressed = "";
            console.log("tecla p");
            this.document.getElementById("paw-right").style.backgroundPosition = "0 0";
            break;
    }
})