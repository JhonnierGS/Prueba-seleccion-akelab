import React, {useEffect} from 'react';

import './styles/Badges.css';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import axios from 'axios';
import {useDispatch} from 'react-redux';


function Badges(){

    const dispatch = useDispatch()

    useEffect(() => {
    const caragarPeliculas = async () => {
        const respuesta = await axios.get('http://localhost:6969/results')
        console.log(respuesta)
        dispatch({
            type: 'traer_usuarios',
            payload: respuesta.data
        })
        
    }
    caragarPeliculas()
    }, [])

        return(
            <div>
                <Navbar />

                {/* <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            
                        </div>
                    </div>
                </div> */}
                <BadgesList />

                {/* <div className="Badge__container">
                    <div className="Badges__buttons">
                    
                    </div>
                
                    <div className="Badge__list">
                        <div className="Badge__conatiner">
                            <BadgesList  badges={this.state.data}/>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        )
}

export default Badges







