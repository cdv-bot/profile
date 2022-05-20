import React from 'react';
import ItemInfo from './ItemInfo';
import fb from './facebook-f-brands.svg'
import phone from './phone-solid.svg'
import zalo from './zalo_icon.svg'
import  email from './envelope-solid.svg'
import  github from './github-brands.svg'
import  messanger from './messanger.svg'
function Main(props) {
    return (
        <div className='mt-3 px-5 py-3 overflow-auto'>
            <ItemInfo  href='https://facebook.openinapp.co/doancdv' name="An mít">
                <img src={fb} alt='fb'/>
            </ItemInfo>
            <ItemInfo href='https://m.me/doan.cdv' name="Messages" >
                <img src={messanger} alt='fb'/>
            </ItemInfo>
            <ItemInfo href='tel:+84382686620' name="Phone" >
                <img src={phone} alt='phone'/>
            </ItemInfo>
            <ItemInfo href='https://zalo.openinapp.co/0382686620' name="Zalo" >
                <img src={zalo} alt='zalo'/>
            </ItemInfo>
            <ItemInfo  href="mailto:doan.cdv@gmail.com" name="Email" >
                <img src={email} alt='email'/>
            </ItemInfo>
            <ItemInfo href='https://github.com/cdv-bot' name="Github">
                <img src={github} alt='github'/>
            </ItemInfo>
        </div>
    );
}

export default Main;