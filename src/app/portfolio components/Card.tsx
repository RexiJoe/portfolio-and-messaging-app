import Image from "next/image"

type props = {
    title: string,
    description: string,
    img: string,
    children: React.ReactNode
}

export default function Card({title, description, img, children}:props){
    return(
        <div className="bg-gray-800 cursor-pointer rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Image src={img} alt="Proyecto 1" className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-teal-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {children}
                </div>
            </div>
        </div>
    )
}