import Axios from "axios";

const register = (props) => {
	const { event, regUsername, regPassword, history } = props;
	event.preventDefault();
	Axios.post("/user/register", {
		username: regUsername,
		password: regPassword,
	})
		.then((res) => {
			console.log(res.data.msg);
			if (res.data.msg === "User created") {
				history.push("/login");
			}
		})
		.catch((err) => {
			console.log(err);
		});
};


const logout = (props) => {
	const { e, setIsLoggedin, setCheckUser, setCurrentUser, history } = props;
	e.preventDefault();
	Axios.post("/user/logout")
		.then((res) => {
			history.push("/login");
			setIsLoggedin(false);
			setCheckUser(false);
			setCurrentUser({});
		})
		.catch((err) => {
			console.log(err);
		});
};

const checkUserStatus = () => {
	if (!this.state.authenticated) {
	  Axios.get("/user/checkuser")
	   .then((res) => {
		 if (res.data.msg === "You are logged in") {             
			 this.setState({currentUser: res.data.user, isLoggedIn: true})
		   } else {
			 this.setState({isLoggedIn: false})
		   }
		   this.setState({authenticated: true})
		 })
		 .catch((err) => {
		   console.log(err);
		 });
	 }
   }
export { register, logout, checkUserStatus };
