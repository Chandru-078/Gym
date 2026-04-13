import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dumbbell, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Membership', path: '/membership' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[rgba(212,175,55,0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Power Fitness Zone Home">
            <Dumbbell
              size={28}
              className="text-[#D4AF37] transition-transform duration-300 group-hover:rotate-12"
            />
            <span
              className="text-xl sm:text-2xl font-bold tracking-wider gold-gradient-text"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              POWER FITNESS ZONE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-gold !py-2.5 !px-6 !text-xs"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-[rgba(212,175,55,0.2)] px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 px-4 rounded-lg text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-[#D4AF37] bg-[rgba(212,175,55,0.1)]'
                  : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link to="/contact" className="btn-gold w-full !text-xs">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
