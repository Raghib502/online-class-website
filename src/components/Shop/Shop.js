import React, { useState } from 'react';
import fakeData from '../../fakeData/courses';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';

const Shop = () => {
    const showCourse = fakeData.slice(0,12);
    const[courses , setCourses] = useState(showCourse);
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
                
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;