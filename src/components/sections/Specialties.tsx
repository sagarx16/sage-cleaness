'use client'

import { motion } from 'framer-motion'
import { Sun, Heart, Zap, Calendar } from 'lucide-react'
import { SPECIALTIES } from '@/lib/constants'

const icons = { sun: Sun, heart: Heart, zap: Zap, calendar: Calendar }

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
}

export default function Specialties() {
  return (
    <section id="specialties" className="w-full bg-[var(--color-surface)] py-12 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={fadeUp} custom={0} className="block text-[var(--color-secondary)] uppercase tracking-widest font-semibold" style={{ fontSize: '13px', lineHeight: '18px', letterSpacing: '0.02em' }}>
            Clinical Focus
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-[var(--color-primary)] tracking-tight"
            style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: '1.2', fontWeight: 400, letterSpacing: '-0.015em' }}
          >
            Areas of Specialty
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-3 sm:mt-4 text-[var(--color-on-surface-variant)] text-sm sm:text-lg" style={{ lineHeight: '1.6' }}>
            Thoughtfully tailored care for complex minds and high-functioning lives.
          </motion.p>
        </motion.div>

        {/* Specialty Cards */}
        <motion.div
          className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SPECIALTIES.map(({ pillar, title, description, tags, icon }, i) => {
            const Icon = icons[icon as keyof typeof icons]
            return (
              <motion.div
                key={pillar}
                variants={fadeUp}
                custom={i}
                className="group rounded-2xl bg-[var(--color-surface-container-low)] p-5 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[var(--color-surface-container)] text-[var(--color-primary)] border border-[var(--color-outline-variant)]/40 shadow-xs group-hover:bg-[var(--color-secondary-container)] group-hover:text-[var(--color-secondary)] group-hover:border-[var(--color-secondary)]/40 group-hover:scale-105 transition-all duration-300">
                    <Icon size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.65} />
                  </div>
                  <span className="text-[var(--color-on-surface-variant)] uppercase tracking-wider" style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
                    Pillar {pillar}
                  </span>
                </div>
                <h3
                  className="mt-4 sm:mt-6 text-[var(--color-primary)] font-medium"
                  style={{ fontFamily: 'var(--font-newsreader)', fontSize: 'clamp(19px, 3vw, 22px)', lineHeight: '26px', fontWeight: 500 }}
                >
                  {title}
                </h3>
                <p className="mt-2.5 text-[var(--color-on-surface-variant)] leading-relaxed text-sm sm:text-base" style={{ lineHeight: '1.6' }}>
                  {description}
                </p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-surface)] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[var(--color-primary)] font-medium"
                      style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.03em' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
