import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    function getCourses() {
      // console.log(courses,"coursess",Object.values(courses))
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => { // to get all the values, excluding the keys
              // console.log(array,"arayyyy")
                array.forEach(courseData => {
                  // console.log(courseData,"Course data")
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //specific category courses are returned
            return courses[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
