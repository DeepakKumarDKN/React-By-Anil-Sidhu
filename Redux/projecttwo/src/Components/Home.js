import React from 'react'
import '../Style/style.css'


export default function Home(){
    return(
       <>
       <h1>Home Component</h1>
       <div className ="Cart-Wrapper">
        <div className="img-wrapper item">
            <div className="text">
                <h4>Know More About DSA's</h4>
                <button>Enroll Now</button>
                <div className = "addtocart">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXww5LTdM3geR3GB1eH2kduzVHVotux6oZ8g&usqp=CAU"/>
                </div>
            </div>
            <div className="image">
                <img src='https://web.learncodeonline.in/_next/image?url=%2FAssets%2Fcard-images%2Fpython.svg&w=256&q=75'/>
            </div>
        </div>
        <div className="img-wrapper item">
            <div className="text">
                <h4>Modern Web Development</h4>
                <button>Enroll Now</button>
                <div className = "addtocart">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXww5LTdM3geR3GB1eH2kduzVHVotux6oZ8g&usqp=CAU"/>
                </div>
            </div>
            <div className="image">
                <img src='https://web.learncodeonline.in/_next/image?url=%2FAssets%2Fcard-images%2Fweb.svg&w=256&q=75'/>
            </div>
        </div>
        <div className="img-wrapper item">
            <div className="text">
                <h4>Pro Backend Developer Course</h4>
                <button>Enroll Now</button>
                <div className = "addtocart">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXww5LTdM3geR3GB1eH2kduzVHVotux6oZ8g&usqp=CAU"/>
                </div>
            </div>
            <div className="image">
                <img src='https://web.learncodeonline.in/_next/image?url=%2FAssets%2Fcard-images%2Fjs.svg&w=256&q=75'/>
            </div>
        </div>
       </div>
       </>

    )
}