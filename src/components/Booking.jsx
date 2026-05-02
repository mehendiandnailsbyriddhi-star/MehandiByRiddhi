import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
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
    const message = `Hi Riddhi! I would like to book a session.%0A%0A*Name:* ${formData.name}%0A*Event:* ${formData.event}%0A*Date:* ${formData.date}%0A*Location:* ${formData.location}%0A%0APlease let me know your availability and pricing.`;
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
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
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6 text-white">Book Your Mehndi Session</h2>
              <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed">
                Whether it's your big day or a special celebration, let's create something beautiful together. 
                <span className="block mt-2 font-medium text-[#C9A646]">Limited slots available – Book in advance to secure your date!</span>
              </p>

              <div className="space-y-6 mb-10">
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#C9A646] transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Chat with us</p>
                    <p className="font-medium text-lg">+91 98765 43210</p>
                  </div>
                </a>
                
                <a href="tel:+919876543210" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#C9A646] transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call us</p>
                    <p className="font-medium text-lg">+91 98765 43210</p>
                  </div>
                </a>
                
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#C9A646] transition-colors">
                    <InstagramIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Follow our work</p>
                    <p className="font-medium text-lg">@MehndiByRiddhi</p>
                  </div>
                </a>
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
                  <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select 
                    id="event" 
                    name="event"
                    required
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C9A646] focus:border-transparent outline-none transition-all text-gray-800 bg-white"
                  >
                    <option value="" disabled>Select event type</option>
                    <option value="Bridal">Bridal Mehndi</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Guest">Guest/Party Mehndi</option>
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
      </div>
    </section>
  );
}
