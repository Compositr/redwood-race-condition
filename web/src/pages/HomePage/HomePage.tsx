import { Link } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser, logOut } = useAuth()
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>currentUser ID: {currentUser?.id ?? 'null'}</p>
      <button onClick={() => logOut()}>Log Out</button>

      <br />
      <Link to="/login">Login Page</Link>
    </>
  )
}

export default HomePage
