var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div className="home-desc">
					<h1> No computer? No calculator? No brain? No worries!</h1>
					<h2> Square Head is here to help you do basic multiplication in the pursuit of the stunning realization you live in a cell-sized shithole!</h2>
					<p> To get started enter the required values below and then hit submit! Crying is optional.</p>
				</div>
				<div className="calc">
					<form onSubmit={this.calc}>
					<span>Length</span><input type="text" id="length"></input>
					<span>Width</span><input type="text" id="width"></input>
					<div>
						<button id="butt" onClick={this.calc}>Submit</button>
					</div>
					</form>
				</div>
				<div id="square"></div>
			</div>
			);
	},
	calc: function(e) {
		var convert = function(a) {
			a*0.09290304
		}
		console.log('im running!');
		e.preventDefault();
		var length = document.getElementById('length').value;
		var width = document.getElementById('width').value;
		var square = document.getElementById('square');

		if((!isNaN(length))&&(!isNaN(width))) {
			var meters = null;
			var answer = +length*+width;
			meters = convert(answer);
			square.innerHTML = 'The area of your room is '+answer+' square feet and '+meters+' square meters.';
		} else {
			window.alert('Please enter numeric values');
		}

	}
});