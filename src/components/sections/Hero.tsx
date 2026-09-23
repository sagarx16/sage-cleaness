'use client'

import Image from 'next/image'
import { CalendarDays, ArrowDown, ShieldCheck, Brain, Heart } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

const trustPills = [
  { icon: Brain, label: 'Evidence-Based (EMDR & CBT)' },
  { icon: ShieldCheck, label: 'Trauma-Informed & Somatic' },
  { icon: Heart, label: 'Warm & Collaborative' },
]

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[var(--color-surface)] pb-[var(--spacing-space-xl)] pt-6 sm:pt-10 lg:pt-12 lg:pb-28">
      {/* Atmospheric Background Gradients */}
      <div className="pointer-events-none absolute -left-48 top-0 h-96 w-96 rounded-full bg-[var(--color-secondary-fixed)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-[var(--color-primary-fixed)]/20 blur-3xl" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Messaging & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Availability Pill */}
            <div className="inline-flex items-center rounded-full bg-[var(--color-surface-container)] px-3.5 sm:px-4 py-1.5 shadow-sm max-w-full">
              <span className="text-[var(--color-on-surface-variant)] font-medium text-center truncate" style={{ fontSize: 'clamp(11px, 3.2vw, 13px)', lineHeight: '18px', letterSpacing: '0.02em' }}>
                Accepting New In-Person & Telehealth Clients
              </span>
            </div>

            {/* Hero Headline */}
            <h1
              className="mt-5 sm:mt-6 text-[var(--color-primary)] tracking-tight"
              style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(30px, 6.5vw, 56px)', lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              A safe, grounded space to heal, find clarity, and reconnect with yourself.
            </h1>

            {/* Subtitle */}
            <p
              className="mt-5 text-[var(--color-on-surface-variant)] max-w-xl leading-relaxed text-base sm:text-lg"
              style={{ lineHeight: '1.6' }}
            >
              Therapy for anxiety, trauma, and burnout — in-person at our quiet Santa Monica sanctuary & secure telehealth across California.
            </p>

            {/* Trust Pills */}
            <div className="mt-7 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {trustPills.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-secondary-container)]/50 px-3 sm:px-3.5 py-1.5 text-[var(--color-secondary)]"
                  style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}
                >
                  <Icon size={15} strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-container)] px-6 sm:px-7 py-3.5 text-[var(--color-on-primary)] shadow-md transition-all duration-300 hover:bg-[var(--color-primary)] hover:-translate-y-0.5 active:scale-[0.99] text-center"
                style={{ fontSize: '15px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 }}
              >
                <span>Book a Free 15-Min Consultation</span>
                <CalendarDays size={18} strokeWidth={1.8} />
              </a>
              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-[var(--color-primary)] hover:text-[var(--color-primary-container)] transition-colors group"
                style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em', fontWeight: 500 }}
              >
                <span>Explore My Approach</span>
                <ArrowDown size={17} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Card */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Organic Backdrop */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[var(--color-secondary-fixed)]/50 via-[var(--color-tertiary-fixed)]/30 to-[var(--color-surface-container-high)] -rotate-1" />
              {/* Portrait Frame */}
              <div className="relative overflow-hidden rounded-[2.25rem] bg-[var(--color-surface-container)] shadow-xl border border-[var(--color-outline-variant)]/40">
                <Image
                  src="/images/dr-maya-reynolds.jpg"
                  alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, California"
                  width={600}
                  height={780}
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-top transition-transform duration-700 hover:scale-[1.02] block"
                  priority
                />
                {/* Gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--color-inverse-surface)]/80 via-[var(--color-inverse-surface)]/40 to-transparent" />
                {/* Credibility Chip */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 rounded-xl bg-[var(--color-surface)]/95 backdrop-blur-md p-3 sm:p-3.5 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[var(--color-secondary-container)] text-[var(--color-secondary)] shrink-0">
                      <ShieldCheck size={18} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[var(--color-primary)] leading-snug truncate" style={{ fontFamily: 'var(--font-jakarta)', fontSize: '15px', fontWeight: 600 }}>
                        Dr. Maya Reynolds, PsyD
                      </p>
                      <p className="text-[var(--color-on-surface-variant)] tracking-wider uppercase truncate" style={{ fontSize: '10px', lineHeight: '14px', letterSpacing: '0.04em', fontWeight: 600 }}>
                        {CONTACT_INFO.license}
                      </p>
                    </div>
                  </div>
                  <ShieldCheck size={18} className="text-[var(--color-secondary)] shrink-0 ml-2" strokeWidth={1.8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
