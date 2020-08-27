import React from 'react';

const Courses = (props) => {
    const {image , name, price} = props.course;
    return (
        <div>
            
           <div class="card w-100">
           <div>
                <img class="img-fluid img-thumbnail" src={image} alt=""/>
           </div>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-text">Price:$ {price}</h6>
                    <button class="btn btn-primary" onClick={() => props.addCourse(props.course)}>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
