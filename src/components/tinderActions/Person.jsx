import React from 'react';
import Actions from './Actions';
import './person.css'

const Person = ({ person, modifySuperficialChoices }) => {
    const { name, desc, image } = person;

    return (
        <>
            <div className="person">
                <div className="person-photo">
                    <img src={`/img/users/${image}`} alt={name} style={{height:'450px',width:"390px"}}/>
                </div>

                <div className="person-description" style={{textAlign:'center', padding:'0px'}}>
                    <p className="person-name-age" style={{textAlign:'center'}}>
                        {person.title}
                    </p>
                    <p>{person.startDate} - {person.endDate}</p>
                    <p className="truncate-text" >{desc}</p>
                </div>
            </div>

            <Actions
                person={person}
                modifySuperficialChoices={modifySuperficialChoices}
            />
        </>
    );
};

export default Person;
