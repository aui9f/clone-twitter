import {React} from "react";
import './styles.css'
const Login = () => {
    return (
        <div className="login-page">
           <div>
            <header>
                    <div className="logo"></div>
                    <p>지금 일어나고 있는 일</p>
                </header>
                <form className="signup">
                    <p>오늘 트위터에 가입하세요.</p>
                    <div className="btn"><div className="i-google"></div><p>Google 에서 가입하기</p></div>
                    <div className="btn"><div className="i-apple"></div><p>Apple 에서 가입하기</p></div>
                    <div className="divider"><div></div><p>또는</p><div></div></div>
                    <div className="btn email"><p>이메일 주소로 가입하기</p></div>
                </form>

                <form className="login">
                    <p>이미 트위터에 가입하셨나요?</p>
                    <div className="btn "><p>로그인</p></div>
                </form>
            </div>
        </div>
    )
}

export default Login;