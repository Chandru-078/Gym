import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ChevronDown, Dumbbell, Users, Trophy, Star,
  Award, Apple, MapPin, ArrowRight
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

/* ───── Counter Component ───── */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ───── HOME PAGE ───── */
export default function Home() {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=100&fit=crop"
            alt="Power Fitness Zone gym interior"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D4AF37] text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-6"
          >
            Surandai&apos;s Premier Fitness Destination
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-white">Unleash Your</span>
            <br />
            <span className="gold-gradient-text">Inner</span>
            <br />
            <span className="text-white">Beast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mt-8 leading-relaxed"
          >
            Transform your body. Elevate your mind. Join Power Fitness Zone
            and begin the journey to the strongest version of yourself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link to="/contact" className="btn-gold">
              Start Your Journey
            </Link>
            <Link to="/services" className="btn-gold-outline">
              Explore Programs
            </Link>
          </motion.div>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown size={32} className="text-[#D4AF37] animate-bounce-slow" />
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative bg-[#111111] py-16 border-y border-[rgba(212,175,55,0.15)]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Dumbbell, number: 500, suffix: '+', label: 'Active Members' },
            { icon: Users, number: 10, suffix: '+', label: 'Expert Trainers' },
            { icon: Trophy, number: 5, suffix: '+', label: 'Years of Excellence' },
            { icon: Star, number: 4.9, suffix: '', label: 'Google Rating', isDecimal: true },
          ].map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center relative">
                <stat.icon size={32} className="text-[#D4AF37] mx-auto mb-3" />
                <p
                  className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.isDecimal ? (
                    <span>{stat.number}{stat.suffix}</span>
                  ) : (
                    <Counter end={stat.number} suffix={stat.suffix} />
                  )}
                </p>
                <p className="text-[#A0A0A0] text-sm mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[rgba(212,175,55,0.2)]" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 px-4 bg-[#0a0a0a] noise-bg">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Why Us"
            title="Why Power Fitness Zone?"
            subtitle="We bring international-standard fitness to the heart of Surandai with passion, expertise, and premium facilities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Dumbbell,
                title: 'World-Class Equipment',
                desc: 'Premium imported machines and free weights from leading global brands for every muscle group.',
              },
              {
                icon: Award,
                title: 'Certified Expert Trainers',
                desc: 'Our trainers hold nationally recognized certifications and years of hands-on coaching experience.',
              },
              {
                icon: Apple,
                title: 'Custom Nutrition Plans',
                desc: 'Personalized diet plans crafted by nutrition experts to fuel your goals, whether bulking or cutting.',
              },
              {
                icon: MapPin,
                title: 'Heart of Surandai',
                desc: 'Conveniently located on Main Road, Surandai — easily accessible from anywhere in town.',
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 h-full group hover:border-[#D4AF37] hover:gold-glow transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(212,175,55,0.2)] transition-colors duration-300">
                    <card.icon size={28} className="text-[#D4AF37]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS PREVIEW ─── */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="What We Offer"
            title="Our Programs"
            subtitle="Tailored fitness programs designed to push your limits and unlock your full potential."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&q=100&fit=crop',
                tag: 'Strength',
                title: 'Weight Training',
                desc: 'Build raw strength and sculpt your physique with our premium free weights and machines.',
              },
              {
                img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=100&fit=crop',
                tag: 'One-on-One',
                title: 'Personal Training',
                desc: 'Get dedicated coaching from certified trainers with plans built around your unique goals.',
              },
              {
                img: 'https://images.unsplash.com/photo-1538805060514-97d9cc172144?w=800&q=100&fit=crop',
                tag: 'Endurance',
                title: 'Cardio Zone',
                desc: 'Burn calories and boost endurance on our state-of-the-art cardio equipment.',
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="group relative rounded-2xl overflow-hidden h-[420px] img-zoom cursor-pointer">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold">
                      {card.tag}
                    </span>
                    <h3
                      className="text-2xl font-bold text-white mt-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">{card.desc}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold mt-4 group-hover:gap-3 transition-all duration-300"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP TEASER ─── */}
      <section className="relative py-24 px-4 bg-[#0a0a0a] overflow-hidden">
        {/* Diagonal Gold Line */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <div className="w-full h-full border-t-2 border-r-2 border-[#D4AF37] rotate-45 translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              Start Today
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to <span className="gold-gradient-text">Start?</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg mt-6 max-w-lg mx-auto leading-relaxed">
              Choose a plan that fits your lifestyle and take the first step toward
              the body and mind you&apos;ve always wanted.
            </p>
            <Link to="/membership" className="btn-gold mt-8 inline-flex">
              View Membership Plans
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What Our Members Say"
            subtitle="Real stories from real members who transformed their lives at Power Fitness Zone."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Power Fitness Zone completely changed my life. I lost 20 kgs in 6 months with their personal training program. The trainers are incredibly supportive and the equipment is top-notch.',
                name: 'Arun Kumar',
                role: 'Software Engineer',
              },
              {
                quote: "As a woman, I felt completely welcome from day one. The nutrition coaching helped me understand what my body truly needs. I've never felt stronger or more confident.",
                name: 'Priya Selvan',
                role: 'Business Owner',
              },
              {
                quote: 'The best gym in the entire Tirunelveli district. I\'ve been a member for 3 years and the consistency in quality and coaching is unmatched anywhere.',
                name: 'Karthik Raj',
                role: 'College Student',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={18} className="text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-[rgba(212,175,55,0.15)]">
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-[#D4AF37] text-sm">{item.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
