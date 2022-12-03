import React from 'react'
import hijab from './Img/hijab.png'

function CV() {
  return (
    <div>
        <img src="https://i.pinimg.com/originals/89/45/f3/8945f3564b6a2b8a2eb559373f48bf6c.jpg" className='relative w-full h-screen opacity-85' />
        <div className='absolute inset-y-0 left-0 w-96 bg-gray-600'>
            <img src={hijab} className='w-80 h-80 bg-slate-200 ml-32 mt-9'/>
            <div className='text-white '>
                <h3 className='font-semibold text-3xl text-center mt-9'>Educational Background</h3>
                <ul className='ml-10 mt-5 list-disc'>
                    <li>MI PLUS MA'ARIF NU JATINEGARA</li>
                    <li>SMP NEGERI 1 SEMPOR</li>
                    <li>SMK BINA NUSANTARA SEMARANG <br />Computer and Network Engineering <br /> Programming</li>
                    <li>UNIVERSITAS INDONESIA <br /> Informatika</li>
                </ul>
            </div>
        </div>
        <div className='absolute top-7 right-[18%] text-white'>
            <h3 className='font-semibold text-[64px]'>Curriculum Vitae</h3>
            <ul className='mt-9 font-semibold text-[20px]'>
                <li>Name : Dinda Novita Puteri Utami</li>
                <li>Age : 16th</li>
                <li>Place and Date of Birth : Kebumen, 32 Desember 2022</li>
                <li>Address : Sempor, Kebumen, Jawa Tengah</li>
                <li>No. Hp : 087898127823</li>
            </ul>
        </div>
        <div className='absolute bottom-[15%] left-[40%] text-white inline-grid grid-cols-2 gap-72'>
        <div>
            <h3 className='font-semibold text-3xl text-center'>My Skill</h3>
            <ul className='mt-5 list-disc text-lg'>
                <li>Social Communication</li>
                <li>Public Speaking</li>
                <li>Programming</li>
                <li>Web Design</li>
            </ul>
        </div>
        <div className='text-white'>
            <h3 className='font-semibold text-3xl text-center'>My Hobby</h3>
            <ul className='mt-5 list-disc text-lg'>
                <li>Reading Book</li>
                <li>Create APK</li>
                <li>Programming</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default CV