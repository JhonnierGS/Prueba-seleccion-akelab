import React, {Component} from 'react';
import { connect } from 'react-redux';

import './styles/BadgesList.css';
import Calification from '../images/icons/Star 3.png'
import Calification2 from '../images/icons/Star 5.png'
import * as usuariosAction from '../action/usuariosAction';
import axios from 'axios';


class BadgesList extends Component{



    componentDidMount(){
        this.props.traerTodos()
    }

    ponerFilas = () => this.props.usuarios.map((usuario) =>(
        <tr key={usuario.id}>
            {usuario ? (<div className="card__container">
                <h6>{usuario.title}({usuario.release_date})</h6>
                <div className="card_content">
                    <div className="card__image">  
                        <img src={usuario.poster_path} alt="Card image cap"/>
                    </div>
                    <div className="card-body card__text">
                        <p className="card-text description">{usuario.overview}</p>
                        <div className="list_card-text">
                            <p><strong>Titulo: </strong> {usuario.original_title}</p>
                            <div className="calification">
                                <p><strong>Calificación:</strong> {usuario.vote_average}</p>
                                <img src={Calification}/>
                                <img src={Calification}/>
                                <img src={Calification}/>
                                <img src={Calification2}/>
                                <img src={Calification2}/>
                            </div>
                            <p><strong>Genero:</strong> {usuario.genre_ids}</p>
                            <p><strong>Fecha de realización:</strong> {usuario.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>) : null}
        </tr>
    ));
    
    render(){
        console.log(this.props)
        return(
            <div className="json__container">
                {this.ponerFilas()}

            </div>
        )
    }

}

const mapStateToProps = (reducers) => {
    return reducers.usuarioReducer;
}

export default connect(mapStateToProps, usuariosAction)(BadgesList)