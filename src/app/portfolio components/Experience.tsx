

export default function Experience(){
    return(
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
    )
}