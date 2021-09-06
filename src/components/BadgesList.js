import React, {Component} from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles/Navbar.css'
import './styles/BadgesList.css';
import Calification from '../images/icons/Star 3.png'
import Calification2 from '../images/icons/Star 5.png'
import VectorIcon from '../images/icons/Vector.png';
import generoIcon from '../images/icons/Filter Icon.png';
import ArrowIcon from '../images/icons/Arrow Icon.png';

import { useSelector , useDispatch} from 'react-redux'



function BadgesList({movies, filter, order}) {
    console.log(filter)
    
// buscador................................
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

    const handleChangeSearch = e =>{
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
// buscador..............................    
// returPeliculas................................................
    const ponerFilas = (arreglo) => arreglo.map((usuarios) =>(
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
// returPeliculas.....................................................................
// closedWidows....................
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
// closedWidows....................
// checkbox.........................................................................
    const dispatch = useDispatch()
    const [checkboxTrue, setCheckboxTrue] = useState([])


    const handleCheckbox = event => {
        
        if(checkboxTrue.includes(event.target.value) ){
            const filterCheckboxTrue = checkboxTrue.filter( c => c !== event.target.value )
            setCheckboxTrue(filterCheckboxTrue)
        }else{
            setCheckboxTrue([
                ...checkboxTrue,
                event.target.value
            ])
        }
    }

    const cambiosFiltro = (search, arregloGeneros) =>{
        if(movies.length > 0 && arregloGeneros.length > 0){
            const filterState = movies.filter( (movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
            const filterGenero = filterState.filter((movie) => arregloGeneros.includes(movie.genre_ids[0].toString().toLowerCase()));
            dispatch ({
                payload: filterGenero,
                type: 'upDateFilter'
            })
        }


    }

    const arrayOrdenado = (numero) => {
        console.log("click")
        if(movies.length > 0){
            if(numero === 1){
                    const AntiguasNuevas = movies.sort((a, b) => parseInt(a.release_date.substr(0,4)) - parseInt(b.release_date.substr(0,4)))
                    dispatch({type : "@cargarFiltros" , payload : AntiguasNuevas , movies })
                    console.log(movies)
                }else if(numero === 2){
                    const nuevasAntiguas = movies.sort((a, b) => parseInt(b.release_date.substr(0,4)) - parseInt(a.release_date.substr(0,4)))
                    console.log(movies)
                    dispatch({type : "@cargarFiltros" , payload : nuevasAntiguas , movies })
                }else if(numero === 3){
                    const calification = movies.sort((a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average))
                    dispatch({type : "@cargarFiltros" , payload : calification , movies })
        
                }else if(numero === 4){
                    const calification = movies.sort((a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average))
                    dispatch({type : "@cargarFiltros" , payload : calification , movies })
                }else {
                    return numero
                }
            }
            console.log(numero)
        
    }
    
    useEffect(() => {
        cambiosFiltro(busqueda, checkboxTrue)
        arrayOrdenado()
    }, [checkboxTrue])
// checkbox.........................................................................







        return(

            <div>
                <div className="menu__container">
            <div className="input__search">
                    <input 
                        type="text"
                        placeholder="Buscar por nombre de pelicula"
                        value={busqueda}
                        onChange={handleChangeSearch}
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
                    <li><input onChange={handleCheckbox} type="checkbox" value="acción"/>Acción</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="comedia"/>Comedia</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="romance"/>Romance</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="terror"/>Terror</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="crimen"/>Crimen</li>
                    <li><input onChange={handleCheckbox} type="checkbox" value="fantasìa"/>Todas</li>
                    <a href="javascript:void(0);" onClick={ocultarLista}>Cerrar</a>
                </ul>
            </div>

            <div className="order__list" id="list2">
                <h5>Fecha</h5>
                <ul>
                    <li onClick={() => arrayOrdenado(2)}>Nuevas - Antiguas</li>
                    <li onClick={() => arrayOrdenado(1)}>Antiguas - Nuevas</li>
                </ul>
                <h5>Calificación</h5>
                <ul>
                    <li onClick={()=> arrayOrdenado(3) } >0 - 10 epuntos</li>
                    <li onClick={()=> arrayOrdenado(4) } >10 - 0 puntos</li>
                </ul>
                <a href="javascript:void(0);" onClick={ocultarLista2}>Cerrar</a>
            </div>
                <div className="json__container">
                    {filter.length > 0 ? ponerFilas(filter) : ponerFilas(usuario) }
                
                </div>
            </div>
        )

}

const mapStateToProps = (state) => ({
    movies: state.usuarioReducer.usuarios,
    filter: state.usuarioReducer.filterMovies,
    order: state.usuarioReducer.orderMovies
    
})

export default connect(mapStateToProps, null)(BadgesList)