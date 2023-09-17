import React, { useState } from 'react'

const Payment = () => {
    const [subscriptionPlan, setSubscriptionPlan] = useState('Core');
    const [billingRecords, setBillingRecords] = useState([]);
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [showInvoices, setShowInvoices] = useState(false);

    // State for handling disputes or refunds
    const [disputeReason, setDisputeReason] = useState('');
    const [refundAmount, setRefundAmount] = useState(0);

    // Simulated billing records and payment history data
    const sampleBillingRecords = [
        { id: 1, date: '2023-01-15', amount: 29.99 },
        { id: 2, date: '2023-02-15', amount: 29.99 },
        { id: 3, date: '2023-03-15', amount: 29.99 },
    ];

    const generateInvoices = () => {
        // Implement logic to generate invoices here
        // You can update the paymentHistory state with the generated invoices
        // For now, we'll just set a sample invoice in this example
        setPaymentHistory([
            ...paymentHistory,
            { id: paymentHistory.length + 1, date: '2023-04-15', amount: 29.99 },
        ]);
        setShowInvoices(true);
    };
    // Function to handle a payment dispute or refund request
    const handleDisputeOrRefund = () => {
        // Simulated logic to handle disputes or refunds
        if (disputeReason && refundAmount > 0) {
            alert(`Dispute Reason: ${disputeReason}\nRefund Amount: $${refundAmount}`);
        } else {
            alert('Please provide a dispute reason and a valid refund amount.');
        }
    };
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-semibold mb-7">Billing and Payment</h1>

            {/* Subscription Plan and Pricing */}
            <div className="mb-4 space-y-4">
                <h2 className="text-lg font-semibold mb-2">Subscription Plan</h2>
                <div className="mb-2">
                    Current Plan: <span className='text-green-500 font-semibold'>{subscriptionPlan}</span>
                </div>
                <div className="mb-2">
                    <label htmlFor="subscriptionPlan">Select Plan:</label>
                    <select
                        id="subscriptionPlan"
                        className="ml-2  border rounded space-y-2 max-w-xl"
                        onChange={(e) => setSubscriptionPlan(e.target.value)}
                        value={subscriptionPlan}
                    >
                        <option value="Core">Core</option>
                        <option value="Plus">Plus</option>
                        <option value="Profeissonal">Profeissonal</option>
                    </select>
                </div>
                <div>
                    {/* Add button and logic to update subscription plan */}
                    <button
                        className="bg-[#012B6D] text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => alert(`Updated to ${subscriptionPlan} plan`)}
                    >
                        Update Plan
                    </button>
                </div>
            </div>

            {/* Billing Records */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Billing Records</h2>
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border p-2">ID</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billingRecords.map((record) => (
                            <tr key={record.id}>
                                <td className="border p-2">{record.id}</td>
                                <td className="border p-2">{record.date}</td>
                                <td className="border p-2">${record.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Payment History */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Payment History</h2>
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border p-2">ID</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((payment) => (
                            <tr key={payment.id}>
                                <td className="border p-2">{payment.id}</td>
                                <td className="border p-2">{payment.date}</td>
                                <td className="border p-2">${payment.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Generate Invoices Button */}
            {!showInvoices && (
                <div className="mb-4">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={generateInvoices}
                    >
                        Generate Invoices
                    </button>
                </div>
            )}

            {/* Handle Dispute or Refund */}
            <div className="mb-4 p-4 rounded-lg bg-white shadow">
                <h2 className="text-lg font-semibold mb-2">Handle Dispute or Refund</h2>
                <div className="mb-2">
                    <label htmlFor="disputeReason">Dispute Reason:</label>
                    <input
                        type="text"
                        id="disputeReason"
                        className="ml-2 p-2 border rounded"
                        value={disputeReason}
                        onChange={(e) => setDisputeReason(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="refundAmount">Refund Amount:</label>
                    <input
                        type="number"
                        id="refundAmount"
                        className="ml-2 p-2 border rounded"
                        value={refundAmount}
                        onChange={(e) => setRefundAmount(parseFloat(e.target.value))}
                    />
                </div>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={handleDisputeOrRefund}
                >
                    Submit Dispute or Refund
                </button>
            </div>
        </div>
    )
}

export default Payment