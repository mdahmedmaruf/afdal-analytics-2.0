const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const eyeImages = document.querySelectorAll('.open-eye-img');

togglePassword.addEventListener('click', function (e) {
	// toggle the type attribute
	const type =
		password.getAttribute('type') === 'password' ? 'text' : 'password';
	password.setAttribute('type', type);
	// toggle the eye slash icon
	// if (this.classList.contains('visually-hidden')) {
	// 	this.classList.remove('visually-hidden');
	// } else {
	// 	this.classList.add('visually-hidden');
	// }
	for (const eyeImage of eyeImages) {
		if (eyeImage.classList.contains('visually-hidden')) {
			eyeImage.classList.remove('visually-hidden');
		} else {
			eyeImage.classList.add('visually-hidden');
		}
	}
});
