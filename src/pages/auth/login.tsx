import React, { useState, useReducer } from "react";
import XoUtil from "@utils/XoUtil";
import { useDebounce } from "@utils/eventUtil";
import Image from "next/image";
interface State {
  currentPage: "login" | "signup"; // 로그인, 회원가입 페이지 전환을 위함
}

interface FieldStatus<T> {
  // error, loading도 함께 정의하기 위해서
  userId: T;
  userName: T;
  password: T;
  email: T;
  birthday: T;
  phone: T;
}
interface SignUp {
  userId: string;
  userName: string;
  password: string;
  email: string;
  birthday: string;
  phone: string;

  loadings: FieldStatus<boolean>;
  errors: FieldStatus<string>;
}

const Login: React.FC = () => {
  const [state, setState] = useState<State>({
    currentPage: "login",
  });

  const HandleCurrentPage = () => {
    setState((prevState: State) => ({
      currentPage: prevState.currentPage === "login" ? "signup" : "login", // 로그인 페이지, 회원가입 페이지 전환
    }));
  };

  const initialSignUpState: SignUp = {
    // 회원가입 시 사용자 정보
    userId: "",
    userName: "",
    password: "",
    email: "",
    birthday: "",
    phone: "",
    errors: {
      // 정규식 오류 시 이유
      userId: "",
      userName: "",
      password: "",
      email: "",
      birthday: "",
      phone: "",
    },
    loadings: {
      // 정규식 리턴 로딩 확인
      userId: false,
      userName: false,
      password: false,
      email: false,
      birthday: false,
      phone: false,
    },
  };

  const SignUpReducer = (state: SignUp, action: any): SignUp => {
    // 로딩, 필드, 에러 관리
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          loadings: {
            ...state.loadings,
            [action.payload.field]: action.payload.value,
          },
        };
      case "SET_FIELD":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "SET_ERROR":
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.payload.field]: action.payload.value,
          },
        };
      default:
        return state;
    }
  };

  const [regex, regDispatch] = useReducer(SignUpReducer, initialSignUpState);

  const CheckRegex = async (field: string, inputValue: string) => {
    regDispatch({
      type: "SET_LOADING",
      payload: { field: field, value: false },
    });

    let url = "/sg/s0a01";
    let data: Record<string, any> = {};

    data.inputValue = inputValue;
    data.field = field;

    let response: Record<string, any> = await XoUtil.ajax(
      url,
      "POST",
      data,
      () => {}
    );

    if (response.status === "success") {
    }
  };

  const HandleInput = (field: string, inputValue: string) => {
    regDispatch({
      type: "SET_FIELD",
      payload: { field: field, value: inputValue },
    });
    debouncedCheckRegex(field, inputValue);
  };
  const debouncedCheckRegex = useDebounce(
    (field: string, inputValue: string) => {
      CheckRegex(field, inputValue);
    },
    1000
  );

  return (
    <div className="login-page">
      <div className="login-container">
        {state.currentPage === "login" ? ( // 로그인 페이지
          <div>
            <div className={`login-card signin`}>
              <div className={"box-center"}>
                <Image
                  className="icon-image"
                  src="/resource/images/movie_black_icon.png"
                  width={"100"}
                  height={"100"}
                  alt=""
                />
                <h2>Sign in to Panorama</h2>

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
                  onClick={() => HandleCurrentPage()}
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
                  onClick={() => HandleCurrentPage()}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        ) : (
          // 회원가입 페이지
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
                  onClick={() => HandleCurrentPage()}
                >
                  Signin
                </button>
              </div>
            </div>

            <div className={`login-card signup`}>
              <div className={"box-center"}>
                <Image
                  className="icon-image"
                  src="/resource/images/movie_black_icon.png"
                  width={"100"}
                  height={"100"}
                  alt=""
                />
                <h2>Become a Member</h2>
                <form className="form-container">
                  <div className="f-box">
                    <input
                      className="gray-input w180 mr5"
                      type="text"
                      placeholder="아이디"
                      value={regex.userId}
                      onChange={(e) => HandleInput("userId", e.target.value)}
                    />
                    <button className="btn btn-dark w80 fs12 ml5">
                      중복확인
                    </button>
                  </div>

                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="password"
                      placeholder="비밀번호"
                      onChange={(e) => HandleInput("password", e.target.value)}
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="[선택] 이메일 주소"
                      onChange={(e) => HandleInput("email", e.target.value)}
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="이름"
                      onChange={(e) => HandleInput("userName", e.target.value)}
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="생년월일 8자리"
                      maxLength={8}
                      onChange={(e) => HandleInput("birthday", e.target.value)}
                    />
                  </div>
                  <div className="login-input-box">
                    <input
                      className="gray-input w270"
                      type="text"
                      placeholder="휴대전화번호"
                      onChange={(e) => HandleInput("phone", e.target.value)}
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
