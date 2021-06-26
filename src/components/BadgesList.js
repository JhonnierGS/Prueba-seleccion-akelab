import React, {useEffect, useState} from 'react';
import './styles/BadgesList.css';
import Calification from '../images/icons/Star 3.png'
import Calification2 from '../images/icons/Star 5.png'



const BadgesList = () =>{
    
    const [user, setUser] = useState(null);


    useEffect(() => {
        fetch('http://localhost:6969/results')
        .then(res => res.json())
        .then(data =>{
            console.log(data)

            setUser(data)
        })
    }, [])
    
    
    return(
        <div className="json__container">

        {user ? (<div className="card__container">
            <h6>{user[0].title}({user[0].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[0].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[0].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo: </strong> {user[0].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong> {user[0].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong> {user[0].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong> {user[0].release_date}</p>
                    </div>
                </div>
            </div>
        </div>) : null}

        {user ? (<div className="card__container">
            <h6>{user[1].title}({user[1].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[1].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[1].overview}</p>
                        <div className="list_card-text">
                            <p><strong>Titulo:</strong>{user[0].original_title}</p>
                            <div className="calification">
                                <p><strong>Calificación:</strong>{user[1].vote_average}</p>
                                <img src={Calification}/>
                                <img src={Calification}/>
                                <img src={Calification}/>
                                <img src={Calification2}/>
                                <img src={Calification2}/>
                            </div>
                            <p><strong>Genero:</strong>{user[1].genre_ids}</p>
                            <p><strong>Fecha de realización:</strong>{user[1].release_date}</p>
                        </div>
                    
                </div>
            </div>
        </div>) : null}

        {user ? (<div className="card__container">
            <h6>{user[2].title}({user[2].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[2].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[2].overview}</p>
                    <div className="list_card-text">

                        <p><strong>Titulo:</strong>{user[2].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[2].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[2].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[2].release_date}</p>
                    </div>
                    
                </div>
            </div>
        </div>) : null}

        {user ? (<div className="card__container">
            <h6>{user[21].title}({user[21].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[21].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[21].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[21].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[21].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[21].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[21].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[4].title}({user[4].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[4].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[4].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[4].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[4].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[4].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[4].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[5].title}({user[5].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[5].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[5].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[5].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[5].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[5].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[5].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[6].title}({user[6].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[6].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[6].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[6].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[6].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[6].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[6].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[7].title}({user[7].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[7].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[7].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[7].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[7].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[7].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[7].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[9].title}({user[9].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[9].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[9].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[9].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[9].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[9].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[9].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[22].title}({user[22].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[22].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[22].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[22].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[22].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[22].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[22].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[10].title}({user[10].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[10].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[10].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[10].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[10].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[10].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[10].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[11].title}({user[11].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[11].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[11].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[11].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[11].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[11].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[11].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[12].title}({user[12].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[12].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[12].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[12].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[12].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[12].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[12].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[13].title}({user[13].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[13].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[13].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[13].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[13].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[13].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[13].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[14].title}({user[14].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[14].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[14].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[14].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[14].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[14].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[14].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[15].title}({user[15].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[15].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[15].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[15].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[15].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[15].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[15].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[16].title}({user[16].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[16].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[16].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[16].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[16].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[16].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[16].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[17].title}({user[17].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[17].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[17].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[17].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[17].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[17].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[17].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[18].title}({user[18].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[18].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[18].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[18].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[18].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[18].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[18].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        
        {user ? (<div className="card__container">
            <h6>{user[20].title}({user[20].release_date})</h6>
            <div className="card_content">
                <div className="card__image">  
                    <img src={user[20].poster_path} alt="Card image cap"/>
                </div>
                <div className="card-body card__text">
                    <p className="card-text description">{user[20].overview}</p>
                    <div className="list_card-text">
                        <p><strong>Titulo:</strong> {user[20].original_title}</p>
                        <div className="calification">
                            <p><strong>Calificación:</strong>{user[20].vote_average}</p>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification}/>
                            <img src={Calification2}/>
                            <img src={Calification2}/>
                        </div>
                        <p><strong>Genero:</strong>{user[20].genre_ids}</p>
                        <p><strong>Fecha de realización:</strong>{user[20].release_date}</p>
                    
                    </div>
                </div>
            </div>
        </div>) : null}

        </div>
    )
}



export default BadgesList