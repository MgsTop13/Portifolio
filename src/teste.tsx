import { useEffect, useState } from "react"


import HomeOgeorus from "/home.jpg";
import PasswordOgeorus from "/password.jpg"


const images: string[] = [HomeOgeorus, PasswordOgeorus]


export default function RenderImgs2() {
    const [index, setIndex] = useState<number>(0);
    
    function GoLeft(){
        setIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }   

    function GoRigth(){
        setIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    } 




    return (
        <section style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            width: "100%",
            position: "relative",
            marginTop: "30%"
        }}>
            <div onClick={GoLeft}>Left</div>
            
            <img src={images[index]} 
                style={{
                    width: "60%"
                }} />

            <div onClick={GoRigth}>Rigth</div>
        </section>
    )
}
