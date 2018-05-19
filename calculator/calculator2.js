var readInput = function() {
    var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    
    var plus = document.getElementById('plus');
    plus.innerHTML = a + " + " + b + " = " + String(Number(a) + Number(b));

    var minus = document.getElementById('minus');
    minus.innerHTML = a + " - " + b + " = " + String(Number(a) - Number(b));

    var times = document.getElementById('times');
    times.innerHTML = a + " * " + b + " = " + String(Number(a) * Number(b));

    var divides = document.getElementById('divides');
    divides.innerHTML = a + " / " + b + " = " + String(Number(a) / Number(b));
    };


function main() {
    var btn = document.getElementById('btn');
    btn.onclick = readInput;
};

main();
