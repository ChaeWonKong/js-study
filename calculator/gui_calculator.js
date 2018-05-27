var calculate = {
    "arr": [],
    "valid": true,
    "setValue": function(val) {
        let input = document.getElementById('input');
        if (input.value === "0") {
            input.value = val;
        } else {
            if (this.valid === false) {
                input.value = val;
                this.valid = true;
            } else {
                input.value += val;
            };
        }
    },
    "setDefault": function() {
        this.arr = [];
        document.getElementById('input').value = "0";
    },
    "getOperator": function(opr) {
        let input = document.getElementById('input');
        let arr = this.arr;
        arr.push(input.value);
        let result = arr[0];
        for (var i = 1; i < arr.length; i++) {
                    switch (arr[i]) {
                        case '+':
                            result += Number(arr[i+1]);
                            break;
                        case '-':
                            result -= Number(arr[i+1]);
                            break;
                        case '*':
                            result *= Number(arr[i+1]);
                            break;
                        case '/':
                            result /= Number(arr[i+1]);
                            break;
                        case '=':
                            break;
                        default:
                            break;
                    };
                };
        input.value = result;
        arr.push(opr);
        this.valid = false;
    }
}