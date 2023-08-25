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
    toast.success("Account created successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const Login = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const AuthGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    toast.success("Login successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
export const AuthFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    toast.success("Login successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
