btn.addEventListener('click', function(){
	action.active();
})

const action = {
	"text": document.getElementById('js'),
	"active": function() {
		this.text.innerHTML += " Love it!"
	}
}