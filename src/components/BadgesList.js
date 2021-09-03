import React, {Component} from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles/Navbar.css'
import './styles/BadgesList.css';
import Calification from '../images/icons/Star 3.png'
import Calification2 from '../images/icons/Star 5.png'
import * as usuariosAction from '../action/usuariosAction';
import VectorIcon from '../images/icons/Vector.png';
import generoIcon from '../images/icons/Filter Icon.png';
import ArrowIcon from '../images/icons/Arrow Icon.png';

import { useSelector , useDispatch} from 'react-redux'



function BadgesList({movies}) {

    console.log(movies)
    
    const [usuario, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async () => {
        await axios.get('http://localhost:6969/results')
        .then(response => {
            setUsuarios(response.data);
            setTablaUsuarios(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const handleChange = e =>{
        setBusqueda(e.target.value)
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) =>{
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        setUsuarios(resultadosBusqueda);
    }

    useEffect(() =>{
        peticionGet();
    }, [])
    
    const ponerFilas = () => usuario.map((usuarios) =>(
        <tr key={usuarios.id}>
            {usuarios ? (<div className="card__container">
                <h6>{usuarios.title}({usuarios.release_date})</h6>
                <div className="card_content">
                    <div className="card__image">  
                        <img src={usuarios.poster_path} alt="Card image cap"/>
                    </div>
                    <div className="card-body card__text">
                        <p className="card-text description">{usuarios.overview}</p>
                        <div className="list_card-text">
                            <p><strong>Titulo: </strong> {usuarios.original_title}</p>
                            <div className="calification">
                                <p><strong>Calificación:</strong> {usuarios.vote_average}</p>
                                <img src={Calification}/>
                                <img src={Calification}/>
                                <img src={Calification}/>
                                <img src={Calification2}/>
                                <img src={Calification2}/>
                            </div>
                            <p><strong>Genero:</strong> {usuarios.genre_ids}</p>
                            <p><strong>Fecha de realización:</strong> {usuarios.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>) : null}
        </tr>
    ));
    

    const montrarLista = () => {
        document.getElementById('list1').style.display="block";
    }
    const ocultarLista = () =>{
        document.getElementById('list1').style.display="none";
    }
    const mostrarLista2 = () =>{
        document.getElementById('list2').style.display="block"
    }
    const ocultarLista2 = () => {
        document.getElementById('list2').style.display="none";
    }

    const handleCheckbox = event => {
        console.log(usuario)
        console.log(event.target.value)
    }

        return(

            <div>
                <div className="menu__container">
            <div className="input__search">
                    <input 
                        type="text"
                        placeholder="Buscar por nombre de pelicula"
                        value={busqueda}
                        onChange={handleChange}
                    />
                    <img src={VectorIcon} alt='icono busqueda'/>
                </div>
                <div className="filter__menu" onClick={montrarLista}>
                    <img  src={generoIcon} alt="icono genero" />
                </div>
                <div className="menu__order" onClick={mostrarLista2}>
                    <p>Ordenar</p>
                    <img src={ArrowIcon} alt="icono flecha"/>
                </div>
            </div>

            <div className="checkbox__list" id="list1">
                <h5>Genero</h5>
                <ul>
                    <li><input onChange={handleCheckbox} type="checkbox" value="aventura"/>Aventura</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="accion"/>Acción</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="fantasia"/>Fantasia</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="comedia"/>Comedia</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="romance"/>Romance</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="suspenso"/>Suspenso</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="crimen"/>Crimen</li>
                    <a href="javascript:void(0);" onClick={ocultarLista}>Cerrar</a>
                </ul>
            </div>

            <div className="order__list" id="list2">
                <h5>Fecha</h5>
                <ul>
                    <li>Nuevas - Antiguas</li>
                    <li>Antiguas - Nuevas</li>
                </ul>
                <h5>Calificación</h5>
                <ul>
                    <li>0 - 10 epuntos</li>
                    <li>10 - 0 puntos</li>
                </ul>
                <a href="javascript:void(0);" onClick={ocultarLista2}>Cerrar</a>
            </div>
                <div className="json__container">
                    {ponerFilas()}
                </div>
            </div>
        )

}

const mapStateToProps = (reducers) => ({
    movies: reducers.usuarios
    
})

export default connect(mapStateToProps, usuariosAction)(BadgesList)