import React from 'react';
import Avatar from '../Avatar/Avatar';

const infoStudent = ({nama, status, bio, url}) => {
    return(
        <div className="cardStudent">
            <Avatar image={url}/>
            <div className="content">
                <h1>{nama}</h1>
                <div className="status">
                    <p>{status}</p>
                </div>
                <p><i>{bio}</i></p>
            </div>
        </div>
    );
}

export default infoStudent;