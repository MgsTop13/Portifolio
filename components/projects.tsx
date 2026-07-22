type Projects = {
    id: number,
    name: string,
    description: string,
    logo: string,
    imgs: string[]
};

import "../styles/projects.scss";

//Ogeorus
    import LogoOgeorus from "/logod.png";
    import HomeOgeorus from "/home.jpg";
    import PasswordOgeorus from "/password.jpg"


import RenderImgs from "./renderCarrossel.tsx"



const myProjects: Projects[] = [
    {
        id: 0,
        name: "Ogeorus Security",
        description: "Um projeto que contém a segurança dos seus usuários com páginas de verificar sehna recomendar senhas, verificar arquivos e links e instruir os usuários a como se defender de vírus",
        logo: LogoOgeorus,
        imgs: [HomeOgeorus, PasswordOgeorus]
    }
]



export default function ProjectsComponent(){
    return(
        myProjects.map((project) => (
            <div key={project.id} className="card">
                <div className="info">
                    <h1 className="titleCard">{project.name}</h1>
                    <h3 className="descriptionCard">{project.description}</h3>
                </div>
                <div className="imgs">
                    <img src={project.logo} alt="LOGO" />

                    <div className="imgs2">
                        <RenderImgs images={project.imgs} />                       
                    </div>
                </div>
            </div>
        ))
    )
}