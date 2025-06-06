const { RestClientV5 } = require('bybit-api');

// Initialize the client with testnet mode
const client = new RestClientV5({
  testnet: true,
  key: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
});

// Example parameters
const params = {
  orderId: '1899736339155943424', // Replace with your order ID
  paymentType: '14', // Payment method used
  paymentId: '7110', // Payment method ID used
};

// Call the function
client
  .markP2POrderAsPaid(params)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
