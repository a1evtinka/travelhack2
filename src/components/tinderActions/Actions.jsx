import React from 'react';
import Dislike from './Dislike';
import Like from './Like';

const Actions = ({ person, modifySuperficialChoices }) => (
    <div id="actions">
        <Dislike
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
        <Like
            userId={person.id}
            modifySuperficialChoices={modifySuperficialChoices}
        />
    </div>
);

export default Actions;
