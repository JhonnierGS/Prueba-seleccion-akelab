import React from 'react';

import './styles/Badges.css';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';


class Badges extends React.Component{
state = {
    data: [
        {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Ren',
            lastName: 'goku',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Pilar Llama',
            twitter: 'RenGokuDemon',
            avatarUrl:
            'https://64.media.tumblr.com/0fb2d85890c158b0f25cd43ede54c54d/7203d54e1b0c611b-63/s540x810/542177e234e434672cc49c34cad34d00e3ee8c67.jpg',
        },
        {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Zet',
            lastName: 'nitsu',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Cazador',
            twitter: 'Zetnitsu666',
            avatarUrl:
            'https://i.pinimg.com/736x/47/e4/c2/47e4c2cb5c2faf164902c4ba52bd5f75.jpg',
        },
        {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Kim',
            lastName: 'etsu',
            email: 'Ron61@hotmail.com',
            jobTitle: 'Pilar Sonido',
            twitter: 'KimetsuSonido',
            avatarUrl:
            'https://i.pinimg.com/originals/d0/e8/b4/d0e8b4a7183818cc80feed04e7662162.png',
        },
    ]
}

    render(){
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
}

export default Badges







