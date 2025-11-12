import React from 'react';
import AttendanceChart from './AttendanceChart';
import LineChart from './LineChart';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-header-section">
        <div className="dashboard-title">
          <h1>Drive Ready Analytics Dashboard</h1>
          <p>Comprehensive insights into technology learning and attendance</p>
        </div>
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>1,247</h3>
              <p>Total Students</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3>89%</h3>
              <p>Avg Attendance</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <h3>156</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <h3>6</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        {/* Top Row - Full Width Attendance Chart */}
        <div className="chart-row chart-row-large">
          <div className="chart-card chart-card-large">
            <AttendanceChart />
          </div>
        </div>

        {/* Middle Row - Two Equal Charts */}
        <div className="chart-row chart-row-medium">
          <div className="chart-card chart-card-medium">
            <LineChart />
          </div>
          <div className="chart-card chart-card-medium">
            <AreaChart />
          </div>
        </div>

        {/* Bottom Row - Two Equal Charts */}
        <div className="chart-row chart-row-small">
          <div className="chart-card chart-card-small">
            <PieChart />
          </div>
          <div className="chart-card chart-card-small">
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
