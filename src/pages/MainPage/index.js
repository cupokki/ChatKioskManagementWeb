import '../../App.css'
import './index.css'
import { useNavigate } from 'react-router-dom';




export default function MainPage(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
      };

    

    return(
        <div className="Main-panel">
            <p>Main Page!!!!!!!!!!!!!!!</p>
            <button onClick={handleClick}>test</button>
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
        </div>
    )
}