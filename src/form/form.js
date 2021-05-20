import React from 'react';
import './form.scss'

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            request: '',
            method: '',
            url: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ ...this.state, request: `${this.state.method}:   ${this.state.url}` });
    }

    handleInput = e => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ ...this.state.request, [name]: value })

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
                            <input onChange={this.handleInput} name='method' type='radio' value='GET' />
                            <span>Get</span>
                        </label>

                        <label>
                            <input onChange={this.handleInput} name='method' type='radio' value='POST' />
                            <span>Post</span>
                        </label>

                        <label>
                            <input onChange={this.handleInput} name='method' type='radio' value='PUT' />
                            <span>Put</span>
                        </label>

                        <label>
                            <input onChange={this.handleInput} name='method' type='radio' value='DELETE' />
                            <span>Delete</span>
                        </label>

                    </form>
                </div>


                <textarea name="" id="" cols="90%" rows="80%">
                    {`${this.state.request}`}
                </textarea>

            </>
        )
    }

}

export default Form