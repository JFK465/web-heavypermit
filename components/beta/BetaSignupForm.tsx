"use client";

import { useState, FormEvent } from "react";
import {
  Shield,
  CheckCircle2,
  Gift,
  Users,
  Headphones,
  Rocket,
  Lock,
  Server,
  ArrowRight,
  Loader2,
  FileText,
  Truck,
  Calendar,
  Bell,
  TrendingUp,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

type FormStatus = "idle" | "loading" | "success" | "error";

export function BetaSignupForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Beta form
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  // Newsletter-only form
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<FormStatus>("idle");

  async function handleBetaSubmit(e: FormEvent) {
    e.preventDefault();
    if (!privacy) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, name, email, newsletter }),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Fehler bei der Registrierung");

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Ein Fehler ist aufgetreten",
      );
    }
  }

  async function handleNewsletterSubmit(e: FormEvent) {
    e.preventDefault();
    setNlStatus("loading");

    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: "-",
          name: "-",
          email: nlEmail,
          newsletter: true,
        }),
      });

      if (!res.ok) throw new Error("Fehler");
      setNlStatus("success");
    } catch {
      setNlStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-orange-500/30">
              <Rocket className="w-4 h-4" />
              Beta-Zugang verfügbar
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Spedition Software für{" "}
              <span className="text-orange-400">Schwertransporte</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Genehmigungen zentral verwalten, Fristen automatisch überwachen
              und Bußgelder vermeiden — mit HeavyPermit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: FileText, label: "Genehmigungs-Verwaltung" },
                { icon: Bell, label: "Frist-Erinnerungen" },
                { icon: Truck, label: "Fuhrpark-Übersicht" },
                { icon: Calendar, label: "Routenplanung" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-sm text-blue-200">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="#beta-registrierung"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                Jetzt Beta-Zugang sichern
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Was kann HeavyPermit?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Genehmigungs-Management",
                desc: "Alle Schwertransport-Genehmigungen zentral verwalten. Ampelsystem zeigt auf einen Blick: gültig, läuft ab oder abgelaufen.",
                color: "bg-green-100 text-green-700",
              },
              {
                icon: Bell,
                title: "Automatische Frist-Überwachung",
                desc: "Rechtzeitige Erinnerungen per E-Mail und Dashboard-Warnung, bevor eine Genehmigung abläuft.",
                color: "bg-blue-100 text-blue-700",
              },
              {
                icon: TrendingUp,
                title: "Fuhrpark & Disposition",
                desc: "Fahrzeuge, Genehmigungen und Routen in einer Übersicht — für schnellere Entscheidungen bei neuen Aufträgen.",
                color: "bg-orange-100 text-orange-700",
              },
            ].map(({ icon: Icon, title, desc, color }) => (
              <Card
                key={title}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Beta */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Warum jetzt Beta-Tester werden?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sichern Sie sich als einer der Ersten Zugang zur Software — mit
            exklusiven Vorteilen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Gift,
                title: "Kostenloser Zugang",
                desc: "Testen Sie alle Funktionen während der Beta-Phase komplett kostenlos.",
              },
              {
                icon: CheckCircle2,
                title: "Lebenslang 50 % Rabatt",
                desc: "Beta-Tester erhalten dauerhaft 50 % Rabatt auf alle Tarife.",
              },
              {
                icon: Users,
                title: "Direkter Einfluss",
                desc: "Ihre Anforderungen fließen direkt in die Produktentwicklung ein.",
              },
              {
                icon: Headphones,
                title: "Premium-Support",
                desc: "Persönlicher Support und schnelle Hilfe bei allen Fragen.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section
        id="beta-registrierung"
        className="py-16 md:py-20 bg-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            {status === "success" ? (
              <Card className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Registrierung erfolgreich!
                </h2>
                <p className="text-gray-600 mb-6">
                  Vielen Dank für Ihr Interesse an HeavyPermit. Wir melden uns
                  in Kürze bei Ihnen mit Ihrem Beta-Zugang.
                </p>
                <div className="space-y-3 text-left bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900">
                    Nächste Schritte:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Bestätigungs-E-Mail prüfen
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Zugangsdaten erhalten (innerhalb von 48h)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Einrichtung mit persönlichem Onboarding
                    </li>
                  </ul>
                </div>
                <Button asChild className="mt-6" variant="outline">
                  <Link href="/">Zurück zur Startseite</Link>
                </Button>
              </Card>
            ) : (
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Beta-Zugang anfordern
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  Registrieren Sie sich jetzt — kostenlos und unverbindlich.
                </p>
                <form onSubmit={handleBetaSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="company">Unternehmen *</Label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ihre Spedition / Ihr Unternehmen"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="name">Ansprechpartner *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Vor- und Nachname"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@spedition.de"
                      required
                    />
                  </div>
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacy}
                        onChange={(e) => setPrivacy(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <span className="text-sm text-gray-600">
                        Ich stimme der{" "}
                        <Link
                          href="/datenschutz"
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >
                          Datenschutzerklärung
                        </Link>{" "}
                        zu. *
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600">
                        Ich möchte Updates zu HeavyPermit per E-Mail erhalten
                        (optional).
                      </span>
                    </label>
                  </div>
                  {status === "error" && (
                    <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg">
                      {errorMessage}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Kostenlos registrieren
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Fallback */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-10 h-10 text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Noch nicht bereit?</h2>
          <p className="text-blue-200 mb-8 max-w-md mx-auto">
            Kein Problem — abonnieren Sie unseren Newsletter und erfahren Sie
            als Erstes, wenn HeavyPermit startet.
          </p>
          {nlStatus === "success" ? (
            <p className="text-green-300 font-medium">
              <CheckCircle2 className="w-5 h-5 inline mr-2" />
              Erfolgreich angemeldet!
            </p>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-300"
              />
              <Button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap"
                disabled={nlStatus === "loading"}
              >
                {nlStatus === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Anmelden"
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Shield,
                title: "DSGVO-konform",
                desc: "Datenschutz nach europäischen Standards",
              },
              {
                icon: Lock,
                title: "StVO-konform",
                desc: "Alle Genehmigungspflichten abgebildet",
              },
              {
                icon: Server,
                title: "Deutsche Infrastruktur",
                desc: "Hosting und Daten in Deutschland",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
