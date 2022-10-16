import React from 'react';
import LikedPerson from './LikedPerson';

const Lonely = ({ activeUserImage, likedUsers }) => (
    <div id="lonely">
        <p>Поездки, удовлетворяющих условиям поиска пока нет</p>

        <span className="pulse">
      <img src={`/img/misc/${activeUserImage}`} alt="You..." />
    </span>

        <p>
            {likedUsers.length > 0
                ? 'Вам понравились'
                : ''}
        </p>
        <div id="liked-people"  style={{display:"flex", justifyContent:"center", alignItems:'center', flexWrap:'wrap'}}>

            {likedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}

        </div>
    </div>
);

export default Lonely;
