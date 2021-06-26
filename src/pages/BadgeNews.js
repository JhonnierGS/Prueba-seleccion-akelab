import React from 'react';

import '../pages/styles/BadgeNews.css';
import header from '../images/badge-header.svg';
import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar.js';


class BadgeNew extends React.Component{
    state = {form: {
        firstName: '',
        LastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }};

    handleChange = e => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value, 
            },
        })
    }


    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                fristName={this.state.form.firstName} 
                                lastName={this.state.form.LastName}
                                jobTitle={this.state.form.jobTitle} 
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatar="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew;