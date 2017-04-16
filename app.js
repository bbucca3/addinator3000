const add = require('./adder.js');

class ViewManager {

	connectEventHandlers() {
		// wire up event handler for form submit
		document.getElementById('form-numbers')
			.addEventListener(
				'submit',
				this.onSubmit);
	}

	onSubmit(event){
		// block form from submitting
		event.preventDefault();
		// (which would refresh page)

		// grab number values as strings
		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;

		// cast strings to ints

		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		// add numbers

		const sum = add(num1, num2);

		// output
		alert(sum);
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();