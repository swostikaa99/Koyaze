import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Globe,
  CheckCircle,
  Send,
  MessageCircle,
  Phone,
} from "lucide-react";
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

export default function BookCon() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        consultationType: "",
        preferredDate: "",
        preferredTime: "",
        notes: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-[#f8f6f3] dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1920&h=900&fit=crop"
            alt="Book Consultation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto mt-20 px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#c9a962] tracking-[0.35em] text-sm uppercase mb-6"
          >
            Personal Appointment
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white tracking-wide mb-6"
          >
            Book Consultation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto"
          >
            Schedule an in-store or virtual consultation with our tailoring
            specialists.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-[#1a1a1a] dark:text-white mb-4">
                  Why book with us?
                </h3>
                <ul className="space-y-3 text-[#8b7e74] dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-[#c9a962] mt-0.5" />
                    Flexible appointment slots
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#c9a962] mt-0.5" />
                    Dedicated 1-on-1 consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-[#c9a962] mt-0.5" />
                    Virtual fitting for global clients
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h4 className="text-white text-base font-medium mb-3">
                  Need quick assistance?
                </h4>
                <div className="space-y-3 text-white/80 text-sm">
                  <a
                    href="https://wa.me/9779702691187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#c9a962] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp us
                  </a>
                  <a
                    href="tel:+9779702691187"
                    className="inline-flex items-center gap-2 hover:text-[#c9a962] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +977 970 269 1187
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-sm"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-[#1a1a1a] mb-2">
                    Consultation Requested
                  </h3>
                  <p className="text-[#8b7e74]">
                    Thank you. Our team will confirm your slot within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
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

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+977 98XXXXXXXX"
                        required
                        className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) =>
                          handleChange("country", e.target.value)
                        }
                        placeholder="Nepal"
                        required
                        className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div className="space-y-2 sm:col-span-1">
                      <Label>Consultation Type *</Label>
                      <Select
                        value={formData.consultationType}
                        onValueChange={(value) =>
                          handleChange("consultationType", value)
                        }
                        required
                      >
                        <SelectTrigger className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in-store">In-store</SelectItem>
                          <SelectItem value="virtual">Virtual</SelectItem>
                          <SelectItem value="home-visit">Home Visit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          handleChange("preferredDate", e.target.value)
                        }
                        required
                        className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) =>
                          handleChange("preferredTime", value)
                        }
                        required
                      >
                        <SelectTrigger className="h-12 border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      placeholder="Tell us your preferred style, event date, and any specific requirements."
                      className="min-h-[120px] border-gray-300 focus:border-[#c9a962] focus:ring-[#c9a962]"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-md bg-[#1a1a1a] text-white hover:bg-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Confirm Booking
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
