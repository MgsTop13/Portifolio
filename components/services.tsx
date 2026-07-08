import "../styles/services.scss"

interface Services {
    id: number,
    name: string;
    description: string;
    services: string[];
    logo: string;
    value: number[];
    img: string;
}
const myServices: Services[] = [
    {
        id: 0,
        name: "Computadores",
        description: "Manutenção em pc's ou laptop's",
        services: ["Limpeza de Hardware", "Troca de pasta termíca", "Upgrade de peças"],
        logo: "ntenhokk",
        value: [49.99, 14.99, 74.99],
        img: "aaa"
    },

    {
        id: 1,
        name: "Celulares",
        description: "Manutenção em celulares android's",
        services: ["Manuntenção de tela/display", "Manuntenção de conectores", "Troca de baterias", "Problemas de sistemas"],
        logo: "ntenhokk",
        value: [120, 59.99, 74.99, 14.99],
        img: "aaa"
    },

    {
        id: 2,
        name: "WebSites",
        description: "Desenvolvimento de sites para lojas",
        services: ["Site simples (cardápio)", "Site com integração a apps", "Sites complexos"],
        logo: "ntenhokk",
        value: [799.99, 1299.99, 1499.99],
        img: "aaa"
    }
]

let services1 : any[] = [];


for (let category = 0; category < myServices.length; category++) {
    for (let itens = 0; itens < myServices[category].services.length; itens++) {
        services1.push({
            category: myServices[category].name,
            name: myServices[category].services[itens],
            value: myServices[category].value[itens]
        })
    }
}

export default function ServicesC() {
    return (
        myServices.map((service) => (
            <div className={`service ${service.name}`} key={service.id}>
                <h1 className="title2">{service.name}</h1>
                <h2 className="desc1">{service.description}</h2>

                {services1
                    .filter((item) => item.category === service.name)
                    .map((item) => (
                        <div className="products">
                            <h2 className="name">{item.name}</h2>
                            <h2 className="value">R${item.value}</h2>
                        </div>
                    ))}
            </div>
        ))

    )
}