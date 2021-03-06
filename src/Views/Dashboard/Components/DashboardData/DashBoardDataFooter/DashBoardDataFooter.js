import React from "react";
import { Bar} from "react-chartjs-2";



const options = {
    borderRadius: 6,
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

class DashBoardDataFooter extends React.Component{
    render() {
        const chartData = canvas =>  {

            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 225);
            gradient.addColorStop(0, 'rgba(0, 114, 255,1)');
            gradient.addColorStop(1, 'rgba(0, 198, 255,0.5)');





            return {
                labels: ['Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test', 'Test'],
                datasets: [
                    {
                        label: 'No. of Swipes',
                        data: [21, 19, 3, 5, 2, 3, 14, 11, 5, 9, 21, 19],
                        fill: true,
                        backgroundColor: gradient
                    },
                ],

            }
        }

        return(
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Engagement</p>
                        <p className="subtitle">2020</p>
                        <div className="content graphContainer-Bar">
                            <Bar data={chartData} options={options}/>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default DashBoardDataFooter;