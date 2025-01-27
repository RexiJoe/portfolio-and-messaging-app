

export default function Skills(){
    return(
        <section className="container mx-auto px-5 py-20 border-t border-gray-700">
            <h2 className="text-3xl font-bold mb-10 text-purple-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Habilidades Técnicas
            </h2>
            {/* Front-End */}
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
                {/* Back-End */}
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
                {/* DevTools and others */}
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
    )
}