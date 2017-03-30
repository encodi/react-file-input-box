const React = require('react');

class FileInputBox extends React.Component {
	render () {
		return(
			<div className='form-group'>
      	<label htmlFor={this.props.name}>{this.props.label}</label>
      	<input type='file' className='form-control form-control-input' name={this.props.name} onChange={this.props.handleInput} />
    	</div>
		);
	}
};
FileInputBox.propTypes = {
	handleInput: React.PropTypes.func,
	label: React.PropTypes.string,
	name: React.PropTypes.string
};
FileInputBox.defaultProps = {
	handleInput: (e) => {
		let fileTmp = e.target.value.split(/(\\|\/)/g).pop();
		console.log(fileTmp);
	},
	label: '',
	name: 'fileInput'
};

export default FileInputBox;
