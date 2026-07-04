"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_NAME = "quinta-cookie-consent";
const ONE_YEAR = 60 * 60 * 24 * 365;

function hasConsent() {
  if (typeof document === "undefined") return true;
  return document.cookie.split("; ").some((c) => c.startsWith(`${COOKIE_NAME}=`));
}

export function CookieConsent() {
  // Startet verborgen — verhindert ein Aufblitzen bei Besuchern, die bereits zugestimmt haben.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasConsent()) setVisible(true);
  }, []);

  const accept = () => {
    document.cookie = `${COOKIE_NAME}=ok; max-age=${ONE_YEAR}; path=/; SameSite=Lax`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      aria-live="polite"
      className="animate-fade-up fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="card-surface mx-auto flex max-w-3xl flex-col gap-4 p-6 shadow-pop sm:flex-row sm:items-center sm:gap-6">
        <div>
          <p className="text-sm font-semibold text-ink-900">Cookies</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
            Diese Website verwendet nur technisch notwendige Cookies — im Wesentlichen Ihre
            Cookie-Entscheidung. Kein Tracking, keine Analyse, keine Weitergabe an Dritte. Das passt
            zu Quinta: Ihre Daten bleiben bei Ihnen. Mehr dazu in der{" "}
            <Link href="/datenschutz" className="text-azul-600 underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <button type="button" onClick={accept} className="btn btn-primary btn-sm shrink-0 sm:self-center">
          Verstanden
        </button>
      </div>
    </div>
  );
}
