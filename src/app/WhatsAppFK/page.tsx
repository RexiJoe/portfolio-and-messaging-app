
import ChatCard from "@/components/project1 components/ChatCard";
import WsLists from "@/components/project1 components/WsLists";
import { chatListSchema } from "@/database/schemas/chatListSchema";

export default function Project1(){

    
        const chats: chatListSchema[] = [
            {
                id: "1", // Unique ID
                name: "Ana García",
                avatar: "",
                time: "10:30 AM",
                message: "Hola, ¿cómo estás hoy?",
            },
            {
                id: "2", // Unique ID
                name: "Carlos López",
                avatar: "",
                time: "10:45 AM",
                message: "Todo bien, gracias. ¿Y tú?",
            },
            {
                id: "3", // Unique ID
                name: "Laura Martínez",
                avatar: "",
                time: "11:00 AM",
                message: "Recordatorio de la reunión a las 3 PM.",
            },
            {
                id: "4", // Unique ID
                name: "Pedro Sánchez",
                avatar: "",
                time: "11:15 AM",
                message: "Entendido, gracias por el recordatorio.",
            },
            {
                id: "5", // Unique ID
                name: "Sofía Fernández",
                avatar: "",
                time: "11:30 AM",
                message: "Avísame si necesitas algo.",
            },
            {
                id: "6", // Unique ID
                name: "Diego Rodríguez",
                avatar: "",
                time: "11:45 AM",
                message: "Estoy trabajando en el informe.",
            },
            {
                id: "7", // Unique ID
                name: "Isabela Pérez",
                avatar: "",
                time: "12:00 PM",
                message: "Que tengas un buen almuerzo!",
            },
            {
                id: "8", // Unique ID
                name: "Javier Gómez",
                avatar: "",
                time: "12:15 PM",
                message: "Igualmente!",
            },
            {
                id: "9", // Unique ID
                name: "Valeria Torres",
                avatar: "",
                time: "12:30 PM",
                message: "Consulta rápida sobre el proyecto...",
            },
            {
                id: "10", // Unique ID
                name: "Sebastián Vargas",
                avatar: "",
                time: "12:45 PM",
                message: "Claro, dime.",
            },
            {
                id: "11", // Unique ID
                name: "Camila Castro",
                avatar: "",
                time: "1:00 PM",
                message: "Ya revisé los documentos.",
            },
            {
                id: "12", // Unique ID
                name: "Manuel Jiménez",
                avatar: "",
                time: "1:15 PM",
                message: "Gracias por tu ayuda.",
            },
            {
                id: "13", // Unique ID
                name: "Renata Ruiz",
                avatar: "",
                time: "1:30 PM",
                message: "No hay problema.",
            },
            {
                id: "14", // Unique ID
                name: "Andrés Herrera",
                avatar: "",
                time: "1:45 PM",
                message: "¿Tienes alguna actualización?",
            },
            {
                id: "15", // Unique ID
                name: "Daniela Silva",
                avatar: "",
                time: "2:00 PM",
                message: "En proceso, te informo pronto.",
            },
        ];
    
    return(

        <div className="flex flex-col w-full grow overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" >
            <WsLists/>
            {
                chats.map((chat)=>(<ChatCard {...chat} key={chat.name} />))
            }
        </div>

    )
}