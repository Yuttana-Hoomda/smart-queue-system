'use client'
import Image from 'next/image';
import React from 'react'
import { GrPrevious } from "react-icons/gr";
import Shabu from '../images/shabu.png'
import { useRouter } from 'next/navigation';

function SelectShop() {

    const router = useRouter();

    const backToHome = () => {
        router.push('/')
    }
    const handleClick = () => {
        // แก้pathเอาเด้อ
        router.push('/')
    }

    return (
        <div className='grid justify-center items-center gap-10'>
            <div className='bg-primary flex justify-center items-center w-[300px] rounded-[15px] py-4 relative'>
                <GrPrevious size={28} color='white' className='absolute left-2 cursor-pointer font-bold' onClick={backToHome}/>
                <h1 className='text-white'>เลือกร้านที่ต้องการ</h1>
            </div>
            <div 
                className='grid w-[300px] rounded-[25px] shadow-config cursor-pointer'
                onClick={handleClick}
            >
                <Image
                    src={Shabu}
                    alt=''
                    className='object-cover rounded-t-[25px] h-[165px]'
                />
                <h2 className='py-4 pl-5'>ชาบูเสียบไม้</h2>
            </div>
        </div>
    )
}

export default SelectShop