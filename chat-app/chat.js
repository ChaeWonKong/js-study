// WebChat Javascript

var main = {
    'user': "",
    'getUser': function() {
        this.user = prompt("Enter your nickname")
        document.write(this.user);
        
    },
    'send': function() {
        let content = document.getElementById('cmt');
        if (content.value === "") {
            alert("Please Enter any Comment")
        } else {
            let con = document.getElementById('con');
            con.innerHTML += '<div class="conA"><div class="user">'+ this.user 
            +'</div><div class="txt"><p>' + content.value + '</p></div></div>';
            content.value = "";
        }
    }
}
