import React from 'react';
import avt from './avt.jpg';
export default function Header(props) {
    return (
        <div className='flex flex-col items-center py-5 header-css' >
            <img src={avt} style={{width: "200px", height: "200px",objectFit: "cover", borderRadius: "100%"}}  alt="avatar"/>
            <p className='mt-3 text-4xl text-white'>Đỗ Văn An</p>
        </div>
    );
}