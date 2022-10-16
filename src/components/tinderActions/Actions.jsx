import React from 'react';
import Dislike from './Dislike';
import Like from './Like';
import { Link } from "react-router-dom";

const Actions = ({ person, modifySuperficialChoices }) => (
    <div id="actions" style={{marginBottom:'80px', height:'63px',width:'390px', padding:'0'}}>
        <Dislike
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
        <Like
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />

        <Link to={`/event/${person.id}`}>
                <button
                    type="button"
                    style={{width:'50px', height:'50px'}}
                >
                        <Link to={`/event/${person.id}`}></Link>
                        <img src="img/misc/img_9.png" alt="Like User" />
                </button>
        </Link>
    </div>
);

export default Actions;
