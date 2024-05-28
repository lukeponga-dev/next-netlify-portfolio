import { useState } from 'react';

// update contact to send a post request to the API when submitted

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Message not sent');
      }
    } catch (error) {
      console.error('Message not sent:', error);
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name}  onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Message:
          <textarea name="message" value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
