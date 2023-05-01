export default function LoginPage(){
    return(
        <div className="Login-panel">
            <h2>로그인</h2>
            <form method="post">
                <input name="username" placeholder="username"></input>
                <input name="password" placeholder="password"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}