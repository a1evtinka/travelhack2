import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import { data } from './tinderActions/data';
import "./eventCard.css";
import { useNavigate, Link } from "react-router-dom";
import { Avatar, AvatarGroup, Badge } from "@mui/material";

const HelloThere = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let props1 = data.filter(el => +el.id === +id)[0]
  const [props, setProps] = useState(props1)
  console.log("🚀 ~ file: HelloThere.jsx ~ line 11 ~ HelloThere ~ props", props)

  return (
    <div className="event_main_container">
    <div className="event_info_container">
      <div className="event_avatar">
        <Avatar
          src={`/img/event/${props.image}`}
          alt={props.title}
          sx={{ width: 200, height: 200 }}
        ></Avatar>
      </div>

      <div className="event_description">
        <h2 className="event_title_h2">{props.title}</h2>
        <div className="event_date_text">
          {props.startDate} - {props.endDate}{" "}
        </div>
        <br />
        <div>~{props.price} руб.</div>
        <br />
        <div>{props.type}</div>
        <div className="description">{props.description}</div>
        <br />
        <div className="tags_block">
          {props.activity.map((tag, index) => (
            <div key={index} className="one_tag_item">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>

    <table className="event_info_table">
      <tr>
        <td>Маршрут:</td>
        <td>
          {props.placeStart} - {props.placeEnd}
        </td>
      </tr>
      <tr>
        <td>Отель:</td>
        <td>
          <div>
            <p>{props.hotel.title}</p>
            <br />
            <button
              onClick={() => navigate(`${props.hotel.link}`)}
              className="reservation_button"
            >
              Забронировать
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Досуг:</td>
        <td>
          <div>
            {props.leisure.map((leis, index) => (
              <div key={index}>
                <p>{leis.title}</p>
                <br />
                <button
                  onClick={() => navigate(`${leis.link}`)}
                  className="buy_button"
                >
                  Купить
                </button>
              </div>
            ))}
          </div>
        </td>
      </tr>
    </table>

    <div className="organizator_and_participants_block">
      <div className="organizator_info_container">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          badgeContent={
            <Avatar
              alt="raiting"
              sx={{
                width: 30,
                height: 30,
                fontSize: "12px",
                backgroundColor: "#007470",
              }}
            >
              {props.organizator.organizatorRating}
            </Avatar>
          }
        >
          <Avatar
            src={`/img/users/${props.organizator.organizatorAva}`}
            alt="organizatorAva"
            sx={{ width: 60, height: 60 }}
          />
        </Badge>
        <h3 className="organizator_name">
          {props.organizator.organizatorName}
        </h3>
      </div>

      <div className="plus">+</div>

      <div className="participants_container">
        <AvatarGroup total={props.participant.length}>
          {props.participant.map((newParticipant, index) => (
            <Avatar
              src={`/img/users/${newParticipant.participantAva}`}
              alt={newParticipant.participantName}
              sx={{ width: 60, height: 60 }}
              key={index}
            />
          ))}
        </AvatarGroup>
      </div>
    </div>
                <button
                  onClick={() => setProps(prev => prev = {...prev, participant: [...prev.participant, {participantName: 'Дуайт', participantAva:'5.jpg'}] } )
                  }
                  className="reservation_button"
                >
                  Присоединиться
                </button>
                <div>{' '}</div>
  </div>
);
}

export default HelloThere;