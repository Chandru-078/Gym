import { InstagramIcon } from '../components/SocialIcons'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const trainers = [
  {
    name: 'Rajesh Kumar',
    role: 'Head Strength Coach',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=100&fit=crop',
    certifications: 'ACE Certified | 8 Years Experience',
    specialties: ['Powerlifting', 'Muscle Building'],
    bio: 'Rajesh has transformed over 300 clients and leads our strength training programs with intensity, discipline, and deep expertise in progressive overload training.',
  },
  {
    name: 'Deepa Lakshmi',
    role: 'Nutrition & Wellness Expert',
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=100&fit=crop',
    certifications: 'Precision Nutrition | 5 Years Experience',
    specialties: ['Weight Loss', 'Meal Planning'],
    bio: 'Deepa combines her passion for nutrition with practical coaching to create sustainable diet plans that help members achieve lasting results without extreme restrictions.',
  },
  {
    name: 'Suresh Anand',
    role: 'Cardio & HIIT Specialist',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=100&fit=crop',
    certifications: 'NASM Certified | 6 Years Experience',
    specialties: ['Fat Loss', 'Endurance Training'],
    bio: 'Suresh brings high-energy enthusiasm to every session. His HIIT programs are legendary in Surandai for delivering fast, visible results with fun, challenging workouts.',
  },
]

export default function Trainers() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=100&fit=crop"
          alt="Power Fitness Zone trainers"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Expert Guidance
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase gold-gradient-text"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet Our Trainers
          </h1>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Team"
            subtitle="Our certified professionals are dedicated to your success. Each trainer brings unique expertise and a passion for helping you reach your full potential."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass rounded-2xl overflow-hidden group hover:border-[#D4AF37] hover:gold-glow transition-all duration-500">
                  {/* Trainer Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={trainer.img}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                    {/* Social Icon */}
                    <a
                      href="#"
                      aria-label={`${trainer.name} Instagram`}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                    >
                      <InstagramIcon size={18} />
                    </a>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold text-white uppercase"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {trainer.name}
                    </h3>
                    <p className="text-[#D4AF37] text-sm font-semibold mt-1">{trainer.role}</p>
                    <p className="text-[#A0A0A0] text-xs mt-2">{trainer.certifications}</p>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed mt-4">{trainer.bio}</p>

                    {/* Specialty Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {trainer.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs px-3 py-1 rounded-full border border-[rgba(212,175,55,0.3)] text-[#D4AF37] uppercase tracking-wider"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
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
