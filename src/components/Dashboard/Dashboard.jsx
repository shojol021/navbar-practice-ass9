import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


const Dashboard = () => {

    const students = [
        {
            "id": "s001",
            "name": "John",
            "physics": 85,
            "chemistry": 70,
            "math": 90
        },
        {
            "id": "s002",
            "name": "Emily",
            "physics": 75,
            "chemistry": 80,
            "math": 65
        },
        {
            "id": "s003",
            "name": "David",
            "physics": 90,
            "chemistry": 85,
            "math": 80
        },
        {
            "id": "s004",
            "name": "Sarah",
            "physics": 70,
            "chemistry": 75,
            "math": 85
        },
        {
            "id": "s005",
            "name": "Michael",
            "physics": 80,
            "chemistry": 65,
            "math": 75
        },
        {
            "id": "s006",
            "name": "Ava",
            "physics": 90,
            "chemistry": 75,
            "math": 80
        },
        {
            "id": "s007",
            "name": "Jacob",
            "physics": 75,
            "chemistry": 85,
            "math": 90
        },
        {
            "id": "s008",
            "name": "Olivia",
            "physics": 80,
            "chemistry": 90,
            "math": 75
        },
        {
            "id": "s009",
            "name": "Emma",
            "physics": 85,
            "chemistry": 70,
            "math": 80
        },
        {
            "id": "s010",
            "name": "William",
            "physics": 75,
            "chemistry": 80,
            "math": 90
        }
    ]

    return (
        <div>
            <LineChart
            width= {1000}
            height= {300}
            data= {students}
            >
                <Line dataKey="physics"></Line>
                <Line stroke='#ff66aa' dataKey="chemistry"></Line>
                <YAxis dataKey="physics"></YAxis>
                <XAxis dataKey="id"></XAxis>
                
            </LineChart>


        </div>
    );
};

export default Dashboard;