import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export function Piechart() {
    const data = [
        { name: 'income(66%)', value: 500 },
        { name: 'income(50%)', value: 100 },
        { name: 'income(11%)', value: 300 },
        { name: 'income(23%)', value: 300 },
    ];
    const COLORS = ['orange', 'green', 'blue','orangered'];
    return (
        <div className="piechart">
            <div>
                <h4>Current Statistic</h4>
                <PieChart width={300} height={400}>
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={83}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>



                </PieChart>
            </div>
            <div>
                <div className="dot1">
                    <p>income(66%)</p>
                </div>
                <div className="dot2">
                    <p>income(50%)</p>
                </div>
                <div className="dot3">
                    <p>income(11%)</p>
                </div>
                <div className="dot4">
                    <p>income(23%)</p>
                </div>
            </div>
        </div>
    );
}

