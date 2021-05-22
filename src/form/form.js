import React from 'react';
import './form.scss'

class Form extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}
	
	handleInput = e => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({ ...this.state.request, [name]: value })

	}

	handleSubmit = e => {
		e.preventDefault();

		if( this.state.url && this.state.method) {
      this.props.apiCall(this.state)
    }
	}

	render() {
		return (

			<>
				<div>
					<form onSubmit={this.handleSubmit}>

						<span> URL: </span>
						<input onChange={this.handleInput} type="text" name="url" />


						<button id='button'>Submit</button>
						<br />

						<label>
							<input onChange={this.handleInput} name='method' type='radio' value='get' />
							<span>Get</span>
						</label>

						<label>
							<input onChange={this.handleInput} name='method' type='radio' value='post' />
							<span>Post</span>
						</label>

						<label>
							<input onChange={this.handleInput} name='method' type='radio' value='put' />
							<span>Put</span>
						</label>

						<label>
							<input onChange={this.handleInput} name='method' type='radio' value='delete' />
							<span>Delete</span>
						</label>

						<textarea name="" id="" placeholder="Type Something">

            </textarea>

					</form>
				</div>

			</>
		)
	}

}

export default Form