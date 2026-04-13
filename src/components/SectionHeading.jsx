import AnimatedSection from './AnimatedSection'

export default function SectionHeading({ label, title, subtitle, light = false }) {
  return (
    <AnimatedSection className="text-center mb-16">
      {label && (
        <p className="text-[#D4AF37] text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider gold-underline pb-4 ${
          light ? 'text-white' : 'gold-gradient-text'
        }`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#A0A0A0] text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
