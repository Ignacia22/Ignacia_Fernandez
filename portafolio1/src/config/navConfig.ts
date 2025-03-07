export type LinksType = {
    title: string
    url: string
}


const navConfig = {
    links: [
        {title: 'Home', url: '/'},
        {title: 'About', url: '/about'},
        {title: 'Portafolio', url: '/portafolio'},
        {title: 'Contacto', url: '/contact'}
    ] as LinksType[]
};


export default navConfig

