import imagen_1 from "../../resources/1.png";
import imagen_2 from "../../resources/2.png";
import imagen_3 from "../../resources/3.png";
import imagen_4 from "../../resources/4.png";
import imagen_5 from "../../resources/5.png";
import imagen_6 from "../../resources/6.png";
import imagen_7 from "../../resources/7.png";
import imagen_8 from "../../resources/8.png";
import imagen_9 from "../../resources/9.png";
const Producto = () => {
    return(
        <section className="bg-white" id="Productos">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Tenemos los siguientes productos</h2>
                    <p className="text-gray-500 sm:text-xl">Nosotros presentamos las mejores artesanías con concha y caracol para nuestros clientes.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_1} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_5} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_3} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_4} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_2} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_6} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_7} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_8} alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={imagen_9} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Producto