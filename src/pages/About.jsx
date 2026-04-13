import { Link } from 'react-router-dom'
import { CheckCircle, Target, Eye, Dumbbell, Users, Trophy, Star } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=100&fit=crop"
          alt="Power Fitness Zone gym"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Our Story
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase gold-gradient-text"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-[rgba(212,175,55,0.3)] rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=100&fit=crop"
                alt="Inside Power Fitness Zone"
                className="relative rounded-2xl w-full h-[500px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-bold text-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Since 2019
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              EST. 2019 • SURANDAI
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              More Than a Gym —{' '}
              <span className="gold-gradient-text">A Transformation Hub</span>
            </h2>
            <p className="text-[#A0A0A0] leading-relaxed mb-8">
              Power Fitness Zone was founded with one goal — to bring world-class fitness
              culture to Surandai. We believe every person deserves access to expert coaching,
              premium equipment, and a community that pushes them to be their best. From our
              humble beginnings, we&apos;ve grown into the most trusted fitness brand in
              Tirunelveli district, transforming hundreds of lives along the way.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'State-of-the-art imported equipment',
                'Certified personal trainers with proven track records',
                'Supportive community of 500+ active members',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#D4AF37] shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold">
              Join Us Today
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Purpose" label="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="glass rounded-2xl p-10 h-full hover:border-[#D4AF37] transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-6">
                  <Target size={28} className="text-[#D4AF37]" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-4 uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Mission
                </h3>
                <p className="text-[#A0A0A0] leading-relaxed">
                  To empower every individual in Surandai and beyond with the tools,
                  knowledge, and motivation to achieve their fitness goals. We are
                  committed to building a healthier, stronger community through
                  world-class training and unmatched dedication.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="glass rounded-2xl p-10 h-full hover:border-[#D4AF37] transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-6">
                  <Eye size={28} className="text-[#D4AF37]" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-4 uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Vision
                </h3>
                <p className="text-[#A0A0A0] leading-relaxed">
                  To become Tamil Nadu&apos;s most recognized fitness brand known for
                  transforming lives, setting industry standards, and proving that
                  premium fitness is not just for big cities — it belongs everywhere
                  passion and dedication exist.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#0a0a0a] border-y border-[rgba(212,175,55,0.15)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Dumbbell, value: '500+', label: 'Active Members' },
            { icon: Users, value: '10+', label: 'Expert Trainers' },
            { icon: Trophy, value: '5+', label: 'Years of Excellence' },
            { icon: Star, value: '4.9', label: 'Google Rating' },
          ].map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center">
                <stat.icon size={32} className="text-[#D4AF37] mx-auto mb-3" />
                <p
                  className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </p>
                <p className="text-[#A0A0A0] text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )
}
