var crossWord = {
            "inputs": [],
            "count": 0,
            "valid": true,
            "submitResults": function() {
                if (this.valid === false) {
                    this.refresh();
                };
                this.inputs = document.getElementsByTagName('input');
                for (let i = 0; i < this.inputs.length; i++ ) {
                    this.checkResults(this.inputs[i]);
                };
                document.getElementById('result').innerHTML = '<h2 class="ans">' + "Correct: " + this.count; + "</h2>";
                this.valid = false;
            },
            "checkResults": function(item) {
                item.value = item.value.toUpperCase();
                if (item.value === item.id) {
                    item.setAttribute('style', 'color: blue');
                    this.count += 1;
                } else {
                    item.setAttribute('style', 'color: red');
                    item.value = item.id;
                }
            },
            "refresh": function() {
                this.count = 0;
                document.getElementById('result').innerHTML = '';
                for (let i = 0; i < this.inputs.length; i++) {
                    this.inputs[i].setAttribute('style', 'color: black')
                    this.inputs[i].value = '';
                };
                this.valid = true;
            }
        };