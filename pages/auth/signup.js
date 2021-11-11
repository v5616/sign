import { FaUser } from "react-icons/fa";
import { useEffect, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";


export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      if(password !== passwordconfirm){
          toast.error("password donot match")
          return;
      }
  };
  return (
    <Layout title="User Sign Up">
      <div className={styles.auth}>
        <h1>
          <FaUser />
          Sign Up
        </h1>

        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              value={username}
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordconfirm">Confirm Password</label>
            <input
              type="password"
              value={passwordconfirm}
              id="passwordconfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <input type="submit" value="Sign Up" className="btn" />
        </form>
        <p>
          Already have account ? <Link href="/auth/signup">Sign In</Link>
        </p>
      </div>
    </Layout>
  );
}