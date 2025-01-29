export interface Tecnologia{
    src: string;
    alt: string;
    nombre: string;
    descripcion: string;
}

export interface Educacion{
    src: string;
    alt: string;
    web: string;
    institucion: string;
    ubicacion: string;
    titulo: string;
    duracion: string;
    descripcion: string;
}

export interface Proyecto{
    titulo: string;
    duracion: string;
    descripcion: string;
    demo: string;
    video: string;
    repositorio: string[];
    tecnologias: string[];
    src: string;
    alt: string;
}

export interface Empresa{
    src: string;
    alt: string;
    web: string;
    empresa: string;
    ubicacion: string;
    puesto: string;
    duracion: string;
    descripcion: string;
}
