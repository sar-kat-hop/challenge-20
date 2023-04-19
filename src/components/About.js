import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            {/* <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" /> */}
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">About Me!</h2>
                    <p>my bio</p>
            <div className="card-actions">
                {/* button to link to portfolio page */}
            <button className="btn btn-primary">see my work</button>
            </div>
            </div>
        </div>
    )
}   

export default About;
