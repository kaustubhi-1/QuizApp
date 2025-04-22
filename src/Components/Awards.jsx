import React from 'react'

import Logo1 from '../assets/Images/Logo1.webp';
import Logo2 from '../assets/Images/Logo2.webp';
import Logo3 from '../assets/Images/Logo3.webp';
import Logo5 from '../assets/Images/Logo5.webp';
import Logo6 from '../assets/Images/Logo6.webp';
import Logo7 from '../assets/Images/Logo7.webp';
import Logo8 from '../assets/Images/Logo8 .webp';

const awardImage = [Logo1, Logo2, Logo3, Logo5, Logo6, Logo7,Logo8];

const Awards = () => {
  return (
    <div className=" w-full overflow-wrap">
      <div className='flex justify-around w-[74rem] items-centermax-w-screen-x mx-auto'>
      {awardImage.map((item, index) => (
        <img
          key={index}
          src={item}
          alt={`Logo ${index + 1}`}
          className="w-30 h-30 "
        />
      ))}
      </div>
    </div>
  );
};

export default Awards;
