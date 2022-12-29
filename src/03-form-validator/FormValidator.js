import { useState } from 'react';

export default function FormValidator() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function findError() {
    let errors = [];

    if (!password || !passwordConfirm || !email)
      errors.push('All fields must be filled');
    else if (!validateEmail(email)) errors.push('Invalid E-mail');
    else if (password.length < 8)
      errors.push('Password must contain 8 characters');
    else if (password !== passwordConfirm)
      errors.push('Password and Confirmation does not match');

    return errors;
  }

  const evalSubmit = (e) => {
    e.preventDefault();
    const theErrors = findError();
    setMessage(theErrors.length ? theErrors.join(', ') : 'User Created');
  };

  return (
    <form onSubmit={evalSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type="submit" value="Submit" />
    </form>
  );
}
