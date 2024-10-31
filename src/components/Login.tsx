import useGoogleAuth from "../hooks/useGoogleAuth"

function Login() {
  const { handleLoginGoogle, loading, error } = useGoogleAuth()
  return (
    <>
      {/* <button>Mobile Number</button> */}
      <button
        onClick={handleLoginGoogle}
        disabled={loading}
      >
        {loading ? "Loading..." : "Login with Google"}
      </button>
      <p>{error?.message}</p>
    </>
  )
}

export default Login
