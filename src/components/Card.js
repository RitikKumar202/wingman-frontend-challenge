import React from 'react';
import { images } from '../utils/ImageUtils';

const Card = ({ icon, title, value, changeType, changePercentage }) => {
    return (
        <div className="bg-white border shadow-sm rounded-[20px] p-6 flex gap-2 flex-col justify-between">
            <div className='flex gap-2 items-center'>
                <img src={icon} alt={title} className='w-3' />
                <h3 className="text-[#667085] text-xs font-semibold">{title}</h3>
            </div>
            <div className="flex gap-2 flex-col justify-between">
                <p className="text-[32px] font-medium text-[#212636]">{value}</p>
                {changeType === 'increase' ? (
                    <div className='flex gap-2 items-center'>
                        <img src={images.TrendUpIcon} alt="Increase" className='w-6' />
                        <p className="text-[#15B79F] font-normal text-sm flex items-center">
                            {changePercentage}%
                            <span className='text-[#667085] pl-1'>increase</span>
                        </p>
                    </div>
                ) : (
                    <div className='flex gap-2 items-center'>
                        <img src={images.TrendDownIcon} alt="Decrease" className='w-6' />
                        <span className="text-[#F04438] font-normal text-sm flex items-center">
                            {changePercentage}%
                            <span className='text-[#667085] pl-1'>decrease</span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;