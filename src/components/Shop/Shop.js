import React, { useState } from 'react';
import fakeData from '../../fakeData/courses';
import Courses from '../Courses/Courses';

const Shop = () => {
    const f12 = fakeData.slice(0,12);
    const[courses , setCourses] = useState(f12);
    const[cart, setCart] = useState([]);

    const addCourse = (course) => {
        const newCart = [...cart , course];
            setCart(newCart);
    }

    return (
        <div className="row">
            <div className="course-section col-sm-8">
                <ul>
                    {
                        courses.map(course => <Courses course={course}
                        addCourse = {addCourse}></Courses>)
                    }
                </ul>
            </div>
            <div className="cart-section col-sm-4" >

                <h4>Summary : {cart.length}</h4>
            </div>
            
        </div>
    );
};

export default Shop;