

import Link from "next/link"
import { getCoverImage, getVideoJuego } from "./servicios/videojuegos"
import { Pagination } from "./components/Pagination"


export default async function Home( { searchParams }) {

  const { page } = searchParams

  const nuwPage = page ? parseInt(page) : 1

  const {data, pagination } = await getVideoJuego({ page: nuwPage })
  console.log(page)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <h1 className="text-4xl font-bold text-center text-white">Videojuegos</h1>
      
      {
        data.map(({ titulo , descripcion , id , cover }) => (
            <Link href='#' className="flex flex-col items-center bg-white border-gray-200 rounded-lg shadow md:flex-row 
            md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2" key={id}>
                
                    <img 
                        className="object-cover w-full h-48 rounded-lg rounded-b-none md:w-48 md:h-full md:rounded-lg md:rounded-l-none" 
                        src={getCoverImage(cover)} 
                        alt={titulo} 
                    />
                <div className="p-5">
                  
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
                 
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
                </div>
            </Link>
        )
        )
      }
      <Pagination Pagination={ pagination }/>
    </main>
  )
}
