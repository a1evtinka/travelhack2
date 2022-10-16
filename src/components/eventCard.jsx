// import {travelStatuses, usersProfile} from './mok'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EventCard({props}) {
  // const [users, setUsers] = useState(usersProfile)
  const navigate = useNavigate();

  return (
        <>
          <div className="avatar name status">
            <img src={props.image} className="userPic" />
            <div className='avatar min information'>
              <p>{props.title}</p>
              <div>{props.startDate} - {props.endDate} </div>
              <div>~{props.budget}</div>
              <div>{props.type}</div>
            </div>
          </div>
          <div className='description'>{props.desc}</div>
          {/* <div className='tags'>{props.activity.map((tag) => <div className='tag'>{tag}</div>)}</div> */}
          <div className='tags'>{props.activity.map((tag) => <div>{tag}</div>)}</div>


          <table border="0">
            <tr>
              <tr>Маршрут:</tr>
              <tr>{props.placeStart} - {props.placeEnd}</tr>
            </tr>
            <tr>
              <tr>Отель:</tr>
              <tr><p href={props.hotel.link}>{props.hotel.title}</p><button onClick={() => navigate(`${props.hotel.link}`)}>Забронировать</button></tr>
            </tr>
            <tr>
              <tr>Досуг:</tr>
              <tr>
                {props.leisure.map((leis) => <tr><p href={leis.link}>{leis.title}</p><button onClick={() => navigate(`${leis.link}`)}>Купить</button></tr>)}
                
              </tr>
            </tr>
          </table>


          <div className='organizator and participants block'>
            <div className='organizator block' >
              <img src={props.organizator.organizatorAva} />
              <p>{props.organizator.organizatorRating}</p>
              <h3>{props.organizator.organizatorName}</h3>
            </div>
            <p>+</p>
            <div>{props.participant.map((newParticipant) => <img src={newParticipant.participantAva} />)}</div>
          </div>
        </>
  );
}

export default EventCard;
