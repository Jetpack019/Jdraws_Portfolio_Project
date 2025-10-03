import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, Send } from "lucide-react";

function ContactForm() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 flex items-center justify-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-700"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.73460529069!2d120.81989507401617!3d14.951872168382224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965559e98de989%3A0x113c1e592615fe9e!2sBatasan%20St.!5e0!3m2!1sen!2sph!4v1687659705638!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="w-full h-[400px] md:h-[500px]"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 border border-gray-700 rounded-2xl shadow-xl p-8 backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-[#00B2FF] mb-6 text-center">
            Contact Me
          </h2>

          <form
            action="https://formsubmit.co/jadebanag19@email.com"
            method="POST"
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-800 rounded-lg px-4">
                <User className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-transparent outline-none py-3 text-sm"
                  required
                />
              </div>

              <div className="flex items-center bg-gray-800 rounded-lg px-4">
                <Phone className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Contact #"
                  className="w-full bg-transparent outline-none py-3 text-sm"
                />
              </div>
            </div>

            <div className="flex items-center bg-gray-800 rounded-lg px-4">
              <Mail className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none py-3 text-sm"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full bg-gray-800 rounded-lg p-4 outline-none text-sm"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#00B2FF] to-[#1A73E8] font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
