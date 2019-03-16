import React, {Component} from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault(); //prevents default refresh of the page after form is submitted
    }
    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">

                <h5 className="grey-text-text-darken-3">Login</h5>
                <p>Please enter your email address and password.</p>
                    <p><b>First visit?</b> Why not sign up for an account.</p>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className = "input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>

            </form>
                
            </div>
        )
    }
}

export default SignIn;