import Link from "next/link"

export function Pagination ({ Pagination }) {



    const { page, pageCount, total } = Pagination
    // console.log(page, pageCount, total, 'valores' )
    const isFirsPage = page === 1
    const isLastPage = page === total
  
    const prevPage = page - 1
    const nextPage = page + 1
    // console.log(isFirsPage, isLastPage, 'valores' )
    // console.log(nextPage, prevPage, 'valores paginas' )


    
    const prevPageUrl = isFirsPage ? '#' : `/?page=${prevPage}`
    const nextPageUrl = isLastPage ? '#' : `/?page=${nextPage}`

    console.log(prevPageUrl, nextPageUrl, 'valores')

  return (  
            <div className="flex flex-col items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Paginas <span className="font-semibold text-white dark:text-white">{page}</span> de  <span className="font-semibold text-white dark:text-white"> { isLastPage } 
                </span> of <span className="font-semibold text-white dark:text-white"> { total }</span> Videojuegos
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
            
            <Link href={prevPageUrl} className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 
                rounded-l ${isFirsPage ? 'opacity-20 pointer-events-none' : 'hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer'}`} disabled={isFirsPage }>
                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Prev
            </Link>

            <Link href={nextPageUrl} className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 
                rounded-l ${isLastPage ? 'opacity-20 pointer-events-none' : 'hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer'}`}disabled={isLastPage}>
                Next
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </div>
        </div>
    )
}