import React, { useState } from "react";

interface State {
  currentPage: "login" | "signup";
}

const Login = () => {
  const [state, setState] = useState({
    currentPage: "login",
  });

  const handleCurrentPage = () => {
    setState((prevState) => ({
      currentPage: prevState.currentPage === "login" ? "signup" : "login",
    }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {state.currentPage === "login" ? (
          <div>
            <div className={`login-card signin`}>
              <div className={"box-center"}>
                <img
                  className="icon-image"
                  src="/resource/images/movie_write_icon.png"
                  width={"100px"}
                  height={"100px"}
                  alt=""
                />
                <h2>Sign in to Paranoma</h2>

                <form className="form-container">
                  <span className="left-aligned">
                    Username or email address
                  </span>
                  <input
                    className="gray-input"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    className="gray-input"
                    type="password"
                    placeholder="Password"
                  />
                </form>
                <button
                  className="text-button gray-text mb20"
                  onClick={() => handleCurrentPage()}
                >
                  Forgot your password?
                </button>
                <button className="orange-button" type="submit">
                  Login
                </button>
              </div>
            </div>

            <div className={`login-card-sign-right show`}>
              <div className="box-center">
                <h2 className="white-text">Hello, Friend!</h2>
                <span className="white-text fs12 mb20">
                  Share your screenplay and let's write a new chapter in film
                  together.
                </span>
                <button
                  className="write-outline-button"
                  onClick={() => handleCurrentPage()}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={`login-card-sign-left show`}>
              <div className="box-center">
                <h2 className="white-text">Welcome back!</h2>
                <span className="white-text fs12 mb20">
                  Ready to continue where you left off? Log in to access your
                  account.
                </span>
                <button
                  className="write-outline-button"
                  onClick={() => handleCurrentPage()}
                >
                  Signin
                </button>
              </div>
            </div>

            <div className={`login-card signup`}>
              <div className={"box-center"}>
                <img
                  className="icon-image"
                  src="/resource/images/movie_write_icon.png"
                  width={"100px"}
                  height={"100px"}
                  alt=""
                />
                <h2>Become a Member</h2>
                <form className="form-container">
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="아이디"
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="password"
                      placeholder="비밀번호"
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="[선택] 이메일 주소"
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="이름"
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="생년월일 8자리"
                      maxLength={8}
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="휴대전화번호"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;