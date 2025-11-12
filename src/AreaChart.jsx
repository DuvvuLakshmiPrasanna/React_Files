import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    series: [
      {
        name: 'Active Students',
        data: [120, 135, 142, 158, 165, 172, 180]
      },
      {
        name: 'Completed Projects',
        data: [45, 52, 58, 65, 72, 78, 85]
      }
    ],
    chart: {
      type: 'area',
      height: 300,
      background: 'transparent',
      toolbar: {
        show: true
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    },
    colors: ['#8b5cf6', '#06b6d4'],
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
        text: 'Count',
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
          return val + " students/projects"
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
        <h3>Student Activity Overview</h3>
        <p>Active students vs completed projects</p>
      </div>
      <Chart 
        options={options} 
        series={options.series} 
        type="area" 
        height={300}
        className="area-chart"
      />
    </div>
  );
};

export default AreaChart;
