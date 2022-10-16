import React from 'react';
import Actions from './Actions';
import './person.css'

const Person = ({ person, modifySuperficialChoices }) => {

console.log(person.type)
    return (
        <>
            <div className="person" style={{width:"390px"}}>
                <div className="person-photo">
                    <img src={`/img/event/${person.image}`} alt={person.title} style={{height:'450px',width:"390px"}}/>
                </div>

                <div className="person-description" style={{ padding:'0px'}}>
                    <p className="title-event" style={{textAlign:'center', margin: "5px"}}>
                        {person.title}
                    </p>
                    <p className='title'>Даты поездки: {person.startDate} - {person.endDate}</p>
                    <p className='title'>Бюджет: ~{person.price} руб.</p>
                    <p className='title'>Вид отдыха: {person.type}</p>
                    <p className="truncate-text" >{person.desc}</p>
                    <div className='tag-line'>{person.activity.map((tag) => <div className='lable  tag-text'>#{tag}</div>)}</div>
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
