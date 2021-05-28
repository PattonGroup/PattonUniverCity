import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC2q4QuXxlPOXzuWeOjz4KIjK7wULN1TVI",
    authDomain: "pattonunivercitygroup.firebaseapp.com",
    projectId: "pattonunivercitygroup",
    storageBucket: "pattonunivercitygroup.appspot.com",
    messagingSenderId: "13802219318",
    appId: "1:13802219318:web:2f8db0d92ed040eb62b597"
};

// Initialize Firebase
firebase.initializeApp(config);


const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider()

function googlelogin() {
    return auth.signInWithPopup(googleAuthProvider);
}
function githublogin() {
    return auth.signInWithPopup(githubAuthProvider);
}

function logout() {
    return auth.signOut();
}
function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
}
async function getUser(){
    try{
        var user = await firebase.auth().currentUser;
        var userAccount = {
            email: user.email,
            uid: user.uid
        }
        return userAccount
    }catch(err){
        console.log(err)
        return(err)
    }
    
}

export {
    auth,
    googlelogin,
    githublogin,
    signup,
    resetPassword,
    login,
    logout,
    getUser
}
