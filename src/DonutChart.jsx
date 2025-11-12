import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const options = {
    series: [76, 85, 101, 98, 87, 105],
    chart: {
      type: 'donut',
      height: 300,
      background: 'transparent'
    },
    labels: ['FSD', 'Flutter', 'Data Specialist', 'AWS', 'Service Now', 'VLSI'],
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return val.toFixed(1) + "%"
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
          return val + " completion rate"
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Completion',
              fontSize: '16px',
              fontWeight: 600,
              color: '#64748b',
              formatter: function (w) {
                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return Math.round(total / w.globals.series.length) + '%';
              }
            }
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Course Completion Rates</h3>
        <p>Completion percentage by technology</p>
      </div>
      <Chart 
        options={options} 
        series={options.series} 
        type="donut" 
        height={300}
        className="donut-chart"
      />
    </div>
  );
};

export default DonutChart;
