import React, { useState } from 'react';

const AdminInfo = () => {
    // State to track the visibility of the settings panel
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    // Function to toggle the visibility of the settings panel
    const toggleSettingsPanel = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    // Function to handle the logout action
    const handleLogout = () => {
        // Implement your logout logic here (e.g., clearing session, redirecting, etc.)
        alert('Logged out successfully');
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Account Management</h2>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="bg-red-500 w-[150px] hover:bg-red-600 text-white py-2 px-4 rounded-md mb-4"
            >
                Log Out
            </button>

            {/* Account Settings Panel */}
            <div className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">Admin Account Settings</h3>
                <button
                    onClick={toggleSettingsPanel}
                    className="bg-[#012B6D] hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-2"
                >
                    {isSettingsOpen ? 'Close Settings' : 'Open Settings'}
                </button>

                {isSettingsOpen && (
                    <div>
                        {/* Account Management Options */}
                        <div className="mb-4 mt-5  space-y-3">
                            <label className="block text-sm font-medium text-[#8B8B8B]">Change Password</label>
                            <input
                                type="password"
                                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-500"
                                placeholder="New Password"
                            />
                        </div>

                        <div className="mb-4 mt-2 space-y-3">
                            <label className="block text-sm font-medium text-[#8B8B8B]">Change Permissions</label>
                            <select
                                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-500"
                                defaultValue="default"
                            >
                                <option value="default" disabled>
                                    Select Permission Level
                                </option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        <button
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminInfo;
