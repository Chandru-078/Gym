import { Link } from 'react-router-dom'
import { Clock, Package, ShowerHead, Target, LineChart, Salad, Bike, Heart, Users } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    img: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&q=100&fit=crop',
    title: 'Gym & Weight Training',
    desc: 'Access to premium free weights, machines, and barbells. Suitable for all levels from beginner to advanced. Our weight training zone features the latest equipment from international brands, ensuring a safe and effective workout every session.',
    features: [
      { icon: Clock, text: 'Open 5AM–11PM' },
      { icon: Package, text: 'All equipment included' },
      { icon: ShowerHead, text: 'Locker rooms' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=100&fit=crop',
    title: 'Personal Training',
    desc: 'One-on-one sessions with certified trainers who build customized workout plans tailored to your specific goals. Whether you want to lose weight, build muscle, or train for a competition, our trainers have you covered.',
    features: [
      { icon: Target, text: 'Goal-based planning' },
      { icon: LineChart, text: 'Weekly progress tracking' },
      { icon: Salad, text: 'Diet guidance' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=100&fit=crop',
    title: 'Nutrition Coaching',
    desc: 'Expert nutritionists create personalized meal plans to complement your training and maximize results. We take into account your body type, goals, dietary preferences, and local food availability to craft the perfect plan.',
    features: [
      { icon: Salad, text: 'Custom meal plans' },
      { icon: Package, text: 'Supplement guidance' },
      { icon: LineChart, text: 'Monthly reviews' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1538805060514-97d9cc172144?w=800&q=100&fit=crop',
    title: 'Cardio Zone',
    desc: 'High-energy cardio equipment including treadmills, bikes, ellipticals, and rowing machines. Our dedicated cardio zone keeps your heart rate up and your calories burning with top-tier machines and an energizing atmosphere.',
    features: [
      { icon: Bike, text: '20+ cardio machines' },
      { icon: Heart, text: 'Heart rate monitoring' },
      { icon: Users, text: 'Group classes' },
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=100&fit=crop"
          alt="Power Fitness Zone programs"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            What We Offer
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase gold-gradient-text"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Programs
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`img-zoom rounded-2xl overflow-hidden h-[350px] sm:h-[400px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3
                    className="text-3xl sm:text-4xl font-bold text-white uppercase mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed mb-8">{service.desc}</p>
                  <div className="space-y-4 mb-8">
                    {service.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center shrink-0">
                          <feat.icon size={20} className="text-[#D4AF37]" />
                        </div>
                        <span className="text-gray-300 text-sm">{feat.text}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-gold">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )
}
