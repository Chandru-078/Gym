import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=100&fit=crop"
          alt="Contact Power Fitness Zone"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            We&apos;d Love to Hear From You
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase gold-gradient-text"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Contact Us"
            subtitle="Have a question or ready to start your fitness journey? Reach out to us anytime."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                {/* Contact Cards */}
                {[
                  {
                    icon: MapPin,
                    title: 'Our Location',
                    lines: ['Power Fitness Zone, Main Road,', 'Surandai, Tirunelveli District,', 'Tamil Nadu – 627859'],
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    lines: ['+91 98765 43210'],
                    href: 'tel:+919876543210',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    lines: ['info@powerfitnesszone.com'],
                    href: 'mailto:info@powerfitnesszone.com',
                  },
                  {
                    icon: Clock,
                    title: 'Working Hours',
                    lines: ['Monday–Saturday: 5:00 AM – 11:00 PM', 'Sunday: 6:00 AM – 9:00 PM'],
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center shrink-0">
                      <item.icon size={22} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      {item.lines.map((line, j) => (
                        item.href ? (
                          <a key={j} href={item.href} className="block text-[#A0A0A0] text-sm hover:text-[#D4AF37] transition-colors">
                            {line}
                          </a>
                        ) : (
                          <p key={j} className="text-[#A0A0A0] text-sm">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}

                {/* Social Icons */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: InstagramIcon, href: '#', label: 'Instagram' },
                      { icon: FacebookIcon, href: '#', label: 'Facebook' },
                      { icon: YoutubeIcon, href: '#', label: 'YouTube' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Google Map */}
                <div className="rounded-xl overflow-hidden border border-[rgba(212,175,55,0.2)] h-[250px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.063505905886!2d77.41!3d8.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04127e30e7328d%3A0x3e0cf04890c73d69!2sSurandai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Power Fitness Zone Location"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Contact Form */}
            <AnimatedSection direction="right">
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 sm:p-10 space-y-6"
              >
                <h3
                  className="text-2xl font-bold text-white uppercase mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Send Us a Message
                </h3>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-sm text-[#A0A0A0] mb-2 block">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111111] text-white border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3.5 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 placeholder:text-gray-600"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-sm text-[#A0A0A0] mb-2 block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111111] text-white border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3.5 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 placeholder:text-gray-600"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="text-sm text-[#A0A0A0] mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#111111] text-white border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3.5 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 placeholder:text-gray-600"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="text-sm text-[#A0A0A0] mb-2 block">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#111111] text-white border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3.5 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="gym">Gym & Weight Training</option>
                    <option value="personal">Personal Training</option>
                    <option value="nutrition">Nutrition Coaching</option>
                    <option value="cardio">Cardio Zone</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-sm text-[#A0A0A0] mb-2 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-[#111111] text-white border border-[rgba(212,175,55,0.2)] rounded-xl px-4 py-3.5 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 resize-none placeholder:text-gray-600"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>

                {submitted && (
                  <div className="text-center text-green-400 text-sm py-2 bg-green-400/10 rounded-lg">
                    ✅ Thank you! We&apos;ll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
