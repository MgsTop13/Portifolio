type Projects = {
    id: number,
    name: string,
    description: string,
    logo: string,
    imgs: string
};

import "../styles/projects.scss";
import Home from "../public/home.jpg";
import Logo from "../public/logod.png";

const myProjects: Projects[] = [
    {
        id: 0,
        name: "Ogeorus Security",
        description: "Um projeto que contém a segurança dos seus usuários com páginas de verificar sehna recomendar senhas, verificar arquivos e links e instruir os usuários a como se defender de vírus",
        logo: Logo,
        imgs: Home
    }
]


export default function ProjectsComponent(){
    return(
        myProjects.map((project) => (
            <div key={project.id} className="card">
                <div className="info">
                    <h1>{project.name}</h1>
                    <h3>{project.description}</h3>
                </div>
                <div className="imgs">
                    <img src={project.logo} alt="LOGO" />

                    <div className="imgs2">
                        <img src={project.imgs} alt="" />
                    </div>
                </div>
            </div>
        ))
    )
}