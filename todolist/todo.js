// To Do Javascript


function addList() {
    const innerBox = '<input class="chk" type="checkbox"><input class="txt" type="text"></input></input>';
    let box = document.getElementById('input');
    box.innerHTML += '<br><br>' + innerBox;
}

function submit() {
    const txtInputs = document.getElementsByClassName('txt');
    let box = document.getElementById('input');
    let result = "";
    for (let i=0; i < txtInputs.length; i++) {
        result += '<div class="result"><input type="checkbox" class="chk"><span>' + txtInputs[i].value + '</span></input></div>'
    };
    box.innerHTML = result;
}
