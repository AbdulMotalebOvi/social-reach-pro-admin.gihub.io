import React, { useState } from 'react';

const SettingsAndConfiguration = () => {
    // State for platform settings
    const [platformSettings, setPlatformSettings] = useState({
        defaultTimeZone: 'UTC',
        language: 'English',
        notificationPreferences: {
            email: true,
            push: true,
        },
    });

    // State for security settings it's come from backend
    const [securitySettings, setSecuritySettings] = useState({
        enableTwoFactorAuth: false,
        passwordExpiryDays: 90,
    });

    // State for API integration settings
    const [apiIntegrationSettings, setApiIntegrationSettings] = useState({
        enableFacebookGraphApi: false,
        facebookAppId: '',
        facebookAppSecret: '',
    });

    // Function to update platform settings
    const updatePlatformSettings = (newSettings) => {
        setPlatformSettings({ ...platformSettings, ...newSettings });
    };

    // Function to update security settings
    const updateSecuritySettings = (newSettings) => {
        setSecuritySettings({ ...securitySettings, ...newSettings });
    };

    // Function to update API integration settings
    const updateApiIntegrationSettings = (newSettings) => {
        setApiIntegrationSettings({ ...apiIntegrationSettings, ...newSettings });
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4">Settings and Configuration</h1>

            {/* Platform Settings */}
            <div className="mb-4 p-4 rounded-lg bg-white shadow">
                <h2 className="text-lg font-semibold mb-2">Platform Settings</h2>
                <div className="mb-2 flex flex-col space-y-3 text-[#8B8B8B]">
                    <label htmlFor="defaultTimeZone">Default Time Zone:</label>
                    <select
                        id="defaultTimeZone"
                        className=" p-2 border rounded max-w-xs"
                        value={platformSettings.defaultTimeZone}
                        onChange={(e) => updatePlatformSettings({ defaultTimeZone: e.target.value })}
                    >
                        <option value="UTC">UTC</option>
                        <option value="EST">EST</option>
                        {/* Add more time zones */}
                    </select>
                </div>
                <div className="flex flex-col space-y-3 text-[#8B8B8B]">
                    <label htmlFor="language">Language:</label>
                    <select
                        id="language"
                        className=" p-2 border rounded max-w-xs"
                        value={platformSettings.language}
                        onChange={(e) => updatePlatformSettings({ language: e.target.value })}
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        {/* Add more languages */}
                    </select>
                </div>
                <div className="mb-2 space-y-2 mt-4 text-[#8B8B8B]">
                    <label>Notification Preferences:</label>
                    <div>
                        <label className="ml-2 ">
                            <input
                                type="checkbox"
                                checked={platformSettings.notificationPreferences.email}
                                onChange={() =>
                                    updatePlatformSettings({
                                        notificationPreferences: {
                                            ...platformSettings.notificationPreferences,
                                            email: !platformSettings.notificationPreferences.email,
                                        },
                                    })
                                }
                            />{' '}
                            Email
                        </label>
                        <label className="ml-2">
                            <input
                                type="checkbox"
                                checked={platformSettings.notificationPreferences.push}
                                onChange={() =>
                                    updatePlatformSettings({
                                        notificationPreferences: {
                                            ...platformSettings.notificationPreferences,
                                            push: !platformSettings.notificationPreferences.push,
                                        },
                                    })
                                }
                            />{' '}
                            Push Notifications
                        </label>
                    </div>
                </div>
            </div>

            {/* Security Settings */}
            <div className="mb-4 p-4 rounded-lg bg-white shadow">
                <h2 className="text-lg font-semibold mb-2">Security Settings</h2>
                <div className="mb-2 ">
                    <label htmlFor="enableTwoFactorAuth">Enable Two-Factor Authentication:</label>
                    <input
                        type="checkbox"
                        className='ml-3'
                        id="enableTwoFactorAuth"
                        checked={securitySettings.enableTwoFactorAuth}
                        onChange={() =>
                            updateSecuritySettings({
                                enableTwoFactorAuth: !securitySettings.enableTwoFactorAuth,
                            })
                        }
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="passwordExpiryDays">Password Expiry (Days):</label>
                    <input
                        type="number"
                        id="passwordExpiryDays"
                        className="ml-2 p-2 border rounded"
                        value={securitySettings.passwordExpiryDays}
                        onChange={(e) =>
                            updateSecuritySettings({ passwordExpiryDays: parseInt(e.target.value) })
                        }
                    />
                </div>
            </div>

            {/* API Integration Settings */}
            <div className="mb-4 p-4 rounded-lg bg-white shadow">
                <h2 className="text-lg font-semibold mb-2">API Integration Settings</h2>
                <div className="mb-2">
                    <label htmlFor="enableFacebookGraphApi">Enable Facebook Graph API Integration:</label>
                    <input
                        className='ml-3'
                        type="checkbox"
                        id="enableFacebookGraphApi"
                        checked={apiIntegrationSettings.enableFacebookGraphApi}
                        onChange={() =>
                            updateApiIntegrationSettings({
                                enableFacebookGraphApi: !apiIntegrationSettings.enableFacebookGraphApi,
                            })
                        }
                    />
                </div>
                {apiIntegrationSettings.enableFacebookGraphApi && (
                    <div>
                        <div className="mb-2 space-y-3 flex text-[#8B8B8B] flex-col">
                            <label htmlFor="facebookAppId">Facebook App ID:</label>
                            <input
                                type="text"
                                id="facebookAppId"
                                className=" p-2 border max-w-xs rounded"
                                value={apiIntegrationSettings.facebookAppId}
                                onChange={(e) =>
                                    updateApiIntegrationSettings({ facebookAppId: e.target.value })
                                }
                            />
                        </div>
                        <div className="mb-2 space-y-2 flex flex-col text-[#8B8B8B] ">
                            <label htmlFor="facebookAppSecret">Facebook App Secret:</label>
                            <input
                                type="text"
                                id="facebookAppSecret"
                                className=" p-2 border max-w-xs rounded"
                                value={apiIntegrationSettings.facebookAppSecret}
                                onChange={(e) =>
                                    updateApiIntegrationSettings({ facebookAppSecret: e.target.value })
                                }
                            />
                        </div>
                        <button
                            className="bg-[#012B6D] text-white w-[150px] px-4 mt-4 py-2 rounded hover:bg-blue-600"

                        >
                            Submit
                        </button>
                    </div>

                )}
            </div>
        </div>
    );
};

export default SettingsAndConfiguration;
