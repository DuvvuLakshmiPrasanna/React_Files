import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    series: [44, 55, 13, 43, 22, 35],
    chart: {
      type: 'pie',
      height: 300,
      background: 'transparent'
    },
    labels: ['FSD', 'Flutter', 'Data Specialist', 'AWS', 'Service Now', 'VLSI'],
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex] + " (" + val.toFixed(1) + "%)"
      },
      style: {
        fontSize: '12px',
        fontWeight: 600
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontWeight: 500
    },
    tooltip: {
      y: {
        formatter: function (val, opts) {
          return val + " students"
        }
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: '0%'
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Technology Distribution</h3>
        <p>Student enrollment by technology</p>
      </div>
      <Chart 
        options={options} 
        series={options.series} 
        type="pie" 
        height={300}
        className="pie-chart"
      />
    </div>
  );
};

export default PieChart;
