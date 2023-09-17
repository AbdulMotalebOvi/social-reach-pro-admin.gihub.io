import React, { useState } from 'react';

const Management = () => {
    const [tickets, setTickets] = useState([
        { id: 1, status: 'Open', assignedAgent: null, messages: [] },
        { id: 2, status: 'In Progress', assignedAgent: 1, messages: [] },
        { id: 3, status: 'Resolved', assignedAgent: 2, messages: [] },
    ]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [agents, setAgents] = useState([
        { id: 1, name: 'Agent 1' },
        { id: 2, name: 'Agent 2' },
    ]);

    // Function to create a new support ticket
    const createTicket = () => {
        const newTicket = {
            id: tickets.length + 1,
            status: 'Open',
            assignedAgent: null,
            messages: [],
        };
        setTickets([...tickets, newTicket]);
    };

    // Function to assign a ticket to a specific agent
    const assignTicket = (ticketId, agentId) => {
        const updatedTickets = tickets.map((ticket) =>
            ticket.id === ticketId ? { ...ticket, assignedAgent: agentId } : ticket
        );
        setTickets(updatedTickets);
    };

    // Function to change the status of a ticket (e.g., open, in progress, resolved)
    const changeTicketStatus = (ticketId, newStatus) => {
        const updatedTickets = tickets.map((ticket) =>
            ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
        );
        setTickets(updatedTickets);
    };

    // Function to send a message within a ticket
    const sendMessage = (ticketId, messageText) => {
        const messageData = {
            sender: 'User',
            text: messageText,
            timestamp: new Date(),
        };

        const updatedTickets = tickets.map((ticket) =>
            ticket.id === ticketId
                ? { ...ticket, messages: [...ticket.messages, messageData] }
                : ticket
        );
        setTickets(updatedTickets);

        setMessages([...messages, messageData]);
    };

    // Categorize tickets by status
    const openTickets = tickets.filter((ticket) => ticket.status === 'Open');
    const inProgressTickets = tickets.filter(
        (ticket) => ticket.status === 'In Progress'
    );
    const resolvedTickets = tickets.filter((ticket) => ticket.status === 'Resolved');


    // Helper function to create a column for tickets
    const createTicketColumn = (ticketList, columnTitle) => (
        <div className="flex-1" key={columnTitle}>
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">{columnTitle}</h2>
                <ul>
                    {ticketList.map((ticket) => (
                        <li
                            key={ticket.id}
                            className="border p-2 rounded mb-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => setSelectedTicket(ticket)}
                        >
                            Ticket #{ticket.id}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-semibold mb-4"> Help & Support</h1>

            {/* Create Ticket Form */}
            <div className="mb-4 p-4 rounded-lg bg-white shadow">
                <h2 className="text-lg font-semibold mb-2">Create a New Ticket</h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={createTicket}
                >
                    Create Ticket
                </button>
            </div>

            {/* Tickets Section */}
            <div className="flex flex-wrap gap-4">
                {createTicketColumn(openTickets, 'Open Tickets')}
                {createTicketColumn(inProgressTickets, 'In Progress Tickets')}
                {createTicketColumn(resolvedTickets, 'Resolved Tickets')}
            </div>

            {/* Selected Ticket Details */}
            {selectedTicket && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">Selected Ticket</h2>
                    <p>Ticket #{selectedTicket.id}</p>
                    <p>Status: {selectedTicket.status}</p>
                    <p>Assigned Agent: {selectedTicket.assignedAgent}</p>

                    {/* Change Status Button */}
                    <div className="mt-2">
                        <label htmlFor="status">Change Status:</label>
                        <select
                            id="status"
                            className="ml-2 p-2 border rounded"
                            onChange={(e) =>
                                changeTicketStatus(selectedTicket.id, e.target.value)
                            }
                            value={selectedTicket.status}
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>

                    {/* Assign Agent Dropdown */}
                    <div className="mt-2 space-y-3">
                        <label htmlFor="assignAgent">Assign Agent:</label>
                        <select
                            id="assignAgent"
                            className="ml-2 p-2 border rounded"
                            onChange={(e) =>
                                assignTicket(selectedTicket.id, parseInt(e.target.value))
                            }
                            value={selectedTicket.assignedAgent || ''}
                        >
                            <option value="">Unassigned</option>
                            {agents.map((agent) => (
                                <option key={agent.id} value={agent.id}>
                                    {agent.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Messaging System */}
                    <div className="mt-4 space-y-4">
                        <h2 className="text-lg font-semibold mb-2">Messaging System</h2>
                        <div className="border p-2 rounded">
                            {selectedTicket.messages.map((message, index) => (
                                <div key={index} className="mb-2">
                                    <strong>{message.sender}:</strong> {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="mt-1">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full p-2 border rounded"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        sendMessage(selectedTicket.id, e.target.value);
                                        e.target.value = '';
                                    }
                                }}
                            />
                        </div>
                        <button className='px-5 py-2 bg-green-500 text-black my-2 rounded'>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Management;
