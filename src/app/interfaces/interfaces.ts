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
    titulo: string;
    duracion: string;
    descripcion: string;
}

export interface Proyecto{
    titulo: string;
    duracion: string;
    descripcion: string;
    repositorio: string;
    tecnologias: string[];
}

export interface Empresa{
    src: string;
    alt: string;
    web: string;
    empresa: string;
    puesto: string;
    duracion: string;
    descripcion: string;
}
