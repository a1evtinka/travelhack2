import React from 'react';
import LikedPerson from './LikedPerson';

const Lonely = ({ activeUserImage, likedUsers }) => (
    <div id="lonely">
        <p>Больше никто не ищет попутчиков</p>

        <span className="pulse">
      <img src={`/img/users/${activeUserImage}`} alt="You..." />
    </span>

        <div id="liked-people">
            <p>
                {likedUsers.length > 0
                    ? 'Вам понравились'
                    : ''}
            </p>

            {likedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}

        </div>
    </div>
);

export default Lonely;
