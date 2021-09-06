import React from 'react';

import './styles/fibonacci.css';
import {Link} from 'react-router-dom'

class Fibonacci extends React.Component{

    constructor() {
        super();
        this.state = { fib: 'NA' };
    }
    
    update(e) {
        this.setState({ fib: this.fib(e.target.value, {}) });
    }
    
    fib(num, cache) {
        if (isNaN(parseInt(num))) {
            return 'NA';
        } else if (num <= 1) {
            return num;
        } else if (cache[num] > 0) {
            return cache[num];
        } else {
            cache[num] = this.fib(num - 1, cache) + this.fib(num - 2, cache);
            return cache[num];
        }
    }
    render () {
        return (
            <div className="fibo__container">
                <div className="back__button">
                    <Link to="/" className="btn btn-dark">
                        Regresar
                    </Link>
                </div>
                <div>
                    <h1 data-text="Fibonacci...">Fibonacci...</h1>

                        <input
                            type="text"
                            onChange={ e => this.update(e) }
                            placeholder="Ingresa tu numero"
                        >
                        </input>
                        <input 
                            type="submit"
                            value="seacrh" 
                        />
                        <div className="fibo__res">
                            <h3>{ this.state.fib }</h3>
                        </div>
                </div>
            </div>
        )
    }
}

export default  Fibonacci 