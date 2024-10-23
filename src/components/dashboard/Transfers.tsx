import React, { useState } from 'react';
import { ArrowRight, Search, Users } from 'lucide-react';

const Transfers = () => {
  const [transferType, setTransferType] = useState<'send' | 'request'>('send');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const recentContacts = [
    { id: 1, name: 'Sarah Johnson', username: '@sarah.j' },
    { id: 2, name: 'Mike Peters', username: '@mike.p' },
    { id: 3, name: 'Emma Wilson', username: '@emma.w' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle transfer logic
    console.log('Transfer:', { type: transferType, amount, recipient });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Transfer Type Toggle */}
          <div className="flex space-x-4 mb-8">
            <button
              className={`flex-1 py-3 px-4 rounded-lg font-medium ${
                transferType === 'send'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setTransferType('send')}
            >
              Send Money
            </button>
            <button
              className={`flex-1 py-3 px-4 rounded-lg font-medium ${
                transferType === 'request'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setTransferType('request')}
            >
              Request Money
            </button>
          </div>

          {/* Transfer Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">£</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
                Recipient Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="recipient"
                  id="recipient"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter username or phone number"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {transferType === 'send' ? 'Send Money' : 'Request Money'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          {/* Recent Contacts */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Contacts</h3>
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recentContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setRecipient(contact.username)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">
                      {contact.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.username}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfers;