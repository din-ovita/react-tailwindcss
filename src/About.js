import React from 'react'
import { Link } from 'react-router-dom'
import Hijab from './Img/hijab.png'

function About() {
  return (
    <div>
        <img src="https://i.pinimg.com/originals/89/45/f3/8945f3564b6a2b8a2eb559373f48bf6c.jpg" className='relative w-full h-screen opacity-85' />
        <div className='absolute bottom-[25%] left-[8%] text-white'>
            <small className='text-[40px] font-semibold'>I'm</small>
            <h3 className='text-[85px] font-semibold'>DINDA NOVITA</h3>
            <p className='text-[25px] font-semibold leading-[1.75rem]'>I am a student at Binusa Vocational High School. <br /> I majored in Computer and Network Engineering. <br />Apart from that, I also took part in an industrial class, Bootcamp class.<br /> In this class I learned programming</p>
            <div className='inline-block mt-7'>
                    <Link to={"/cv"} className='border-2 border-white p-2.5 font-semibold'>Come See My Cv</Link>
                    <Link className='border-2 border-white p-2.5 font-semibold ml-9'> My Portofolio</Link>
                    <span className='ml-5 text-[16px] font-medium'>You Can Explore About More About Personal Life And My Portofolio Here</span>
            </div>
        </div>
        <div className='absolute top-24 right-28'>
            <div className='relative w-72 h-72 bg-slate-200 rounded-full'>
            <img src={Hijab} className='absolute w-72 h-72 rounded-full'/>
            </div>
        </div>
    </div>
    )
}

export default About