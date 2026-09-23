import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-surface-container-low)] border-t border-[var(--color-outline-variant)]/50 pt-14 pb-8 sm:pt-16 sm:pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[var(--spacing-space-lg)] mb-[var(--spacing-space-xl)]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-[var(--spacing-space-xs)]">
            <div className="flex items-center gap-3.5 mb-[var(--spacing-space-xs)]">
              <Image
                src="/logo.png"
                alt="Dr. Maya Reynolds emblem"
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-full"
              />
              <div className="flex flex-col justify-center">
                <span
                  className="text-[var(--color-primary)] font-medium leading-snug"
                  style={{ fontFamily: 'var(--font-newsreader)', fontSize: '22px', lineHeight: '30px' }}
                >
                  {SITE_NAME}
                </span>
                <span
                  className="text-[var(--color-on-surface-variant)] tracking-wider uppercase"
                  style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}
                >
                  Sage Wellness Psychological Practice
                </span>
              </div>
            </div>
            <p className="text-[var(--color-on-surface-variant)] max-w-md leading-relaxed" style={{ fontSize: '14px', lineHeight: '22px' }}>
              California Licensed Psychologist · {CONTACT_INFO.license}
            </p>
            <p className="text-[var(--color-on-surface-variant)] max-w-md leading-relaxed mt-[var(--spacing-space-xs)]" style={{ fontSize: '14px', lineHeight: '22px' }}>
              Providing compassionate, evidence-based psychodynamic and mindfulness-based therapy tailored for high-achieving adults, professionals, and mindful individuals in Southern California.
            </p>
          </div>

          {/* Practice Info */}
          <div className="lg:col-span-4 flex flex-col gap-[var(--spacing-space-xs)]">
            <h4
              className="text-[var(--color-primary)] mb-[var(--spacing-space-xs)] uppercase tracking-wider"
              style={{ fontSize: '15px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 }}
            >
              Practice & Care Details
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <p className="text-[var(--color-on-surface-variant)]" style={{ fontSize: '14px', lineHeight: '22px' }}>
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <p className="text-[var(--color-on-surface-variant)]" style={{ fontSize: '14px', lineHeight: '22px' }}>
                  In-Person Sessions: Mon – Thu
                  <br />
                  California Telehealth: Mon – Fri
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-[var(--spacing-space-xs)]">
            <h4
              className="text-[var(--color-primary)] mb-[var(--spacing-space-xs)] uppercase tracking-wider"
              style={{ fontSize: '15px', lineHeight: '20px', letterSpacing: '0.01em', fontWeight: 600 }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontSize: '14px', lineHeight: '22px' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-outline-variant)]/40 pt-[var(--spacing-space-md)] flex flex-col gap-[var(--spacing-space-sm)]">

          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3">
            <p className="text-[var(--color-outline)]" style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
              © {new Date().getFullYear()} Dr. Maya Reynolds Psychological Services, Inc. All rights reserved.
            </p>
            <p className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-[var(--color-outline)]" style={{ fontSize: '11px', lineHeight: '16px', letterSpacing: '0.04em', fontWeight: 600 }}>
              <span>Santa Monica, California</span>
              <span>·</span>
              <Link href="/privacy" className="hover:text-[var(--color-primary)] transition-colors">Privacy Notice</Link>
              <span>·</span>
              <Link href="/good-faith-estimate" className="hover:text-[var(--color-primary)] transition-colors">Good Faith Estimate</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
