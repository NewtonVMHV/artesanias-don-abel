const Footer = () => {

    return(

        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Artesanías Don Abel</a>
              </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="#Servicios" className="mr-4 hover:underline md:mr-6">Servicios</a>
                    </li>
                    <li>
                        <a href="#Productos" className="mr-4 hover:underline md:mr-6">Productos</a>
                    </li>
                    <li>
                        <a href="#Contacto" class="hover:underline">Contactos</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer