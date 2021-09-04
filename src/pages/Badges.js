import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import './styles/Badges.css';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';


function Badges(){

    

    const dispatch = useDispatch()

    useEffect(() => {
    const caragarPeliculas = async () => {
        const respuesta = await axios.get('http://localhost:6969/results')
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
                <BadgesList />
            </div>
        )
}

export default Badges







