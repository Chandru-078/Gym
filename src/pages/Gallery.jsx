import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const categories = ['All', 'Equipment', 'Training', 'Nutrition', 'Events']

const images = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=100&fit=crop', cat: 'Equipment', alt: 'Modern gym equipment floor' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=100&fit=crop', cat: 'Equipment', alt: 'Gym interior overview' },
  { src: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&q=100&fit=crop', cat: 'Training', alt: 'Weight training session' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=100&fit=crop', cat: 'Training', alt: 'Personal training session' },
  { src: 'https://images.unsplash.com/photo-1538805060514-97d9cc172144?w=800&q=100&fit=crop', cat: 'Equipment', alt: 'Cardio equipment zone' },
  { src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=100&fit=crop', cat: 'Nutrition', alt: 'Healthy meal preparation' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=100&fit=crop', cat: 'Training', alt: 'Dumbbell workout' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=100&fit=crop', cat: 'Events', alt: 'Gym fitness event' },
  { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=100&fit=crop', cat: 'Equipment', alt: 'Bench press station' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=100&fit=crop', cat: 'Training', alt: 'Group fitness class' },
  { src: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=100&fit=crop', cat: 'Events', alt: 'Fitness competition' },
  { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=100&fit=crop', cat: 'Nutrition', alt: 'Healthy food bowl' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'All'
    ? images
    : images.filter((img) => img.cat === activeFilter)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)

  const goNext = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % filtered.length)
  }
  const goPrev = () => {
    if (lightbox !== null) setLightbox((lightbox - 1 + filtered.length) % filtered.length)
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=100&fit=crop"
          alt="Power Fitness Zone gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Take a Look
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase gold-gradient-text"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Filter Tabs + Grid */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black'
                    : 'text-[#A0A0A0] border border-[rgba(212,175,55,0.3)] hover:border-[#D4AF37] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.05}>
                <div
                  onClick={() => openLightbox(i)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[rgba(212,175,55,0)] group-hover:bg-[rgba(212,175,55,0.2)] transition-all duration-500 flex items-center justify-center">
                    <ZoomIn
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-[#D4AF37] transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={filtered[lightbox].src.replace('w=800', 'w=1920')}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-[#D4AF37] transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#A0A0A0] text-sm">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  )
}
