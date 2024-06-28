import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

app.use(express.json());
require('dotenv').config();


app.post('/send-email', async (req: Request, res: Response) => {
    const { name, email, budget, timeline, details, direction } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: 'GlobalJoyLab@gmail.com',
        to: 'GlobalJoyLab@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Budget: ${budget}</p>
            <p>Timeline: ${timeline}</p>
            <p>Details: ${details}</p>
            <p>Direction: ${direction}</p>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
