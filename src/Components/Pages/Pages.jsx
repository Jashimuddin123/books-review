import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Pages = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = JSON.parse(localStorage.getItem('readList')) || [];
        setBooks(storedReadBooks);
    }, []);

    const CustomBar = (props) => {
        const { fill, x, y, width, height } = props;
        return (
            <path
                d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
                stroke="none"
                fill={fill}
            />
        );
    };

    return (
        <div>
            <h2>Here is the chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={books} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomBar />} label={{ position: 'top' }}>
                        {books.map((entry, index) => (
                            <text key={`label-${index}`} x={entry.bookName} y={entry.totalPages} fill="#000" dy={-10}>
                                {entry.totalPages}
                            </text>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Pages;
