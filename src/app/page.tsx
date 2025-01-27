import Experience from "./portfolio components/Experience";
import Footer from "./portfolio components/Footer";
import Header from "./portfolio components/Header";
import Skills from "./portfolio components/Skills";

// <div className="flex flex-col w-full h-full items-center " >Home</div>
export default function Home() {

  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      <Header/>

      <section className="container mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold mb-10 text-purple-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src="https://source.unsplash.com/random/300x200?tech&sig=1" alt="Proyecto 1" className="w-full h-48 object-cover bg-white" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>E-commerce Dark Tech</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Plataforma de comercio electrónico minimalista y oscura, enfocada en la venta de gadgets y tecnología de punta.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-600 text-white text-sm font-medium px-3 rounded-lg hover:bg-blue-500 transition-colors">React</span>
                <span className="bg-purple-600 text-white text-sm font-medium px-3 rounded-lg hover:bg-purple-500 transition-colors">Tailwind CSS</span>
                <span className="bg-pink-600 text-white text-sm font-medium px-3 rounded-lg hover:bg-pink-500 transition-colors">Node.js</span>
              </div>
            </div>
          </div>
          {/* Proyecto 2 */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src="https://source.unsplash.com/random/300x200?code&sig=2" alt="Proyecto 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Dashboard Analytics Pro</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Panel de control robusto para análisis de datos, con visualizaciones interactivas y reportes personalizados.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-green-500 transition-colors">Vue.js</span>
                <span className="bg-yellow-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors">Firebase</span>
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-500 transition-colors">Tailwind CSS</span>
              </div>
            </div>
          </div>
          {/* Proyecto 3 */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src="https://source.unsplash.com/random/300x200?api&sig=3" alt="Proyecto 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>API Documentation Hub</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Sitio web para documentación de APIs, con navegación intuitiva, ejemplos de código y pruebas interactivas.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-orange-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-orange-500 transition-colors">Angular</span>
                <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-red-500 transition-colors">NestJS</span>
                <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-500 transition-colors">PostgreSQL</span>
              </div>
            </div>
          </div>
          {/* Proyecto 4 */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src="https://source.unsplash.com/random/300x200?server&sig=4" alt="Proyecto 4" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Cloud Storage Secure</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Aplicación web para almacenamiento seguro en la nube, con encriptación de extremo a extremo y gestión de archivos avanzada.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-pink-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-pink-500 transition-colors">Next.js</span>
                <span className="bg-teal-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-teal-500 transition-colors">Contentlayer</span>
                <span className="bg-yellow-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors">Tailwind CSS</span>
              </div>
            </div>
          </div>
          {/* Proyecto 5 */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src="https://source.unsplash.com/random/300x200?database&sig=5" alt="Proyecto 5" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Database Manager Pro</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Herramienta web para la gestión de bases de datos, con interfaz gráfica intuitiva y soporte para múltiples sistemas.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-indigo-500 transition-colors">Svelte</span>
                <span className="bg-lime-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-lime-500 transition-colors">Serverless</span>
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-500 transition-colors">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience/>

      <Skills/>

      <Footer/>
    </div>

  );
}
