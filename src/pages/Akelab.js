import React from 'react';

import './styles/Akelab.css'
import {Link} from 'react-router-dom'

function akebal(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "AKELAB";
    } else if (number % 3 === 0) {
        return "AKE";
    } else if (number % 5 === 0) {
        return "LAB";
    }
    return number;
}


class Akelab extends React.Component{

    constructor() {
        super();
        this.state = {
            number: 1,
        };
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        this.setState({ number: this.state.number + 1 });
    }
    
    render() {
        return (
            <div className="ake__container">
                <div className="back__button">
                    <Link to="/badges" className="btn btn-dark">
                        Regresar
                    </Link>
                </div>
                <div>
                    <h1 data-text="Akelab">Akelab</h1>
                    <p>Number: {this.state.number}</p>
                    <h3>{akebal(this.state.number)}</h3>
                    <div className="ake__button">
                        <a 
                            onClick={this.onClick}>
                            <span></span> 
                            <span></span> 
                            <span></span> 
                            <span></span> 
                            Next
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Akelab;