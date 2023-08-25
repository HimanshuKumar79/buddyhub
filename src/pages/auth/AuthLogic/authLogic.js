import toast from "react-hot-toast";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const userRegister = async ({ email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    localStorage.setItem("email", email);
    toast.success("Account created successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const Login = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("email", email);
    toast.success("Login successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const AuthGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("email", res.user.email);
    toast.success("Login successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
export const AuthFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    localStorage.setItem("email", res.user.email);
    toast.success("Login successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
