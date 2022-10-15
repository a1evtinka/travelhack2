import React from 'react';

const Like = ({ userId, modifySuperficialChoices }) => (
    <button
        type="button"
        onClick={() => modifySuperficialChoices(userId, 'ADD_TO_LIKED_USERS')}
    >
        <img src="img/misc/like.png" alt="Like User" />
    </button>
);

export default Like;
