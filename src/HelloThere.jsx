import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import { data } from './components/tinderActions/data';


const HelloThere = () => {

  const { id } = useParams()
  let props = data.filter(el => +el.id === +id)[0]
  console.log("🚀 ~ file: HelloThere.jsx ~ line 11 ~ HelloThere ~ props", props)
  return (
    <>
          <div className="avatar name status">
            <img src={`/img/event/${props.image}`} className="userPic" alt='hui' style={{height:'150px',width:"150px"}}/>
            <div className='avatar min information'>
              <p>{props.title}</p>
              <div>{props.startDate} - {props.endDate} </div>
              <div>~{props.price}</div>
              <div>{props.type}</div>
            </div>
          </div>
          <div className='description'>{props.desc}</div>
          {/* <div className='tags'>{props.activity.map((tag) => <div className='tag'>{tag}</div>)}</div> */}
          <div className='tags'>{props.activity}</div>
          маршрут

          <div>
            <p>Маршрут:</p>
          </div>

          <table border="0">
            <tr>
              <tr>Маршрут:</tr>
              <tr>{props.placeStart} - {props.placeEnd}</tr>
            </tr>
            <tr>
              <tr>Отель:</tr>
              <tr><p href={props.hotel.link}>{props.hotel.title}</p><button >Забронировать</button></tr>
            </tr>
            <tr>
              <tr>Досуг:</tr>
              <tr>
                {props.leisure.map((leis) => <tr><p href={leis.link}>{leis.title}</p><button >Купить</button></tr>)}
                
              </tr>
            </tr>
          </table>


          <div className='organizator and participants block'>
            <div className='organizator block' >
              <img src={`/img/users/${props.organizator.organizatorAva}`} alt='hui' style={{height:'150px',width:"150px", borderRadius: "50%"}}/>
              <p>{props.organizator.organizatorRating}</p>
              <h3>{props.organizator.organizatorName}</h3>
            </div>
            <p>+</p>
            <div>{props.participant.map((newParticipant) => <img src={`/img/users/${newParticipant.participantAva}`} style={{height:'150px',width:"150px", borderRadius: "50%"}} />)} </div>
          </div>
        </>
  );
}

export default HelloThere;
