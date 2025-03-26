function sendEmail() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const subject = document.getElementById("subject").value;
	const message = document.getElementById("message").value;

	// Validate fields
	if (!name || !email || !subject || !message) {
		alert("Please fill out all fields.");
		return;
	}

	emailjs.send("service_m88825v","template_s0ru2jk", {
		name : name,
		email : name,
		subject : subject,
		message : message,
	}).then(function(response) {								// Confirmation message and clear form
		alert("Email Sent!");
		document.getElementById("contactForm").reset();
	}, function(error) {										// Log any errors that occur
		alert("Failed to sent the message. Please try again.");
		console.error("EmailJS Error:", error);
	});
}