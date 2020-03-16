import Firebase from '../infra/Firebase';

const _auth = Firebase.auth();
const TOKEN_KEY = 'my_auth_token';


const signUp = async ({ email, password }) => {
  try {
    const res = await _auth.createUserWithEmailAndPassword(email, password);
    localStorage.setItem(TOKEN_KEY, res.user.refreshToken);
    console.log('auth service token saved to local storage');
    console.log('auth service sign-up res: ', res);
    return true;
  } catch (err) {
    console.log('auth service sign-up err: ', err);
    return false;
  }
};

const signIn = async ({ email, password }) => {
  try {
    const res = await _auth.signInWithEmailAndPassword(email, password);
    localStorage.setItem(TOKEN_KEY, res.user.refreshToken);
    console.log('auth service token saved to local storage');
    console.log('auth service sign-in res: ', res);
    return true;
  } catch (err) {
    console.log('auth service sign-in err: ', err);
    return false;
  }
};

const silentLogin = async () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      console.log('auth service silent login: no auth token');
      return false;
    }
    const res = _auth.signInWithCustomToken(token);
    console.log('auth service silent login success: ', res);
    return true;
  } catch (err) {
    console.log('auth service silent login error: ', err);
    return null;
  }
};

const signOut = async ()=> {
  try {
    await _auth.signOut();
    console.log('auth service sign out success');
    localStorage.removeItem(TOKEN_KEY);
    console.log('auth service token removed from local storage');
  } catch(err) {
    console.log('auth service sign out failed: ', err);
  }
};

const isAuth = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return !!token;
}

export default {
  signUp,
  signIn,
  silentLogin,
  signOut,
  isAuth
}