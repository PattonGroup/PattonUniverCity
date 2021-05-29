import React, { useState, useRef } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
import { login, resetPassword } from '../../services/firebase';
import { Alert } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import Axios from 'axios'

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [setLoading] = useState(false);
    const history = useHistory();

    // Handle login for both firebase or database
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('')
            setLoading(true)
            let res = await login(emailRef.current.value, passwordRef.current.value)
            localStorage.setItem('firstLogin', true)
            console.log(res)
            dbLogin(props)
            history.push('/dashboard')
        } catch {
            setError("Incorrect Username/Password")
        }
        setLoading(false)
    }

    // Handle database login
  async function dbLogin (props) {
    const {
		setIsLoggedin,
		setCheckUser,
		setCurrentUser,
	} = props;
    const email = emailRef.current.value
    const password = passwordRef.current.value
	await Axios.post("/user/login", {
        username: email,
		password: password,
	})
    .then((res) => {
			if (res.data.msg === "Logged in") {
				if (email === "admin") {
					setCurrentUser({ isAdmin: true });
				}
				setIsLoggedin(true);
                setCheckUser(false);

			}
		})
		.catch((err) => {
			console.log(err);
		});    
    }

    // Handle Firebase password reset
    async function resetpassword(e) {
        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            history.push('/')
        } catch {
            setError("This email does not exist")
        }
        setLoading(false)
    }

    return (
        <>
            <div className="login container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="overlay-card">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card px-4 ">
                                <div className="row mb-4 pb-4 px-3">
                                    <div className="card-header">
                                        <div class="d-flex justify-content-end social_icon">
                                            <div className="social text-center mr-3">
                                                <div onClick={props.googlelogin}><FcGoogle /></div>
                                            </div>
                                            <div className="ml-3 social text-center mr-3">
                                                <div onClick={props.githublogin}><AiFillGithub /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Sign In</h3>
                                </div>
                                {error && <Alert style={{ display: 'flex', justifyContent: 'center' }} variant="danger">{error}</Alert>}
                                <form onSubmit={handleSubmit} action="">
                                    <div className="form-group">
                                        <input type="email" required ref={emailRef} className=" form-control" placeholder="Your Email *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" autoComplete='true' required ref={passwordRef} className="form-control" placeholder="Password *" />
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" className="float-right login_btn">Login</button>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input id="chk1" type="checkbox" name="chk" className="custom-control-input" />
                                            <label for="chk1" className="custom-control-label text-sm">Remember me</label>
                                        </div> <a href="/" onSubmit={resetpassword} className="text-sm">Forgot Password?</a>
                                    </div>
                                    <div className="form-group  pt-3 mt-2">
                                        <small className="font-weight-bold">Don't have an account? <a className="text-sm" href="/signup">Register</a>
                                        </small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;