import { useNavigate } from "react-router-dom";

export default function Komponenta1(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
        <h1>Welcome to Komponenta1!</h1>
        <p>Ovo je primjer korištenja React Router-a.</p>
        <p>Sad sam na pocetnoj Komponenti1.</p>
        <button onClick={handleClick}>Home</button>
        </>
    ); 
}