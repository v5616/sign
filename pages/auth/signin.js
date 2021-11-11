import { FaUser } from "react-icons/fa";
import { useEffect, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <Layout title="User Sign In">
      <div className={styles.auth}>
        <h1>
          <FaUser />
          Sign In
        </h1>

        <ToastContainer />
        <form onSubmit={handleSubmit}>
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
              type="text"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Sign In" className="btn" />
        </form>
        <p>
          Don't have account ? <Link href="/auth/signup">Sign up</Link>
        </p>
      </div>
    </Layout>
  );
}