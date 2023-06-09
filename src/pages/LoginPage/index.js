import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import axios from 'axios';

export default function LoginPage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
      };

      useEffect(() => {
        const test = async()=>{
            // const result = await axios.post('http://ec2-18-191-96-13.us-east-2.compute.amazonaws.com:8000/completion/new-session',{
            const result = await axios.post('http://localhost:8000/completion/new-session',{
                shop_id : 1
            }, {
                withCredentials: true // 쿠키 전달을 위해 필요한 옵션
              })
            console.log(result)
        }
        test()
    },[])

    const postHandler = async()=>{
        // const result = await axios.post('http://ec2-18-191-96-13.us-east-2.compute.amazonaws.com:8000/completion',{
        const result = await axios.post('http://localhost:8000/completion',{
            msg : "불고기버거 주세요"
        }, {
            withCredentials: true // 쿠키 전달을 위해 필요한 옵션
          })
        console.log(result)
    }
    return(
        <div className="Login-panel">
            <button onClick={handleClick}>about</button>
            <button onClick={postHandler}>post</button>
            <h2>로그인</h2>
            <form method="post">
                <input name="username" placeholder="username"></input>
                <input name="password" placeholder="password"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}