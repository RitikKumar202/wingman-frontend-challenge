import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { images } from '../utils/ImageUtils';

const weeklyData = [
    { day: 'Mon', incoming: 33, answered: 28, experts: 7 },
    { day: 'Tue', incoming: 32, answered: 27, experts: 7 },
    { day: 'Wed', incoming: 38, answered: 32, experts: 9 },
    { day: 'Thu', incoming: 45, answered: 40, experts: 18 },
    { day: 'Fri', incoming: 43, answered: 34, experts: 8 },
    { day: 'Sat', incoming: 48, answered: 35, experts: 10 },
    { day: 'Sun', incoming: 52, answered: 37, experts: 10 },
];

const comparisonData = [
    { period: 'This week', consultations: 20, orders: 15 },
    { period: 'Last week', consultations: 15, orders: 10 },
];

function Insights() {
    return (
        <div className="p-4">
            <h1 className='text-xl md:text-3xl pb-6 px-2'>Insights</h1>
            <div className="flex flex-wrap gap-6">

                {/* Consultations Chart */}
                <div className="w-full md:w-[510px] h-[455px] col-span-1 lg:col-span-7 bg-white py-6 rounded-3xl border drop-shadow-sm px-2">
                    <div className="flex items-center gap-2 mb-6 px-6">
                        <img src={images.ChatTearDropIcon} alt="chat" />
                        <p className="text-xs text-gray-500 uppercase tracking-wider">CONSULTATIONS</p>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                data={weeklyData}
                                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#F1F5F9"
                                />
                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    dy={10}
                                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    dx={-10}
                                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                                    ticks={[10, 20, 30, 40, 50, 60]}
                                    domain={[0, 60]}
                                    yAxisId="left"
                                    label={{ value: 'CONSULTATIONS', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#94A3B8', fontSize: 8, opacity: 0.7 } }}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    axisLine={false}
                                    tickLine={false}
                                    dx={10}
                                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                                    domain={[0, 20]}
                                    tickFormatter={() => '10'}
                                    label={{ value: 'EXPERTS ONLINE', angle: -90, position: 'insideRight', style: { textAnchor: 'middle', fill: '#94A3B8', fontSize: 8, opacity: 0.7 } }}
                                />
                                <Bar
                                    dataKey="experts"
                                    fill="#FEF9C3"
                                    yAxisId="right"
                                    barSize={30}
                                    radius={[4, 4, 0, 0]}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="incoming"
                                    stroke="#94A3B8"
                                    strokeWidth={2}
                                    dot={false}
                                    strokeDasharray="5 5"
                                    yAxisId="left"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="answered"
                                    stroke="#15B79E"
                                    strokeWidth={2}
                                    dot={false}
                                    yAxisId="left"
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 md:gap-6 mt-2 md:mt-4 border-t-[1px] mx-6 pt-3 md:pt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 md:w-4 h-1 rounded-sm bg-[#94A3B8]"></div>
                            <span className="text-[10px] text-gray-600">Incoming</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-1 rounded-sm bg-[#15B79E]"></div>
                            <span className="text-[10px] text-gray-600">Answered</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-1 rounded-sm bg-[#FEF9C3] "></div>
                            <span className="text-[10px] text-gray-600">Experts online</span>
                        </div>
                    </div>
                </div>

                {/* VS Past Period */}
                <div className="w-full md:w-[300px] h-[455px] col-span-1 lg:col-span-3 bg-white py-8 rounded-3xl border drop-shadow-sm">
                    <div className="flex items-center gap-2 mb-6 px-6">
                        <img src={images.ChartBarIcon} alt="Bar Chart" />
                        <p className="text-xs text-gray-500 uppercase tracking-wider">VS PAST PERIOD</p>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={comparisonData} margin={{ top: 5, right: 30, left: 0, bottom: 25 }}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#F1F5F9"
                                    horizontalPoints={comparisonData.map((_, index) => index)}
                                />
                                <XAxis
                                    dataKey="period"
                                    axisLine={false}
                                    tickLine={false}
                                    interval={0}
                                    tick={{ fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                <Bar dataKey="consultations" fill="#CCFBEF" barSize={30} radius={[5, 5, 0, 0]} />
                                <Bar dataKey="orders" fill="#115E59" barSize={30} radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 md:gap-6 mt-1 md:mt-2 border-t-[1px] mx-6 pt-3 md:pt-6">
                        <div className="flex items-center gap-[6px]">
                            <div className="w-4 h-1 rounded-sm bg-[#CCFBEF]"></div>
                            <span className="text-[10px] text-gray-600">Consultations</span>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <div className="w-4 h-1 rounded-sm bg-[#115E59] "></div>
                            <span className="text-[10px] text-gray-600">Orders closed</span>
                        </div>
                    </div>
                </div>

                {/* FORECASTS */}
                <div className="w-full md:w-[280px] h-[455px] bg-gradient-to-b from-[#15B79F] to-[#0E9382] text-white p-6 rounded-3xl shadow-sm">
                    <div className="flex items-center space-x-2 mb-6">
                        <img src={images.ChatsIcon} alt="chat" />
                        <span className="uppercase text-xs tracking-wide font-semibold opacity-80">
                            Forecasts
                        </span>
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center space-x-5">
                            <h2 className="text-[56px] font-medium">+15%</h2>
                            <img
                                src={images.TrendUpLightIcon}
                                alt="Increase"
                                className="w-8"
                            />
                        </div>
                        <p className="text-sm font-normal text-[#fff]">
                            forecasted increase in your sales closed by the end of the current
                            month
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-5">
                            <h2 className="text-[56px] font-medium">+20%</h2>
                            <img
                                src={images.TrendUpLightIcon}
                                alt="Increase"
                                className="w-8"
                            />
                        </div>
                        <p className="text-sm font-normal text-[#fff]">
                            forecasted increase in consultations by the end of the current month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;