import React from 'react';

const Monitoring = () => {
    // Placeholder data for server status, database status, and API integrations
    const serverStatus = 'Online';
    const databaseStatus = 'Connected';
    const apiIntegrations = [
        { name: 'Integration 1', status: 'Connected' },
        { name: 'Integration 2', status: 'Disconnected' },
        // Add more integrations as needed
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Monitoring Dashboard</h2>

            {/* Server Status */}
            <div className="bg-green-100 text-green-900 p-3 rounded-md mb-4">
                Server Status: {serverStatus}
            </div>

            {/* Database Status */}
            <div className="bg-blue-100 text-blue-900 p-3 rounded-md mb-4">
                Database Status: {databaseStatus}
            </div>

            {/* API Integrations */}
            <div className="bg-yellow-100 text-yellow-900 p-3 rounded-md">
                <h3 className="text-lg font-semibold mb-2">API Integrations</h3>
                <ul className='space-y-5'>
                    {apiIntegrations.map((integration) => (
                        <li
                            key={integration.name}
                            className={`flex items-center justify-between ${integration.status === 'Connected'
                                ? 'text-green-600'
                                : 'text-red-600'
                                }`}
                        >
                            {integration.name}{' '}
                            <span
                                className={`bg-${integration.status === 'Connected' ? 'green' : 'red'
                                    }-500 text-white px-2 py-1 rounded-md`}
                            >
                                {integration.status}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Monitoring;
