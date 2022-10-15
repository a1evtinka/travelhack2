import React from 'react';

const Like = ({ userId, modifySuperficialChoices }) => (
    <button
        type="button"
        onClick={() => modifySuperficialChoices(userId, 'ADD_TO_LIKED_USERS')}
        style={{width:'50px', height:'50px'}}
    >
        <img src="img/misc/like.png" alt="Like User" />
    </button>
);

export default Like;
