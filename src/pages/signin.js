import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from '@reach/router';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import {auth} from '../lib/firebase.prod'

// Import Firebase modular SDK functions
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  // const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  // useEffect(() => {
  //   console.log("hit useEffect");
  //   if (auth.currentUser) {
  //     console.log(auth.currentUser);
  //     console.log("hit auth for navigation");
  //     navigate(-1);
  //   }
  // }, [auth.currentUser]);

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      /*console.log("getAuth :", getAuth);
      console.log("Auth :", auth);*/
      await signInWithEmailAndPassword(auth, emailAddress, password);
      if (auth.currentUser) {
        console.log("hit navigate");
        return <Redirect to={ROUTES.BROWSE} />;
      }
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
