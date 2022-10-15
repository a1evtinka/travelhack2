import React from 'react';
import Dislike from './Dislike';
import Like from './Like';

const Actions = ({ person, modifySuperficialChoices }) => (
    <div id="actions" style={{marginTop:'0px', height:'63.5px',width:'390px', padding:'0px'}}>
        <Dislike
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
        <Like
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
            style={{width:'50px',height:'50px', margin:'0px'}}
        />
    </div>
);

export default Actions;
