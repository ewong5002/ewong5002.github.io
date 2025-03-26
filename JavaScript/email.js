emailjs.init({
	publicKey: "8zETn5M9XUT2QMQgO",
});

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = {
		name : document.getElementById('name').value,
		email : document.getElementById('email').value,
		subject : document.getElementById('subject').value,
		message : document.getElementById('message').value,
	};

	if(Objects.values(formData).some(field => !field)) {
		alert('Please fill all fields');
		return;
	}

	emailjs.send("service_m88825v","template_s0ru2jk", formData)
		.then(() => {
			alert('Email sent!');
			e.target.reset();
		})
		.catch((error) => {
			alert('Failed to send email');
			console.error('EmailJS Error: ', error);
	});
});