import React from 'react';
import Card from './Card';
import { images } from '../utils/ImageUtils';

const OrderStats = () => {
    const cardData = [
        { title: 'CONSULTATIONS', icon: images.ChatTearDropIcon, value: '24', changeType: 'increase', changePercentage: '15' },
        { title: 'ORDERS PLACED', icon: images.TagIcon, value: '12', changeType: 'decrease', changePercentage: '15' },
        { title: 'CONVERSION', icon: images.CheckIcon, value: '50%', changeType: 'decrease', changePercentage: '15' },
        { title: 'TOTAL SALES VALUE', icon: images.CoinsIcon, value: '$2,400', changeType: 'increase', changePercentage: '15' },
        { title: 'AVG ORDER VALUE', icon: images.CoinIcon, value: '$240', changeType: 'increase', changePercentage: '15' },
        { title: 'COMMISSION PAID', icon: images.PiggyBankIcon, value: '$240', changeType: 'increase', changePercentage: '15' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-[#fff]">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    changeType={card.changeType}
                    changePercentage={card.changePercentage}
                />
            ))}
        </div>
    );
};

export default OrderStats;