var x;
storeddata = "0";
ondisplay = "0";
func = 0;
max = 30;

function num(el) {
    if (ondisplay.indexOf("!") == -1) {
        if ((eval(ondisplay) == 0) &&
            (ondisplay.indexOf(".") == -1)
        ) {
            ondisplay = el;
        } else {
            ondisplay = ondisplay + el;
        };
        ondisplay = ondisplay.toLowerCase();
    } else {
        ondisplay = "Error";
    };
    if (ondisplay.indexOf("e0") != -1) {
        var epos = ondisplay.indexOf("e");
        ondisplay = ondisplay.substring(0, epos + 1) + ondisplay.substring(epos + 2);
    };
    if (ondisplay.length > max) {
        ondisplay = "e";
    };
    document.Calculator.Display.value = ondisplay;
}

function Dot() {
    if (ondisplay.length == 0) {
        ondisplay = "0.";
    } else {
        if ((ondisplay.indexOf(".") == -1) &&
            (ondisplay.indexOf("e") == -1)
        ) {
            ondisplay = ondisplay + ".";
        };
    };
    document.Calculator.Display.value = ondisplay;
}

function DoExponent() {
    if (ondisplay.indexOf("e") == -1) {
        ondisplay = ondisplay + "e0";
        document.Calculator.Display.value = ondisplay;
    };
}

function clean() {
    ondisplay = "0";
    func = 0;
    storeddata = "0";
    document.Calculator.Display.value = ondisplay;
}

function signe() {
    if (ondisplay.indexOf("e") != -1) {
        var epos = ondisplay.indexOf("e-");
        if (epos != -1) {
            ondisplay = ondisplay.substring(0, 1 + epos) + ondisplay.substring(2 + epos); //clip out -ve exponent 
        } else {
            epos = ondisplay.indexOf("e");
            ondisplay = ondisplay.substring(0, 1 + epos) + "-" + ondisplay.substring(1 + epos); //insert -ve exponent
        };
    } else {
        if (ondisplay.indexOf("-") == 0) {
            ondisplay = ondisplay.substring(1);
        } else {
            ondisplay = "-" + ondisplay;
        };
        if ((eval(ondisplay) == 0) &&
            (ondisplay.indexOf(".") == -1)
        ) {
            ondisplay = "0";
        };
    };
    document.Calculator.Display.value = ondisplay;
}

function functionn(op) {
    if (func != 0) {
        equals();
    };

    if (op.indexOf("*") > -1) {
        func = 1;
    };
    if (op.indexOf("/") > -1) {
        func = 2;
    };
    if (op.indexOf("+") > -1) {
        func = 3;
    };
    if (op.indexOf("-") > -1) {
        func = 4;
    };
    if (op.indexOf("%") > -1) {
        func = 5;
    };
    if (op.indexOf("^") > -1) {
        func = 6;
    };

    storeddata = ondisplay;
    ondisplay = "";
    document.Calculator.Display.value = ondisplay;
}

function equals() {
    if (func == 1) {
        ondisplay = eval(storeddata) * eval(ondisplay);
    };
    if (func == 2) {
        if (eval(ondisplay) != 0) {
            ondisplay = eval(storeddata) / eval(ondisplay);
        } else {
            ondisplay = "e";
        }
    };
    if (func == 3) {
        ondisplay = eval(storeddata) + eval(ondisplay);
    };
    if (func == 4) {
        ondisplay = eval(storeddata) - eval(ondisplay);
    };
    if (func == 5) {
        if (eval(ondisplay) != 0) {
            ondisplay = eval(storeddata) * eval(ondisplay) / 100;
        } else {
            ondisplay = "e";
        }
    };
    if (func == 6) {
        if (eval(ondisplay) != 0) {
            var v1 = eval(storeddata);
            var v2 = eval(ondisplay);
            ondisplay = Math.pow(v1, v2);
        } else {
            ondisplay = "e";
        }
    };

    func = 0;
    storeddata = "0";
    ondisplay = ondisplay + "";
    if (ondisplay.indexOf("Infinity") != -1) {
        ondisplay = "e";
    };
    if (ondisplay.indexOf("NaN") != -1) {
        ondisplay = "e";
    };
    document.Calculator.Display.value = ondisplay;
}

function Fixondisplay() {
    ondisplay = document.Calculator.Display.value;
    ondisplay = "" + parseFloat(ondisplay);
    if (ondisplay.indexOf("NaN") != -1) {
        ondisplay = "e";
    };
    document.Calculator.Display.value = ondisplay;
}

function sine() {
    x = document.Calculator.Display.value;
    document.Calculator.Display.value = Math.sin(x).toFixed(10);
    ondisplay = document.Calculator.Display.value;


}

function cose() {
    x = document.Calculator.Display.value;
    document.Calculator.Display.value = Math.cos(x).toFixed(10);
    ondisplay = document.Calculator.Display.value;


}

function tane() {
    x = document.Calculator.Display.value;
    document.Calculator.Display.value = Math.tan(x).toFixed(10);
    ondisplay = document.Calculator.Display.value;


}

function squareroot() {
    x = document.Calculator.Display.value;
    document.Calculator.Display.value = Math.sqrt(x);
    ondisplay = document.Calculator.Display.value;


}

function backe() {

    var number = document.Calculator.Display.value;

    var len = number.length - 1;

    var newNumber = number.substring(0, len);

    document.Calculator.Display.value = newNumber;

    ondisplay = document.Calculator.Display.value;

}

function pii() {

    x = document.Calculator.Display.value;
    if (ondisplay == 0 || ondisplay == "") {
        document.Calculator.Display.value = 3.14159265;
        ondisplay = document.Calculator.Display.value;

    } else if (x > 0) {
        var Pi = 0;
        var n = 1;
        for (var i = 0; i <= x; i++) {
            Pi = Pi + (4 / n) - (4 / (n + 2))
            n = n + 4
        }
        document.Calculator.Display.value = Pi.toFixed(8);;
        ondisplay = document.Calculator.Display.value;

    } else if (x = 0) {
        ondisplay = "3.14";
    } else {
        ondisplay = "e";
    }
    ondisplay = "0";
    func = 0;
    storeddata = "0";
}


function sqqq() {
    x = document.Calculator.Display.value;
    document.Calculator.Display.value = Math.pow(x, 2);
    ondisplay = document.Calculator.Display.value;

}

function logg() {

    x = document.Calculator.Display.value;
    document.Calculator.Display.value = Math.log(x).toFixed(10);
    ondisplay = document.Calculator.Display.value;
}
