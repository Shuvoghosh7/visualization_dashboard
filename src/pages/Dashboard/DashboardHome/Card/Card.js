import React from 'react';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { AiFillRead } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import './Card.css'
const Card = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-6 md:grid-cols-2'>
            <div className='card-contant'>
                <div className='icon-container'>
                    <MdPersonAddAlt1 className='icon'/>
                </div>
                <div className='card-text'>
                    <p>Total Students</p>
                    <p>450</p>
                    <div className='progress'>
                        <div class="progress-bar"></div>
                    </div>
                    <p>45% Increase</p>
                </div>
            </div>
            <div className='card-contant2'>
                <div className='icon-container'>
                    <MdPersonAddAlt1 className='icon'/>
                </div>
                <div className='card-text'>
                    <p>New Students</p>
                    <p>155</p>
                    <div className='progress'>
                        <div class="progress-bar2"></div>
                    </div>
                    <p>40% Increase</p>
                </div>
            </div>
            <div className='card-contant3'>
                <div className='icon-container'>
                    <AiFillRead className='icon'/>
                </div>
                <div className='card-text'>
                    <p>Total Course</p>
                    <p>55</p>
                    <div className='progress'>
                        <div class="progress-bar3"></div>
                    </div>
                    <p>80% Increase</p>
                </div>
            </div>
            <div className='card-contant4'>
                <div className='icon-container'>
                    <BsFillCalendarEventFill className='icon'/>
                </div>
                <div className='card-text'>
                    <p>Events</p>
                    <p>45</p>
                    <div className='progress'>
                        <div class="progress-bar4"></div>
                    </div>
                    <p>30% Increase</p>
                </div>
            </div>
        </div>
    );
};

export default Card;