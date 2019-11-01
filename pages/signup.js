import React, { useState, useEffect } from 'react';

import { Form, Segment, Button, Icon, Message } from 'semantic-ui-react';
import Link from 'next/link';
import catcErrors from '../utils/catchErrors';
import catchErrors from '../utils/catchErrors';

const INITIAL_USER = {
  name: '',
  email: '',
  password: ''
};

function Signup() {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      console.log(user);
      // Make request to signup a user
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Message
        attached
        icon="settings"
        header="Get Started!"
        content="Create a new account"
        color="teal"
      ></Message>

      <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
        <Message error header="Opps" content={error} />

        <Segment>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={user.name}
          />

          <Form.Input
            fluid
            icon="envelope"
            iconPosition="left"
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={user.email}
          />

          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={user.password}
          />
          <Button
            disabled={disabled || loading}
            icon="signup"
            type="submit"
            color="orange"
            content="Signup"
          />
        </Segment>
      </Form>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Existing user ?{' '}
        <Link href="/login">
          <a>Login here</a>
        </Link>{' '}
        instead.
      </Message>

      {/* <Message attached="bottom" warning>
        <Icon name="help" />
        Existing user? <Link href="/login"></Link>
        <Link href="/login">
          <a>Login here</a>
        </Link>{' '}
        instead
      </Message> */}
    </>
  );
}

export default Signup;
