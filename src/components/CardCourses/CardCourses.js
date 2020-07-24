import React from 'react';
import Avatar from '../Avatar/Avatar';

const cardCourses = ({url, title, desc, link}) => {
    return(
        <div className="cardCourses">
            <iframe 
                title={title}
                width="360" 
                height="215" 
                src={link}
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div class="contentCourses">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <Avatar image={url}/>
        </div>
    );
}

export default cardCourses;