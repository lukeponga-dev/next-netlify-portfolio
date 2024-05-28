// pages/api/sendEmail.js
import sgMail from '@sendgrid/mail';

// create a server-side function to handle the form submission
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async  function(req, res) { 
  const { name, email, message } = req.body;

  const content = {
    to: 'lukeponga9@gmail.com',
    from: email,
    subject: `New Message From - ${name}`,
    text: message,
    html: `<p>${message}</p>`
    };

    try {
        await sgMail.send(content);
        res.status(200).send('Message sent successfully.');
        } catch (error) {
        console.log('ERROR', error);
        res.status(400).send('Message not sent.');
        }
}