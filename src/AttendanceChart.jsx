import React from 'react';
import Chart from 'react-apexcharts';

const AttendanceChart = () => {
  const options = {
    series: [
      {
        name: 'FSD',
        data: [85, 92, 78, 88, 95, 89, 91]
      },
      {
        name: 'Flutter',
        data: [72, 85, 90, 82, 88, 85, 87]
      },
      {
        name: 'Data Specialist',
        data: [68, 75, 82, 78, 85, 80, 83]
      },
      {
        name: 'AWS',
        data: [90, 88, 92, 85, 89, 91, 87]
      },
      {
        name: 'Service Now',
        data: [76, 82, 85, 79, 84, 86, 88]
      },
      {
        name: 'VLSI',
        data: [65, 70, 75, 72, 78, 74, 76]
      }
    ],
    chart: {
      type: 'bar',
      height: 350,
      background: 'transparent',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 8,
        borderRadiusApplication: 'end',
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '12px',
          fontWeight: 500
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      title: {
        text: 'Attendance (%)',
        style: {
          color: '#94a3b8',
          fontSize: '14px',
          fontWeight: 600
        }
      },
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '12px'
        },
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    fill: {
      opacity: 0.9,
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0.6,
        stops: [0, 100]
      }
    },
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "% attendance"
        }
      },
      style: {
        fontSize: '14px'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontWeight: 600,
      markers: {
        width: 12,
        height: 12,
        radius: 6
      }
    },
    grid: {
      borderColor: '#334155',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Technology Attendance Overview</h3>
        <p>Monthly attendance percentage by technology</p>
      </div>
      <Chart 
        options={options} 
        series={options.series} 
        type="bar" 
        height={350}
        className="attendance-chart"
      />
    </div>
  );
};

export default AttendanceChart;
