import React from 'react';


class BadgeForm extends React.Component{
    // state = {};

    // handleChange = (e) =>{
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     //     })

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handelClick = (e) =>{
        console.log('button was click')
    }

    handelSubmit = e =>{
        e.preventDefault()
        console.log('si funciono')
    }

    render(){
        return(
        <div>
            <h1>New Attendant</h1>

            <form onSubmit={this.handelSubmit}>
                <div className="form-group">
                    <label>First Name </label>
                    <input 
                        placeholder="Ingresa tú nombre"
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}
                    />
                </div>

                <div className="form-group">
                    <label>Last Name </label>
                    <input
                        placeholder="Ingresa tú apellido" 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="LastName"
                        value={this.props.formValues.LastName}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        placeholder="Ingresa tú email"
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}
                    />
                </div>

                <div className="form-group">
                    <label>Job Title</label>
                    <input 
                        placeholder="Ingresa tú posicion de trabajo"
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                    />
                </div>

                <div className="form-group">
                    <label>Twitter</label>
                    <input 
                        placeholder="Ingresa tú twitter"
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}
                    />
                </div>
                <button  onClick={this.handelClick} className="btn btn-primary">Save</button>
            </form>
        </div>
        )
    }
}

export default BadgeForm;