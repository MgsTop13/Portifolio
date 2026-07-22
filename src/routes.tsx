import { BrowserRouter, Route, Routes } from "react-router";
import RenderImgs2 from "./teste";
import App from "./App";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/" />
                <Route element={<RenderImgs2 />} path="/Teste" />
            </Routes>
        </BrowserRouter>
    )
}