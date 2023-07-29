const id = (id) => document.getElementById(id);
const email = id("email"),
	form = id("subscription-form");
form.addEventListener('submit', e => {
	e.preventDefault();
	validateInputs();
});

const isValidEmail = email => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
	const emailValue = email.value.trim();
	const setError = (element, message) => {
		const inputControl = element.parentElement;
		const errorDisplay = inputControl.querySelector('#error-message');
		errorDisplay.innerText = message;
		// inputControl.classList.add('error');
		// inputControl.classList.remove('success')
	};
	const setSuccess = element => {
		const inputControl = element.parentElement;
		const errorDisplay = inputControl.querySelector('#error-message');
		errorDisplay.innerText = '';
		// inputControl.classList.add('success');
		// inputControl.classList.remove('error');
	};
	if (emailValue === '') {
		setError(email, 'Email Address cannot be empty');
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Looks like this is not an email');
	} else {
		setSuccess(email);
	}
};