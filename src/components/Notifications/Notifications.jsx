import React, { useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    let notificationId = 1;

    // Function to add a new notification
    const addNotification = (message) => {
        const newNotification = {
            id: notificationId,
            message,
        };
        notificationId++; // Increment the notification ID
        setNotifications([...notifications, newNotification]);
    };

    // Function to remove a notification
    const removeNotification = (notification) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((n) => n.id !== notification.id)
        );
    };

    return (
        <div>
            {/* {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className="bg-blue-500 text-white p-3 rounded-md mb-2"
                >
                    {notification.message}
                    <button
                        className="bg-teal-200"
                        onClick={() => removeNotification(notification)}
                    >
                        &times;
                    </button>
                </div>
            ))} */}
            <h1>Set Notifications</h1>
        </div>
    );
};

export default Notifications;
