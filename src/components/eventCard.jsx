// import {travelStatuses, usersProfile} from './mok'
import React, { useState } from 'react'

function UserPrevCard({props}) {
  // const [users, setUsers] = useState(usersProfile)


  return (
        <>
          <div className="avatar name status">
            <img src={props.image} className="userPic" />
            <div className='avatar min information'>
              <p>{props.name}</p>
              <div>{props.startDate} - {props.endDate} </div>
              <div>~{props.budget}</div>
              <div>{props.type}</div>
            </div>
          </div>
          <div className='description'>{props.desc}</div>
          <div className='tags'>{props.tags.map((tag) => <div className='tag'>{tag}</div>)}</div>
          <div>
            <div>
              <img src={props.organizator.organizatorAva} />
              <p>{props.organizator.organizatorRating}</p>
              <h3>{props.organizator.organizatorName}</h3>
            </div>
            <p>+</p>
            
          </div>
        </>
  );
}

export default UserPrevCard;
