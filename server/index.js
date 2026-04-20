const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' })); // Allow all origins for now
app.use(bodyParser.json());


// SMTP Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// API Endpoint
app.post('/api/send-email', (req, res) => {
  console.log('Received enquiry request:', req.body);
  const { name, destination, phone, email } = req.body;


  if (!name || !destination || !phone || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: `"Eleqt Holidays Enquiry" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Travel Enquiry from ${name}`,
    text: `
      You have a new enquiry:
      
      Name: ${name}
      Destination: ${destination}
      Phone: ${phone}
      Email: ${email}
      
      --
      Eleqt Holidays Backend
    `,
    html: `
      <h2>New Travel Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr>
      <p>Sent via Eleqt Holidays Backend</p>
    `,
  };

  // Demo Mode: If credentials are placeholders, just log to console and return success
  if (process.env.SMTP_USER === 'your-email@gmail.com' || process.env.SMTP_PASS === 'your-app-password') {
    console.log('--- DEMO MODE ---');
    console.log('Detailed Enquiry Data:', { name, destination, phone, email });
    console.log('Configure server/.env with real SMTP credentials to enable actual emails.');
    return res.status(200).json({ 
      message: 'Enquiry received in Demo Mode (Console Only)',
      demo: true 
    });
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('SMTP Error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
