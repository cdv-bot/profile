import React from 'react';

function ItemInfo({children,href,name}) {
    return (
        <a href={href} className='text-lg text-blue-500 flex items-center justify-between p-3 px-8 rounded-full mt-3' target="blank" style={{border: "1px solid #5e6bc1"}} rel="noreferrer">
            {name}
            {children}
        </a>
    );
}

export default ItemInfo;