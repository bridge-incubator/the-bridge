// Turns <a data-email="user|domain"> into a working mailto link after the page loads,
// so the address is never in the HTML that scrapers read.
for (const link of document.querySelectorAll('[data-email]')) {
	const address = link.dataset.email.replace('|', '@');
	const subject = link.dataset.subject;
	link.href = `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
	const label = link.parentElement.querySelector('.email-address');
	if (label) label.textContent = address;
}
