import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X, ChevronDown, Crown } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'

const plans = [
  {
    name: 'STARTER',
    tier: 'Silver',
    price: '₹999',
    period: '/month',
    popular: false,
    features: [
      { text: 'Gym Access (6AM–10PM)', included: true },
      { text: 'Cardio Zone', included: true },
      { text: 'Locker Room', included: true },
      { text: 'Personal Training', included: false },
      { text: 'Nutrition Coaching', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'PRO',
    tier: 'Gold',
    price: '₹1,999',
    period: '/month',
    popular: true,
    features: [
      { text: 'Full Gym Access (5AM–11PM)', included: true },
      { text: 'Cardio Zone', included: true },
      { text: '4 Personal Training Sessions/month', included: true },
      { text: 'Basic Nutrition Plan', included: true },
      { text: 'Locker Room + Towel Service', included: true },
    ],
    cta: 'Join Now',
  },
  {
    name: 'ELITE',
    tier: 'Platinum',
    price: '₹3,499',
    period: '/month',
    popular: false,
    features: [
      { text: '24/7 Gym Access', included: true },
      { text: 'Unlimited Personal Training', included: true },
      { text: 'Full Nutrition Coaching', included: true },
      { text: 'Body Composition Analysis', included: true },
      { text: 'Priority Booking', included: true },
      { text: 'Guest Passes (2/month)', included: true },
    ],
    cta: 'Go Elite',
  },
]

const faqs = [
  {
    q: 'Can I freeze my membership?',
    a: 'Yes, you can freeze your membership for up to 30 days per year. Simply visit the front desk or contact us at least 3 days before your desired freeze date. Medical freezes with documentation can be extended beyond 30 days.',
  },
  {
    q: 'Is there a joining fee?',
    a: 'We occasionally run promotions with waived joining fees. Our standard joining fee is ₹500 which covers your membership card, fitness assessment, and initial body composition analysis.',
  },
  {
    q: 'Do you offer student discounts?',
    a: 'Absolutely! We offer a 15% discount on all plans for students with a valid college ID. We also have special group rates for college teams and organizations.',
  },
  {
    q: 'Can I upgrade my plan anytime?',
    a: 'Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining days of your current billing cycle. Downgrades take effect at the start of the next billing period.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), net banking, credit/debit cards, and bank transfers. We also offer EMI options for quarterly and annual plans.',
  },
]

export default function Membership() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=100&fit=crop"
          alt="Power Fitness Zone membership"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 text-center">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Invest in Yourself
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold uppercase gold-gradient-text"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Membership Plans
          </h1>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Choose Your Plan"
            subtitle="Flexible plans designed for every fitness goal and budget. No hidden fees, no long-term contracts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-500 ${
                    plan.popular
                      ? 'glass border-[#D4AF37] border-2 gold-glow-strong scale-[1.02] md:scale-105'
                      : 'glass hover:border-[#D4AF37]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full">
                      <Crown size={14} /> Most Popular
                    </div>
                  )}

                  <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold">
                    {plan.tier}
                  </p>
                  <h3
                    className="text-2xl font-bold text-white uppercase mt-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4 mb-6">
                    <span
                      className="text-4xl sm:text-5xl font-bold gold-gradient-text"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[#A0A0A0] text-sm">{plan.period}</span>
                  </div>

                  <div className="space-y-3 flex-1">
                    {plan.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-3">
                        {feat.included ? (
                          <Check size={18} className="text-[#D4AF37] shrink-0" />
                        ) : (
                          <X size={18} className="text-gray-600 shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            feat.included ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`mt-8 text-center ${
                      plan.popular ? 'btn-gold w-full' : 'btn-gold-outline w-full'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            label="FAQ"
            subtitle="Everything you need to know about our memberships."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-white font-semibold pr-4">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaq === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed">
                      {faq.a}
                    </p>
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
