import axios from 'axios';
import '../../App.css'
import './index.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function MainPage(){
    const navigate = useNavigate();
    const [blob, setBlob] = useState(null);
    const handleClick = () => {
        navigate('/login');
      };
    const handleChange = async(e) => {
        const reader = new FileReader();
        reader.onload = () =>{
           setBlob(new Blob([reader.result], {type: 'audio/mpeg'}));
        }
        reader.readAsArrayBuffer(e.target.files[0]);
    }
    const handleClick2 = async() => {
        try{
            const formData = new FormData();
            formData.append('file', blob)
            const response = await axios.post('http://localhost:8000/voice/stt', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);

        }catch(e){
            console.log(e);
        }
    }

    return(
        <div className="Main-panel">
            <p>Main Page!!!!!!!!!!!!!!!</p>
            <button onClick={handleClick}>test</button>
            <input type='file' id='file' onChange={handleChange}></input>
            <table>
                <thead>
                    <th>품명</th>
                    <th>분류</th>
                    <th>설명</th>
                    <th>구성품</th>
                    <th>가격</th>
                </thead>
                
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
            <button onClick={handleClick2}>test</button>
        </div>
    )
}