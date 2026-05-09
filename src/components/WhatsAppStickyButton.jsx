import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppStickyButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <span className="absolute w-14 h-14 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      <motion.a
        href="https://wa.me/99774418119"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1EBE5A] transition-colors flex items-center justify-center group z-10"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-[#1F3D2B] text-sm font-medium py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Book your session
        </span>
      </motion.a>
    </div>
  );
}
