import React from 'react';

class Login extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    submitMe = (e) => {
        e.preventDefault()
        this.props.changeView('home')

    }

    render(){
        console.log(this.state.name, this.state.username, this.state.password)
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form onSubmit={this.submitMe} className="vertical-flex">
                <h2>Create an Account</h2>
                <input name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
                <input name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username"/>
                <input name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"/>
                <input name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;