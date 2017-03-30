var React = require('react');
var ReactDOM = require('react-dom');
var FileInputBox = require('react-file-input-box');

var App = React.createClass({
	render () {
		return (
			<div>
				<FileInputBox />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
