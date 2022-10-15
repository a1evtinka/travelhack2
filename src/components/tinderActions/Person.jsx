import React from 'react';
import Actions from './Actions';

const Person = ({ person, modifySuperficialChoices }) => {
    const { name, desc, age, image } = person;

    return (
        <>
            <div className="person">
                <div className="person-photo">
                    <img src={`/img/users/${image}`} alt={name} style={{height:'507px',width:"390px"}}/>
                </div>

                <div className="person-description" style={{textAlign:'center', padding:'0px'}}>
                    <p className="person-name-age" style={{textAlign:'center'}}>
                        {name}, <span>{age}</span>
                    </p>
                    <p className="person-info" style={{textAlign:'center'}}>{desc}</p>
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
