import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowUpRight, ArrowDownRight, MapPin, PieChart, Clock } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  const transactions = [
    { id: 1, type: 'expense', merchant: 'Starbucks', amount: -4.85, date: '2024-03-15' },
    { id: 2, type: 'income', merchant: 'Salary', amount: 2500.00, date: '2024-03-14' },
    { id: 3, type: 'expense', merchant: 'Amazon', amount: -29.99, date: '2024-03-13' },
    { id: 4, type: 'expense', merchant: 'Transport', amount: -2.50, date: '2024-03-13' },
  ];

  const atmLocations = [
    { id: 1, name: 'Central Station ATM', distance: '0.2 miles' },
    { id: 2, name: 'Shopping Mall ATM', distance: '0.5 miles' },
    { id: 3, name: 'High Street ATM', distance: '0.8 miles' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Account Balance Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Welcome back, {user?.username}</h2>
                <Link to="/settings" className="text-indigo-600 hover:text-indigo-700">
                  <CreditCard className="h-6 w-6" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Available Balance</p>
                  <p className="text-2xl font-bold text-gray-900">£2,458.32</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Savings Goal</p>
                  <p className="text-2xl font-bold text-gray-900">£10,000.00</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/transfers"
                className="flex items-center justify-between bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Send Money</h3>
                  <p className="text-sm text-gray-500">Transfer to friends</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-indigo-600" />
              </Link>
              <Link
                to="/transfers"
                className="flex items-center justify-between bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Request Money</h3>
                  <p className="text-sm text-gray-500">Get paid back</p>
                </div>
                <ArrowDownRight className="h-6 w-6 text-indigo-600" />
              </Link>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'expense' ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        {transaction.type === 'expense' ? (
                          <ArrowUpRight className={`h-4 w-4 ${
                            transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                          }`} />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{transaction.merchant}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <p className={`font-medium ${
                      transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {transaction.type === 'expense' ? '-' : '+'}£{Math.abs(transaction.amount).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Spending Analytics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Spending Analytics</h2>
                <PieChart className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-indigo-600">
                        Shopping
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-indigo-600">
                        30%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                    <div className="w-[30%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        Transport
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        20%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div className="w-[20%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby ATMs */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Nearby ATMs</h2>
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {atmLocations.map((atm) => (
                  <div key={atm.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{atm.name}</p>
                      <p className="text-xs text-gray-500">{atm.distance}</p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                      Directions
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;