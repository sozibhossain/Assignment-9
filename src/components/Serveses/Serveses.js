import React, { useEffect, useState } from 'react';
import events1 from '../../image/events1.jpg';
import events2 from '../../image/events2.jpg';
import events3 from '../../image/events3.jpg';
import Course from '../Course/Course';
import './Serveses.css'

const Serveses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Course.json')
        .then(res => res.json())
        .then(data =>setCourses(data));
    }, [])
    return (
        <div>
            <div className="serveses-area">
                <h1>SERVESES</h1>
                <p>Home / Serveses</p>
            </div>
            <div>
                <div className="course-title">
                    <h1>Serveses Courses Starting Soon</h1>
                </div>
                <div className="course-cart">
                    {
                        courses.map(course => <Course
                            key={courses.id} 
                            course={course}
                            ></Course>)
                    }
                </div>
            </div>
            
            <div>
                <div className="comming-area">
                    <h1>UPCOMMING EVENTS</h1>
                    <p>FOLLOW US FOR JOIN OUR EVENTS</p>
                </div>
                <div className="d-flex events-area">
                    <div className="col-lg-3">
                        <img src={events1} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src={events2} alt=""/>
                    </div>
                    <div className="col-lg-3">
                        <img src={events3} alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Serveses;