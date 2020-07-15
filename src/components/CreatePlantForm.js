import React from 'react';

const API_BASE = 'http://localhost:3001/plants'

class CreatePlantForm extends React.Component {
    state = {
        // TODO: What needs to be represented in state for a fully controlled form?
        Common_Name: '',
        Scientific_Name: '',
        img_name: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitMe = (e) => {
        let {Common_Name, Scientific_Name, img_name} = this.state
      e.preventDefault();

      fetch(API_BASE, {
          method: "POST",
          headers: {
              "content-type": "application/json",
              "accept": "application/json"
          },
          body: JSON.stringify({
              Common_Name: Common_Name,
              Scientific_Name: Scientific_Name,
              img_name: img_name
          })
      })
      .then(res => res.json())
      .then(newPlant => 
        this.props.handleNewPlant(newPlant)

        
        )
        this.setState({
            Common_Name: '',
            Scientific_Name: '',
            img_name: ''
         })
    }

    // TODO: What methods need to be created for a fully controlled form?

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        console.log(this.state.Common_Name, this.state.Scientific_Name, this.state.img_name)
        return (
            <form onSubmit={this.submitMe} className="vertical-flex">
                <h4>Submit a New Plant</h4>
                <input onChange={this.handleChange} value={this.state.Common_Name} name="Common_Name" placeholder="Common Name"/>
                <input onChange={this.handleChange} value={this.state.Scientific_Name} name="Scientific_Name" placeholder="Scientific Name"/>
                <input onChange={this.handleChange} value={this.state.img_name} name="img_name"placeholder="Image"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CreatePlantForm;