import React from 'react';
import './styles/Navbar.css';
import generoIcon from '../images/icons/Filter Icon.png';
import ArrowIcon from '../images/icons/Arrow Icon.png';
import VectorIcon from '../images/icons/Vector.png';
import logo from '../images/logoDemon.png';
import {Link} from 'react-router-dom';



class Navbar extends React.Component{
    
    montrarLista(){
        document.getElementById('list1').style.display="block";
    }

    ocultarLista(){
        document.getElementById('list1').style.display="none";
    }

    
    mostrarLista2(){
        document.getElementById('list2').style.display="block"
    }

    ocultarLista2(){
        document.getElementById('list2').style.display="none";
    }


    render(){
        return(
        <div>
            <div className="Navbar">
                <div>
                    <h1>Peliculas</h1>
                </div>
                <div className="rute__buttons">
                    <Link to="/badges/akelab" className="btn btn-dark">
                        Akelab
                    </Link>
                    <Link to="/badges/fibo" className="btn btn-dark">
                        fibonacci
                    </Link>
                </div>
            </div>

            <div className="menu__container">
                <div className="input__search">
                    <input 
                        type="text"
                        placeholder="Buscar pelicula"
                    />
                    <img src={VectorIcon} alt='icono busqueda'/>
                </div>
                <div className="filter__menu" onClick={this.montrarLista}>
                    <img  src={generoIcon} alt="icono genero" />
                </div>
                <div className="menu__order" onClick={this.mostrarLista2}>
                    <p>Ordenar</p>
                    <img src={ArrowIcon} alt="icono flecha"/>
                </div>
            </div>

            <div className="checkbox__list" id="list1">
                <h5>Genero</h5>
                <ul>
                    <li><input type="checkbox"/>Genero</li>
                    <li><input type="checkbox"/>Aventura</li>
                    <li><input type="checkbox"/>Acción</li>
                    <li><input type="checkbox"/>Fantasia</li>
                    <li><input type="checkbox"/>Comedia</li>
                    <li><input type="checkbox"/>Romance</li>
                    <li><input type="checkbox"/>Suspenso</li>
                    <li><input type="checkbox"/>Crimen</li>
                    <a href="javascript:void(0);" onClick={this.ocultarLista}>Cerrar</a>
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
                <a href="javascript:void(0);" onClick={this.ocultarLista2}>Cerrar</a>
            </div>
        </div>
        ) 
    }
}
export default Navbar;