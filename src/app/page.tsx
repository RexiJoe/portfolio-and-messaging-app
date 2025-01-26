
// <div className="flex flex-col w-full h-full items-center " >Home</div>
export default function Home() {

  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      <header className="py-24 text-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-5">
          <h1 className="text-5xl font-bold tracking-tight mb-6 text-blue-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Daniel Ayala Gutierrez
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Desarrollador Web apasionado por transformar ideas en realidad digital. <br />
            Especializado en crear aplicaciones web modernas, funcionales y con experiencias de usuario excepcionales.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold mb-10 text-purple-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src="https://source.unsplash.com/random/300x200?tech&sig=1" alt="Proyecto 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>E-commerce Dark Tech</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Plataforma de comercio electrónico minimalista y oscura, enfocada en la venta de gadgets y tecnología de punta.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-500 transition-colors">React</span>
                <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-500 transition-colors">Tailwind CSS</span>
                <span className="bg-pink-600 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-pink-500 transition-colors">Node.js</span>
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

      <section className="container mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold mb-10 text-purple-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Experiencia Laboral
        </h2>
        <div className="grid grid-cols-1 gap-10">
          {/* Experiencia 1 */}
          <div className="bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Desarrollador Web Frontend Senior</h3>
            <p className="text-gray-400 mb-2 font-semibold">Tech Solutions Corp</p>
            <p className="text-gray-500 mb-4">2021 - Presente</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Liderazgo técnico en el desarrollo de interfaces de usuario complejas y de alto rendimiento utilizando React y tecnologías modernas de frontend.</li>
              <li>Implementación de arquitecturas frontend escalables y mantenibles, enfocadas en la experiencia del usuario y la accesibilidad.</li>
              <li>Colaboración multidisciplinaria con equipos de diseño, backend y producto para la entrega exitosa de proyectos web innovadores.</li>
              <li>Mentoría y guía para desarrolladores junior, promoviendo las mejores prácticas de desarrollo y la mejora continua del equipo.</li>
            </ul>
          </div>
          {/* Experiencia 2 */}
          <div className="bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Desarrollador Web Full Stack</h3>
            <p className="text-gray-400 mb-2 font-semibold">Globex Startup</p>
            <p className="text-gray-500 mb-4">2019 - 2021</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Desarrollo integral de aplicaciones web, desde la concepción y diseño hasta la implementación frontend y backend.</li>
              <li>Trabajo con diversas tecnologías incluyendo Node.js, Express, bases de datos MongoDB y PostgreSQL, y frameworks frontend como Angular y Vue.js.</li>
              <li>Optimización de aplicaciones para rendimiento y escalabilidad, asegurando la calidad del código y la experiencia del usuario.</li>
              <li>Participación activa en la toma de decisiones técnicas y la planificación de proyectos en un entorno de startup ágil.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-20 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-10 text-purple-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Frontend</h4>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React, Vue.js, Angular, Svelte</li>
              <li>Tailwind CSS, Bootstrap, Material UI</li>
              <li>Responsive Design, UI/UX Principles</li>
              <li>Testing (Jest, Cypress)</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Backend</h4>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Node.js, Express.js</li>
              <li>Python (Flask, Django)</li>
              <li>Java (Spring Boot)</li>
              <li>RESTful APIs, GraphQL</li>
              <li>Bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB)</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Herramientas y Otros</h4>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Git, GitHub, GitLab</li>
              <li>Docker, Serverless Functions</li>
              <li>AWS, Google Cloud, Vercel, Netlify</li>
              <li>Metodologías Ágiles (Scrum, Kanban)</li>
              <li>SEO, Web Performance Optimization</li>
            </ul>
          </div>
        </div>
      </section>


      <footer className="py-12 text-center text-gray-500 border-t border-gray-700">
        <p>© 2024 Daniel Ayala Gutierrez. Todos los derechos reservados.</p>
        <p className="mt-2">
          Diseñado con <span className="text-pink-500 font-semibold">Tailwind CSS</span> y <span className="text-blue-300 font-semibold">React</span>
        </p>
      </footer>
    </div>

  );
}
