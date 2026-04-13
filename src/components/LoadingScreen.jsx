import { Dumbbell } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]">
      <div className="relative">
        <div className="animate-spin-slow">
          <Dumbbell size={64} className="text-[#D4AF37]" />
        </div>
        <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-[#D4AF37]" />
      </div>
      <h1
        className="mt-8 text-3xl font-bold tracking-[0.2em] uppercase gold-gradient-text"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Power Fitness Zone
      </h1>
      <div className="mt-4 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"
            style={{
              animation: `pulse-gold 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
