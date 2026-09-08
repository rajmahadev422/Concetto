"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Card({ member }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {/* ================= TEAM CARD ================= */}
      <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60">

        {/* ================= PHOTO ================= */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
          <Image
            src={member.image || "/team/default.jpg"}
            alt={member.name || "Team Member"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain object-center transition duration-500 group-hover:scale-105"
          />

          {/* View Profile */}
          <button
            onClick={() => setShowProfile(true)}
            className="absolute bottom-3 right-3 rounded-lg bg-black/75 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-[var(--primary)]"
          >
            View Profile
          </button>
        </div>

        {/* ================= BASIC INFO ================= */}
        <div className="bg-[var(--surface)] p-5">
          <h3 className="text-base font-bold text-[var(--foreground)]">
            {member.name || "—"}
          </h3>
        </div>
      </article>

      {/* ================= PROFILE POPUP ================= */}
      {showProfile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onClick={() => setShowProfile(false)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ================= CLOSE BUTTON ================= */}
            <button
              onClick={() => setShowProfile(false)}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-lg text-white backdrop-blur-sm transition duration-300 hover:scale-110 hover:bg-[var(--primary)]"
            >
              ×
            </button>

            {/* ================= LEFT : PHOTO ================= */}
            <div className="relative h-64 w-full shrink-0 bg-[var(--surface)] md:h-auto md:min-h-[520px] md:w-1/2">
              <Image
                src={member.image || "/team/default.jpg"}
                alt={member.name || "Team Member"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>

            {/* ================= RIGHT : DETAILS ================= */}
            <div className="flex min-h-0 w-full flex-col overflow-y-auto md:w-1/2">

              {/* ================= HEADER ================= */}
              <div className="px-7 pb-5 pt-10 md:px-8 md:pt-12">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Team Member
                </p>

                <h2 className="text-2xl font-bold leading-tight text-[var(--foreground)] md:text-3xl">
                  {member.name || "—"}
                </h2>

                <p className="mt-3 text-sm font-semibold text-[var(--primary)]">
                  {member.role || "—"}
                </p>
              </div>

              {/* ================= DIVIDER ================= */}
              <div className="mx-7 h-px bg-[var(--border)] md:mx-8" />

              {/* ================= CONTACT DETAILS ================= */}
              <div className="space-y-3 px-7 py-7 md:px-8">

                {/* ================= EMAIL ================= */}
                <div
                  className="
                    group/detail
                    flex items-center gap-4
                    rounded-xl
                    border border-[var(--border)]
                    bg-transparent
                    p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--primary)]/50
                    hover:bg-gradient-to-r
                    hover:from-[var(--primary)]/15
                    hover:to-transparent
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-lg
                      border border-[var(--border)]
                      bg-[var(--surface)]
                      transition-all duration-300
                      group-hover/detail:border-[var(--primary)]/50
                      group-hover/detail:bg-[var(--primary)]/10
                    "
                  >
                    <FaEnvelope className="text-sm text-[var(--primary)]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      College Email
                    </p>

                    <p className="mt-1 break-all text-sm font-medium text-[var(--foreground)]">
                      {member.email || "—"}
                    </p>
                  </div>
                </div>

                {/* ================= PHONE ================= */}
                <div
                  className="
                    group/detail
                    flex items-center gap-4
                    rounded-xl
                    border border-[var(--border)]
                    bg-transparent
                    p-4
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--primary)]/50
                    hover:bg-gradient-to-r
                    hover:from-[var(--primary)]/15
                    hover:to-transparent
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-lg
                      border border-[var(--border)]
                      bg-[var(--surface)]
                      transition-all duration-300
                      group-hover/detail:border-[var(--primary)]/50
                      group-hover/detail:bg-[var(--primary)]/10
                    "
                  >
                    <FaPhone className="text-sm text-[var(--primary)]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                      {member.phone || "—"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= CONNECT ================= */}
              <div className="mt-auto border-t border-[var(--border)] px-7 py-5 md:px-8">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                  Connect
                </p>

                <div className="flex items-center gap-3">

                  {/* ================= LINKEDIN ================= */}
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="
                        group/social
                        relative flex h-11 w-11
                        items-center justify-center
                        overflow-hidden
                        rounded-lg
                        border border-[var(--border)]
                        bg-[var(--surface)]
                        text-[var(--foreground)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-[var(--primary)]
                        hover:text-[var(--primary)]
                        hover:shadow-[0_0_16px_var(--primary)]
                      "
                    >
                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          translate-y-full
                          bg-gradient-to-t
                          from-[var(--primary)]/30
                          via-[var(--primary)]/10
                          to-transparent
                          transition-transform duration-300
                          group-hover/social:translate-y-0
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          bg-gradient-to-br
                          from-[var(--primary)]/10
                          to-transparent
                          opacity-0
                          transition-opacity duration-300
                          group-hover/social:opacity-100
                        "
                      />

                      <FaLinkedinIn
                        className="
                          relative z-10 text-sm
                          transition-all duration-300
                          group-hover/social:scale-125
                        "
                      />
                    </a>
                  ) : (
                    <button
                      type="button"
                      aria-label="LinkedIn not available"
                      className="
                        group/social
                        relative flex h-11 w-11
                        items-center justify-center
                        overflow-hidden
                        rounded-lg
                        border border-[var(--border)]
                        bg-[var(--surface)]
                        text-[var(--foreground)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-[var(--primary)]
                        hover:text-[var(--primary)]
                        hover:shadow-[0_0_16px_var(--primary)]
                      "
                    >
                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          translate-y-full
                          bg-gradient-to-t
                          from-[var(--primary)]/30
                          via-[var(--primary)]/10
                          to-transparent
                          transition-transform duration-300
                          group-hover/social:translate-y-0
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          bg-gradient-to-br
                          from-[var(--primary)]/10
                          to-transparent
                          opacity-0
                          transition-opacity duration-300
                          group-hover/social:opacity-100
                        "
                      />

                      <FaLinkedinIn
                        className="
                          relative z-10 text-sm
                          transition-all duration-300
                          group-hover/social:scale-125
                        "
                      />
                    </button>
                  )}

                  {/* ================= INSTAGRAM ================= */}
                  {member.instagram ? (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="
                        group/social
                        relative flex h-11 w-11
                        items-center justify-center
                        overflow-hidden
                        rounded-lg
                        border border-[var(--border)]
                        bg-[var(--surface)]
                        text-[var(--foreground)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-[var(--primary)]
                        hover:text-[var(--primary)]
                        hover:shadow-[0_0_16px_var(--primary)]
                      "
                    >
                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          translate-y-full
                          bg-gradient-to-t
                          from-[var(--primary)]/30
                          via-[var(--primary)]/10
                          to-transparent
                          transition-transform duration-300
                          group-hover/social:translate-y-0
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          bg-gradient-to-br
                          from-[var(--primary)]/10
                          to-transparent
                          opacity-0
                          transition-opacity duration-300
                          group-hover/social:opacity-100
                        "
                      />

                      <FaInstagram
                        className="
                          relative z-10 text-sm
                          transition-all duration-300
                          group-hover/social:scale-125
                        "
                      />
                    </a>
                  ) : (
                    <button
                      type="button"
                      aria-label="Instagram not available"
                      className="
                        group/social
                        relative flex h-11 w-11
                        items-center justify-center
                        overflow-hidden
                        rounded-lg
                        border border-[var(--border)]
                        bg-[var(--surface)]
                        text-[var(--foreground)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-[var(--primary)]
                        hover:text-[var(--primary)]
                        hover:shadow-[0_0_16px_var(--primary)]
                      "
                    >
                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          translate-y-full
                          bg-gradient-to-t
                          from-[var(--primary)]/30
                          via-[var(--primary)]/10
                          to-transparent
                          transition-transform duration-300
                          group-hover/social:translate-y-0
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute inset-0
                          bg-gradient-to-br
                          from-[var(--primary)]/10
                          to-transparent
                          opacity-0
                          transition-opacity duration-300
                          group-hover/social:opacity-100
                        "
                      />

                      <FaInstagram
                        className="
                          relative z-10 text-sm
                          transition-all duration-300
                          group-hover/social:scale-125
                        "
                      />
                    </button>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}