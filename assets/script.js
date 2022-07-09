let add = document.getElementById('like');

let int = document.getElementById ('number-like-sphynx', 'number-like-persia');
let integer = 0;

add.addEventListener('click', function() {
	alert("Anda menyukai kucing ini!");
	integer += 1;
	int.innerHTML = integer;
})