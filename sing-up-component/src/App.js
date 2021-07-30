function App() {
  return (
    <div className="container">
      <div className="for-login">
        <div className="for-login-element">
          <h2>Already Signed up?</h2>
          <div className="for-login-text">
            <p>
              All users on MySpace will know that there are milions of people
              out there. Every day besides so many people joining this community
            </p>
          </div>
          <button
            type="button"
            className="for-login-btn"
            onClick={() => {
              console.log("Otvori se sezame");
            }}
          >
            LOG IN
          </button>
        </div>
      </div>
      <div className="for-signup">
        <div className="for-signup-header">
          <h2>Sign Up for an Account</h2>
          <p>
            Let's get you all set up so yu can start creating your first
            application experience
          </p>
        </div>
        <div className="for-signup-form">
          <form className="for-signup-form-elements">
            <div className="form-names">
              <div className="form-names-elements">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter Your First Name"
                ></input>
              </div>
              <div className="form-names-elements">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter Your Last Name"
                ></input>
              </div>
            </div>
            <div className="form-user-elements">
              <div className="form-user">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                ></input>
              </div>
              <div className="form-user">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
