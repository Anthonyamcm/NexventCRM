import React from "react";
import { Doughnut} from "react-chartjs-2";

const options = {
    cutout:80,
    borderRadius: 5,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip:{
            displayColors: false
        }

    },
    elements: {
        arc: {
            borderWidth: 0
        }
    }
};



class DashBoardDataContentSectionTwo extends React.Component{
    render() {
        const chartData = canvas =>  {

            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 225);
            gradient.addColorStop(0, 'rgba(0, 114, 255,0.8)');
            gradient.addColorStop(1, 'rgba(0, 198, 255,0.8)');

            const gradient2 = ctx.createLinearGradient(0, 0, 0, 225);
            gradient2.addColorStop(1, 'rgba(168, 224, 99,0.8)');
            gradient2.addColorStop(0, 'rgba(86, 171, 47,0.8)');




            return {
                labels: ['Left Swipes (%)', 'Right Swipes (%)'],
                datasets: [
                    {
                        label: 'No. of Swipes',
                        data: [30, 19],
                        fill: true,
                        backgroundColor: [gradient2, gradient],
                        hoverBackgroundColor: ['rgba(168, 224, 99,1)', 'rgba(0, 198, 255,1)'],
                        pointRadius: 3
                    },
                ],
            }
        }
        return (
            <div className="tile is-parent">
                <article className="tile is-child box">
                    <p className="title">Seven</p>
                    <p className="subtitle">Subtitle</p>
                    <div className="content graphContainer-doughnut pl-5">
                        <Doughnut data={chartData} options={options} />
                    </div>
                </article>
            </div>
        )
    }
}

export default DashBoardDataContentSectionTwo;