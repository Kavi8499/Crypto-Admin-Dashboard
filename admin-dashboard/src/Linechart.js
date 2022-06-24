import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

export function Linechart() {
    const data = [
        {
            name: 'Week o1',

            Earnings: 205,
        },
        {
            name: 'Week 02',
            Earnings:400,
        },

        {
            name: 'Week 03',

            Earnings: 300,
        },
        {
            name: 'Week 04',
            Earnings: 350,
        },
        {
            name: 'Week 05',
            Earnings: 200,
        },
        {
            name: 'Week 06',
            Earnings:400,
        },
        {
            name: 'Week 07',

            Earnings: 185,
        },
        {
            name: 'Week 08',
            Earnings: 230,
        },
        {
            name: 'Week 09',

            Earnings:175 ,
        },
        {
            name: 'Week 10',
            Earnings:240 ,
        }
    ];
    return (
        <div >
            <h4>Market Overview</h4>
            <h6>Lorem ipsum dolar sit amet consectetur</h6>
            <ResponsiveContainer width="100%" aspect={1.5} >
                <LineChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="1" horizontal="true" vertical="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" strokeWidth={3} dataKey="Earnings" stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
