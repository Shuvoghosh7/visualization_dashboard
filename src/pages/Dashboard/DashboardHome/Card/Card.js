import React from 'react';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { AiFillRead } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import './Card.css'
import { useQuery } from 'react-query';
const Card = () => {
    const { data: chartData, isLoading, refetch } = useQuery('chartData', () => fetch('http://localhost:5000/data').then(res => res.json()))
    return (
        <div className='grid lg:grid-cols-4 gap-6 md:grid-cols-2'>
            <div className='card-contant'>
                <div className='icon-container'>
                    <MdPersonAddAlt1 className='icon'/>
                </div>
                <div className='card-text'>
                    <p>Total Country</p>
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
                    <p>Total Intensity</p>
                    <p>255</p>
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
                    <p>Total region</p>
                    <p>155</p>
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
                    <p>Total Sector</p>
                    <p>145</p>
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