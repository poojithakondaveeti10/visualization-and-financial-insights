import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const data = [
    { month: 'Jan', expense: 4000 },
    { month: 'Feb', expense: 3000 },
    { month: 'Mar', expense: 5000 },
    { month: 'Apr', expense: 4500 },
    { month: 'May', expense: 6000 },
    { month: 'Jun', expense: 5500 }
  ];

  const transactions = [
    { id: 1, type: 'Expense', category: 'Groceries', amount: 1500, date: '2024-01-15' },
    { id: 2, type: 'Income', category: 'Salary', amount: 50000, date: '2024-01-10' },
    { id: 3, type: 'Expense', category: 'Utilities', amount: 2000, date: '2024-01-08' },
    { id: 4, type: 'Expense', category: 'Transport', amount: 800, date: '2024-01-05' }
  ];

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="page-title">Dashboard</h1>
        
        <div className="stats-grid">
          <div className="stat-card income">
            <div className="stat-icon">💵</div>
            <div className="stat-info">
              <h3>Total Income</h3>
              <p className="stat-value">₹15,00,000</p>
            </div>
          </div>

          <div className="stat-card expense">
            <div className="stat-icon">💳</div>
            <div className="stat-info">
              <h3>Total Expense</h3>
              <p className="stat-value">₹8,50,000</p>
            </div>
          </div>

          <div className="stat-card savings">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <h3>Monthly Savings</h3>
              <p className="stat-value">₹6,50,000</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Monthly Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expense" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2>Recent Transactions</h2>
          <div className="table-responsive">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(t => (
                  <tr key={t.id}>
                    <td><span className={`badge ${t.type.toLowerCase()}`}>{t.type}</span></td>
                    <td>{t.category}</td>
                    <td className={t.type === 'Income' ? 'text-green' : 'text-red'}>
                      ₹{t.amount.toLocaleString('en-IN')}
                    </td>
                    <td>{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
