import { API_URL, API_URL_IMAGE } from '../config';

export async function getVideoJuego( { page } ) {
   console.log(page, 'getvideo')
   
    const res = await fetch(`${API_URL}videojuegos?populate[plataformas][fields][0]=nombre&populate[cover][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=1`)
    if (!res.ok) {
        throw new Error('Error en la petición')
    }

    const { data , meta} = await res.json()
    const { pagination } = meta

    const estaEslaDara = data.map(({ attributes , id, data  }) => {
        const { titulo, descripcion} = attributes
        const { url: cover } = attributes.cover.data.attributes
        
        
        return {
            id,
            titulo,
            descripcion,
            cover
            
        }
    })

    return {
        data: estaEslaDara,
        pagination
    }
}

export function getCoverImage (url) {
    return `${API_URL_IMAGE}${url}`
}
