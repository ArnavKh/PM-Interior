import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
     const number = "917499722251";
     const message = "Hello, I would like to inquire about your services.";
     const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
     return (
          <a
               href={url}
               target="_blank"
               rel="noopener noreferrer"
               className="fixed bottom-6 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          >
               <FaWhatsapp size={28} />
          </a>
     );
}
