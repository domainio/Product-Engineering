import CloudProvider from '../infra/CloudProvider';

const _auth = CloudProvider.auth();

const signUp = async (email, password) => {
  return await _auth.createUserWithEmailAndPassword(email, password);
};

const signIn = async (email, password) => {
  return await _auth.signInWithEmailAndPassword(email, password);
};

const signInWithToken = async (token) => {
  return await _auth.signInWithCustomToken(token);
};

const signOut = async () => {
  return await _auth.signOut();
};

export default {
  signIn,
  signUp,
  signInWithToken,
  signOut
}