let earnings = 0; // Initialize earnings

// Handle the "Click to earn" button
document.getElementById("click-button").addEventListener("click", function() {
    earnings += 0.50; // Add 50 pence on each click
    document.getElementById("earnings").innerText = `£${earnings.toFixed(2)}`; // Update display
});

// Render the PayPal button
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: earnings.toFixed(2) // Send the current earnings amount
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            earnings = 0; // Reset earnings after payment
            document.getElementById("earnings").innerText = '£0.00'; // Reset display
        });
    },
    onCancel: function(data) {
        alert('Transaction was canceled.');
    },
    onError: function(err) {
        console.error(err);
        alert('An error occurred during the transaction. Please try again.');
    }
}).render('#paypal-button-container'); // Display PayPal button
