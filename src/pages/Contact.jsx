import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  MessageCircle,
  Send,
  CheckCircle,
  Video,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses for international clients",
    value: "+977 970 269 1187",
    action: "https://wa.me/9779702691187",
    buttonText: "Chat Now",
    color: "bg-[#25D366]",
  },
  {
    icon: Phone,
    title: "Phone / Viber",
    description: "Direct line to our atelier",
    value: "+977 970 269 1187",
    action: "tel:+9779702691187",
    buttonText: "Call Us",
    color: "bg-[#7360F2]",
  },
  {
    icon: Video,
    title: "Video Consultation",
    description: "Virtual fittings for overseas clients",
    value: "Schedule online",
    action:
      "https://wa.me/9779702691187?text=I'd%20like%20to%20schedule%20a%20video%20consultation",
    buttonText: "Book Call",
    color: "bg-[#1a1a1a]",
  },
];

const faqs = [
  {
    question: "How long does it take to make a bespoke suit?",
    answer:
      "A fully bespoke suit typically takes 4-6 weeks from initial consultation to final delivery. This includes two fittings to ensure perfection.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. We use premium courier services to ensure your garments arrive safely. International shipping typically takes 5-10 business days.",
  },
  {
    question: "Can I get fitted remotely?",
    answer:
      "Absolutely. We offer detailed video consultations where we guide you through taking your own measurements. Many of our international clients have been fitted this way with excellent results.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept international bank transfers, major credit cards, and PayPal. A 50% deposit is required to begin work, with the balance due upon completion.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#f8f6f3] dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#1a1a1a] overflow-hidden min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=800&fit=crop"
            alt="Kayoze Atelier"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mt-20 px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a962] tracking-[0.4em] text-sm uppercase mb-6"
          >
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide mb-6"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're in Kathmandu or across the globe, we're here to help
            you begin your bespoke journey.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 border border-gray-200 hover:border-[#c9a962] transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center`}
                  >
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-1 flex items-center justify-center">
                  {method.title}
                </h3>
                <p className="text-sm text-[#8b7e74] mb-2 flex items-center justify-center">
                  {method.description}
                </p>
                <p className="text-[#1a1a1a] font-medium flex items-center justify-center">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] tracking-wide mb-4">
                Send Us a Message
              </h2>
              <p className="text-[#8b7e74] mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#8b7e74]">
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Smith"
                        required
                        className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+1 234 567 8900"
                        className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          handleChange("country", value)
                        }
                        required
                      >
                        <SelectTrigger className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="uae">
                            United Arab Emirates
                          </SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="singapore">Singapore</SelectItem>
                          <SelectItem value="hong-kong">Hong Kong</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                      required
                    >
                      <SelectTrigger className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bespoke-suit">
                          Bespoke Suit
                        </SelectItem>
                        <SelectItem value="woolen-jacket">
                          Woolen Jacket
                        </SelectItem>
                        <SelectItem value="bandi-coat">
                          Bandi Coat (Nehru Jacket)
                        </SelectItem>
                        <SelectItem value="custom-shirt">
                          Custom Shirts
                        </SelectItem>
                        <SelectItem value="overcoat">Overcoat</SelectItem>
                        <SelectItem value="wedding-attire">
                          Wedding Attire
                        </SelectItem>
                        <SelectItem value="fabric-samples">
                          Fabric Samples
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your requirements, preferred style, timeline, or any questions you have..."
                      required
                      className="min-h-[150px] border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                    />
                  </div>

                  <div className="relative group">
                    <div className="relative w-full h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
                      <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

                      <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="font-semibold text-sm h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg
                                className="animate-spin h-5 w-5"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <Send className="w-4 h-4" />
                              Send Message
                            </span>
                          )}
                        </button>
                      </div>
                      <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-[#c9a962] to-[#d4b876] blur-[30px]"></div>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Location Card */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-6 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#c9a962]" />
                  Our Atelier
                </h3>
                <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.4711664429615!2d85.31428497546747!3d27.709762876181212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f4d1ac0ef%3A0xbc4ab09780de0d61!2sKAYOZE%20DURBARMARG!5e1!3m2!1sen!2snp!4v1764222040871!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kayoze Location"
                  />
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-6 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#c9a962]" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-[#8b7e74]">
                  <div className="flex justify-between">
                    <span>Sunday - Friday</span>
                    <span className="text-[#1a1a1a]">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#1a1a1a]">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm">
                      <strong className="text-[#1a1a1a]">Timezone:</strong>{" "}
                      Nepal Standard Time (NPT / UTC+5:45)
                    </p>
                  </div>
                </div>
              </div>

              {/* International Clients */}
              <div className="bg-[#1a1a1a] p-8">
                <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#c9a962]" />
                  International Clients
                </h3>
                <p className="text-white/70 mb-6">
                  We welcome clients from around the world. Our virtual
                  consultation service allows us to take measurements via video
                  call, ensuring a perfect fit regardless of your location.
                </p>
                <a
                  href="https://wa.me/9779702691187?text=I'm%20interested%20in%20a%20virtual%20consultation%20from%20abroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a962] text-[#1a1a1a] 
                             text-sm tracking-wider uppercase hover:bg-[#d4b876] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Virtual Fitting
                </a>
              </div>

              {/* Social */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                  Follow Us
                </h3>
                <p className="text-[#8b7e74] mb-4">
                  View our latest creations and client testimonials on
                  Instagram.
                </p>
                <a
                  href="https://www.instagram.com/kayoze_durbarmarg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#1a1a1a] hover:text-[#c9a962] transition-colors"
                >
                  <svg className="w-6 h-6" fill="#E1306C" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @kayoze_durbarmarg
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c9a962] tracking-[0.3em] text-sm uppercase mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] tracking-wide">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#f8f6f3]"
              >
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#8b7e74] leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#8b7e74] mb-4">
              Have more questions? We're here to help.
            </p>
            <a
              href="https://wa.me/9779702691187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#b8943f] transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
