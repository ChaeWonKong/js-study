var input = prompt("계산할 내용을 입력하세요");
var calc = document.getElementById('input');
calc.innerHTML = input;

var arr = input.split(" ");


for (var i = 0; i < arr.length; i++) {
    if (Number(arr[i])) {
        arr[i] = Number(arr[i]);  
    }
};

var result = arr[0];
for (var j = 0; j < arr.length; j++) {
    if (arr[j] === '+') {
        result += arr[j+1];
    } else if (arr[j] === '-') {
        result -= arr[j+1];
    } else if (arr[j] === '*') {
        result *= arr[j+1];
    } else if (arr[j] === '/') {
        result /= arr[j+1];
    }
}

document.write(result);




