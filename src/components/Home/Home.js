import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import banner from '../../image/banner.jpg';
import './Home.css'
import { Button } from 'react-bootstrap';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Courses.json')
        .then(res => res.json())
        .then(data =>setCourses(data));
    }, [])
    return (
        <div>
            <div className="d-flex banner-area">
                <div className="col-lg-6 banner-pic">
                    <img src={banner} alt="" />
                </div>
                <div className="col-lg-6">
                    <h1>Education Center <br/> and distance education</h1>
                    <br/>
                    <p>Online education the world in dstance education with high <br/> quality online degrees and online courses</p>
                    <br/>
                    <Button>Start Learning Now</Button>
                </div>
            </div>
            <div>
                <div className="course-title">
                    <h1>Courses Starting Soon</h1>
                </div>
                <div className="course-cart">
                    {
                        courses.map(course => <Courses
                            key={courses.id} 
                            course={course}
                            ></Courses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;