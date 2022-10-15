import React from 'react';

const LikedPerson = ({ person }) => (
    <div className="liked-person">
        <div className="liked-person-image">
            <img
                src={`/img/users/${person.image}`}
                alt={`You liked ${person.name}`}
            />
        </div>
    </div>
);

export default LikedPerson;
