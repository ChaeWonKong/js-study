// WebChat Javascript
function send() {
    let content = document.getElementById('cmt');
    if (content.value === "") {
        alert("Please Enter any Comment")
    } else {
        let con = document.getElementById('con');
        con.innerHTML += '<div class="conA"><div class="user">Leon</div><div class="txt"><p>' + content.value + '</p></div></div>';
        content.value = "";
    }
}