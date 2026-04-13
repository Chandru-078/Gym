import { Link } from 'react-router-dom'
import { Dumbbell, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    'Gym & Weight Training',
    'Personal Training',
    'Nutrition Coaching',
    'Cardio Zone',
    'Group Classes',
    'Body Transformation',
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(212,175,55,0.3)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell size={24} className="text-[#D4AF37]" />
              <span
                className="text-xl font-bold tracking-wider gold-gradient-text"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                POWER FITNESS ZONE
              </span>
            </Link>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
              Forging Champions Since 2019. Surandai&apos;s premier fitness destination
              with world-class equipment and expert trainers.
            </p>
            <div className="flex gap-4">
              {[
                { icon: InstagramIcon, href: '#', label: 'Instagram' },
                { icon: FacebookIcon, href: '#', label: 'Facebook' },
                { icon: YoutubeIcon, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3
              className="text-lg font-bold tracking-wider uppercase mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#A0A0A0] text-sm hover:text-[#D4AF37] transition-colors duration-300 hover:pl-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3
              className="text-lg font-bold tracking-wider uppercase mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#A0A0A0] text-sm hover:text-[#D4AF37] transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3
              className="text-lg font-bold tracking-wider uppercase mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#A0A0A0]">
                  Main Road, Surandai, Tirunelveli District, Tamil Nadu – 627859
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <a href="tel:+919876543210" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <a href="mailto:info@powerfitnesszone.com" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                  info@powerfitnesszone.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-[#A0A0A0]">
                  <p>Mon–Sat: 5:00 AM – 11:00 PM</p>
                  <p>Sunday: 6:00 AM – 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(212,175,55,0.15)] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#A0A0A0]">
          <p>&copy; 2026 Power Fitness Zone. All Rights Reserved.</p>
          <p>Surandai, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  )
}
