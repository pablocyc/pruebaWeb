var page = require('page');

page('/on', on);

function on {
	document.querySelector('p')
		.textContent = 'on'
}

page();