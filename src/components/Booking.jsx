import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    event: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Riddhi! I would like to book a session.%0A%0A*Name:* ${formData.name}%0A*Service:* ${formData.event}%0A*Date:* ${formData.date}%0A*Location:* ${formData.location}%0A%0APlease let me know your availability and pricing.`;
    window.open(`https://wa.me/9974418119?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-[#1F3D2B] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C9A646] font-medium tracking-wider uppercase text-sm">Let's Connect</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6 text-white">Book Your Appointment</h2>
              <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                Whether it's your big day or a simple party, book the top Mehendi and nail artist in Bopal today. 
                <span className="block mt-2 font-medium text-[#C9A646]">Spots fill up fast – Book early to secure your date!</span>
              </p>

              <div className="space-y-6 mb-10">
                <a href="https://wa.me/9974418119" target="_blank" rel="noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#C9A646] transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Chat with us</p>
                    <p className="font-medium text-lg">+91 99744 18119</p>
                  </div>
                </a>
                
                <a href="tel:9974418119" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#C9A646] transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us</p>
                    <p className="font-medium text-lg">+91 99744 18119</p>
                  </div>
                </a>
                
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#C9A646] transition-colors">
                    <InstagramIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Follow our work</p>
                    <p className="font-medium text-lg">@MehendiByRiddhi</p>
                  </div>
                </a>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#C9A646] transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit us</p>
                    <p className="font-medium text-lg mb-1">Riddhi Prajapati</p>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                      804 Sun Aspire, Nr. Nilkanth villa bunglow, opp samprat residency, dps road bopal - shilaj, Ahmedabad - 380058
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-[#1F3D2B] mb-6 font-heading">Quick Booking Form</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A646] focus:border-transparent outline-none transition-all text-gray-800"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select 
                    id="event" 
                    name="event"
                    required
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A646] focus:border-transparent outline-none transition-all text-gray-800 bg-white"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Bridal Combo">Bridal Combo (Mehendi + Nails)</option>
                    <option value="Bridal Mehendi">Bridal Mehendi</option>
                    <option value="Bridal Nails">Bridal Nail Extensions</option>
                    <option value="Engagement Mehendi">Engagement / Party Mehendi</option>
                    <option value="Guest Mehendi">Guest Mehendi</option>
                    <option value="Nail Art">Nail Art / Manicure</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A646] focus:border-transparent outline-none transition-all text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input 
                      type="text" 
                      id="location" 
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A646] focus:border-transparent outline-none transition-all text-gray-800"
                      placeholder="City, Area"
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#1F3D2B] hover:bg-[#2A523A] text-white font-medium py-4 rounded-lg mt-4 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Book via WhatsApp</span>
                  <MessageCircle className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-gray-500 mt-3">We will get back to you within 24 hours.</p>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Google Maps Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <iframe 
            src="https://maps.google.com/maps?q=804%20Sun%20Aspire,%20Nr.%20Nilkanth%20villa%20bunglow,%20opp%20samprat%20residency,%20dps%20road%20bopal%20-%20shilaj,%20Ahmedabad,%20380058&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="MehendiByRiddhi Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
