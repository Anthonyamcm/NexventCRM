import React from "react";
import {Line as LineChart, defaults} from 'react-chartjs-2';

defaults.font.family = 'GT Eesti Display'
defaults.font.size = 16




const options = {
    maintainAspectRatio: false,
    elements: {
        line: {
            tension: 0.4
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                drawBorder: false,
                borderDash: [8,4]
            }
        },
        x: {
            grid: {

                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip:{
            displayColors: false
        }

    }
}

class DashBoardDataContentSectionOne extends React.Component{

    render() {
        const chartData = canvas =>  {

            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 225);
            gradient.addColorStop(0, 'rgba(0, 114, 255,1)');
            gradient.addColorStop(1, 'rgba(0, 198, 255,0)');


            return {
                labels: ['Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test'],
                datasets: [
                    {
                        label: 'No. of Swipes',
                        data: [21, 19, 3, 5, 2, 3, 14, 11, 5, 9, 21, 19],
                        fill: 'start',
                        backgroundColor: gradient,
                        borderColor: 'rgba(0, 198, 255, 0.7)',
                        pointRadius: 3
                    },
                ],
            }
        }
        return (
            <div className="tile is-vertical is-9">
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">Engagement</p>
                            <p className="subtitle">2020</p>
                            <div className="content graphContainer">
                                <LineChart data={chartData} options={options} className="mb-N1"/>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoardDataContentSectionOne;