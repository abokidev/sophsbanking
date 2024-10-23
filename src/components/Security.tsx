import React from 'react';
import { Shield, Lock, Bell } from 'lucide-react';

const Security = () => {
  return (
    <div id="security" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Bank-grade security as standard
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your money and data are protected by the same security measures used by top financial institutions.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-indigo-600" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Protected Funds</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Your money is protected up to £85,000 by the Financial Services Compensation Scheme.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <div className="flex items-center">
                <Lock className="h-8 w-8 text-indigo-600" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">24/7 Fraud Monitoring</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Advanced fraud detection systems monitor your account around the clock.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <div className="flex items-center">
                <Bell className="h-8 w-8 text-indigo-600" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Instant Notifications</h3>
              </div>
              <p className="mt-4 text-gray-500">
                Get real-time alerts for all account activity and instantly freeze your card if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;