export default function LoginPage(){
    return(
        <div className="Login-panel">
            <h2>로그인</h2>
            <form method="post">
                <input placeholder="username"></input>
                <input placeholder="password"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}