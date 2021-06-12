import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './signup.css';
import { signup } from '../../services/firebase';
import axios from 'axios';
import globe from '../../assets/images/logo.png';
import { register } from '../../utils/userFunctions';

export default function Signup(props) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      register(e, emailRef.current.value, passwordRef.current.value, history);

      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value).then(
        () => {
          /* user info is stored in a mongodb not in the firebasedb */
          axios.post('/api/registerUser', {
            password: passwordRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
            fullname: `${fnameRef.current.value} ${lnameRef.current.value}`,
          });
        }
      );
      history.push('/dashboard');
    } catch (err) {
      console.log(err);
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <>
      <div className=" register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src={globe} alt="globe" />
            <h3>Welcome</h3>
            <h6>
              Come join the team, we look forward to seeing you on the other
              side.
            </h6>
            <div className="row mb-4 px-3">
              <small className="font-weight-bold">
                Already have an account?
                <a className="text-sm" href="/login">
                  {' '}
                  Login
                </a>
              </small>
            </div>
          </div>
          <div className="col-md-9 register-right">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Developer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Education
                </a>
              </li>
            </ul>
            <form
              onSubmit={handleSubmit}
              className="tab-content"
              id="myTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">
                  Apply as a Developer or for Education
                </h3>
                <div className="row register-form">
                  <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    className="col-md-12"
                  >
                    {error && (
                      <Alert
                        style={{
                          width: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                        variant="danger"
                      >
                        {error}
                      </Alert>
                    )}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        ref={fnameRef}
                        className="form-control"
                        placeholder="First Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        ref={lnameRef}
                        className="form-control"
                        placeholder="Last Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        required
                        ref={passwordRef}
                        className="form-control"
                        placeholder="Password *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        required
                        ref={passwordConfirmRef}
                        className="form-control"
                        placeholder="Confirm Password *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        ref={usernameRef}
                        className="form-control"
                        placeholder="Your Username *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        required
                        ref={emailRef}
                        className="form-control"
                        placeholder="Your Email *"
                      />
                    </div>
                    <input
                      disabled={loading}
                      type="submit"
                      className="btnRegister"
                      value="Register"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
