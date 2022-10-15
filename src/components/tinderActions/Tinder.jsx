import React, { useState } from 'react';
import './tinder.css';
import Header from './Header';
import Person from './Person';
import Lonely from './Lonely';
import data from './data.json';

const Tinder = () => {
    const [people, setPeople] = useState(data);
    const [likedUsers, setLikedUsers] = useState([]);
    const [dislikedUsers, setDislikedUsers] = useState([]);
    const activeUser = 0;

    const removedPersonFromDataSrc = (peopleSource, userId) =>
        peopleSource.filter(user => user.id !== userId);

    const modifySuperficialChoices = (userId, action) => {
        const newPeople = [...people];
        const newLikedUsers = [...likedUsers];
        const newDislikedUsers = [...dislikedUsers];

        switch (action) {
            case 'ADD_TO_LIKED_USERS':
                if (!people[activeUser].likedUsers.includes(userId)) {
                    newPeople[activeUser].likedUsers.push(userId);
                    newLikedUsers.push(data[userId]);

                    setLikedUsers(newLikedUsers);
                    setPeople(removedPersonFromDataSrc(people, userId));
                }
                break;
            case 'ADD_TO_DISLIKED_USERS':
                if (!people[activeUser].dislikedUsers.includes(userId)) {
                    newPeople[activeUser].dislikedUsers.push(userId);
                    newDislikedUsers.push(data[userId]);

                    setDislikedUsers(newLikedUsers);
                    setPeople(removedPersonFromDataSrc(people, userId));
                }
                break;
            default:
                return people;
        }
    };

    return (
        <div className="app">
            <Header />
            {people[1] ? (
                <Person
                    key={people[1].id}
                    person={people[1]}
                    modifySuperficialChoices={modifySuperficialChoices}
                    likedUsers={likedUsers}
                />
            ) : (
                <Lonely
                    activeUserImage={people[activeUser].image}
                    likedUsers={likedUsers}
                />
            )}
        </div>
    );
};

export default Tinder;
