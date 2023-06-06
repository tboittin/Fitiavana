import Link from "next/link"
import React, { useEffect, useState } from "react"

import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../services/firebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "../../styles/LoginPage.module.scss"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return
  //   }
  //   if (user) navigate("/dashboard")
  // }, [user, loading])
  return (
    <>
      <div className="login">
        <div className={styles.login__container}>
          <input
            type="text"
            className={styles.login__textBox}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className={styles.login__textBox}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className={styles.login__btn}
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button
            className={`{styles.login__textBox} {styles.login__google}`}
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don&apos;t have an account? <Link to="/register">Register</Link>{" "}
            now.
          </div>
        </div>
      </div>
      <Link href="/">Go back to home</Link>
    </>
  )
}

export default Login
