

export default function Header(){
    return(
        <header className="py-20 text-center bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-5">
                <h1 className="text-5xl font-bold tracking-tight mb-6 text-blue-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Daniel Ayala Gutierrez
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    Desarrollador Web apasionado por transformar ideas en realidad digital. <br />
                    Especializado en crear aplicaciones web modernas, funcionales y con experiencias de usuario excepcionales.
                </p>
                <div className="bg-black flex justify-self-center py-1 px-2 mt-3 rounded-lg cursor-pointer border-2 text-slate-400 border-orange-600 hover:text-white" >
                    Descargar CV
                </div>
            </div>
      </header>
    )
}