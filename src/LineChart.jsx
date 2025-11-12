import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    series: [
      {
        name: 'FSD Progress',
        data: [65, 72, 78, 85, 88, 92, 95]
      },
      {
        name: 'Flutter Progress',
        data: [55, 62, 68, 75, 82, 87, 90]
      },
      {
        name: 'Data Specialist Progress',
        data: [45, 52, 58, 65, 72, 78, 83]
      }
    ],
    chart: {
      type: 'line',
      height: 300,
      background: 'transparent',
      toolbar: {
        show: true
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors: ['#3b82f6', '#10b981', '#f59e0b'],
    xaxis: {
      categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Progress (%)',
        style: {
          color: '#94a3b8',
          fontSize: '14px'
        }
      },
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "% progress"
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center'
    },
    grid: {
      borderColor: '#334155',
      strokeDashArray: 4
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Learning Progress Trend</h3>
        <p>Monthly progress tracking</p>
      </div>
      <Chart 
        options={options} 
        series={options.series} 
        type="line" 
        height={300}
        className="line-chart"
      />
    </div>
  );
};

export default LineChart;
