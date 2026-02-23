"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, FileText, Info, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type PermitStatus = "valid" | "expiring" | "expired" | "unknown";

interface CheckResult {
  status: PermitStatus;
  companyName: string;
  permitNumber: string;
  expiryDate: string | null;
  daysUntilExpiry: number | null;
  message: string;
}

export default function GenehmigungsCheckerPage() {
  const [companyName, setCompanyName] = useState("");
  const [permitNumber, setPermitNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);

  const checkPermit = () => {
    setIsChecking(true);

    // Simuliere eine kurze Ladezeit
    setTimeout(() => {
      let status: PermitStatus = "unknown";
      let daysUntilExpiry: number | null = null;
      let message = "";

      if (expiryDate) {
        const expiry = new Date(expiryDate);
        const today = new Date();
        const diffTime = expiry.getTime() - today.getTime();
        daysUntilExpiry = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (daysUntilExpiry > 30) {
          status = "valid";
          message = "Die Genehmigung ist gültig. Keine Handlung erforderlich.";
        } else if (daysUntilExpiry > 0) {
          status = "expiring";
          message = `Die Genehmigung läuft in ${daysUntilExpiry} Tagen ab. Bitte rechtzeitig verlängern.`;
        } else {
          status = "expired";
          message = "Die Genehmigung ist abgelaufen! Sofortige Handlung erforderlich.";
        }
      } else {
        // Wenn kein Datum angegeben ist, zeigen wir ein Demo-Ergebnis
        status = "valid";
        daysUntilExpiry = 45;
        message = "Dies ist ein Demo-Ergebnis. Geben Sie ein Ablaufdatum ein, um eine echte Prüfung durchzuführen.";
      }

      setResult({
        status,
        companyName: companyName || "Mustertransporte GmbH",
        permitNumber: permitNumber || "2026-AT-001",
        expiryDate: expiryDate || "2026-04-08",
        daysUntilExpiry,
        message,
      });

      setIsChecking(false);
    }, 1500);
  };

  const getStatusColor = (status: PermitStatus) => {
    switch (status) {
      case "valid":
        return "green";
      case "expiring":
        return "yellow";
      case "expired":
        return "red";
      default:
        return "gray";
    }
  };

  const getStatusIcon = (status: PermitStatus) => {
    switch (status) {
      case "valid":
        return <CheckCircle2 className="w-16 h-16 text-green-500" />;
      case "expiring":
        return <AlertTriangle className="w-16 h-16 text-yellow-500" />;
      case "expired":
        return <XCircle className="w-16 h-16 text-red-500" />;
      default:
        return <Info className="w-16 h-16 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: "Genehmigungs-Checker", href: "/tools/genehmigungs-checker" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kostenloser Genehmigungs-Checker
          </h1>
          <p className="text-xl text-gray-600">
            Prüfen Sie in Sekundenschnelle, ob Ihre Genehmigung gültig ist
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Input Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Genehmigungsdaten eingeben</CardTitle>
              <CardDescription>
                Tragen Sie die Daten Ihrer Genehmigung ein, um den Status zu prüfen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="companyName">Firmenname (optional)</Label>
                <Input
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Mustertransporte GmbH"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="permitNumber">Genehmigungsnummer</Label>
                <Input
                  id="permitNumber"
                  value={permitNumber}
                  onChange={(e) => setPermitNumber(e.target.value)}
                  placeholder="z.B. 2026-AT-001"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="expiryDate">Ablaufdatum</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Tragen Sie das Ablaufdatum Ihrer Genehmigung ein
                </p>
              </div>

              <Button
                onClick={checkPermit}
                disabled={isChecking}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {isChecking ? "Wird geprüft..." : "Genehmigung prüfen"}
              </Button>
            </CardContent>
          </Card>

          {/* Result Card */}
          {result && (
            <Card className={`border-4 ${
              result.status === "valid"
                ? "border-green-500 bg-green-50"
                : result.status === "expiring"
                ? "border-yellow-500 bg-yellow-50"
                : result.status === "expired"
                ? "border-red-500 bg-red-50"
                : "border-gray-300 bg-gray-50"
            }`}>
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-8">
                  {getStatusIcon(result.status)}
                  <h2 className={`text-3xl font-bold mt-4 ${
                    result.status === "valid"
                      ? "text-green-700"
                      : result.status === "expiring"
                      ? "text-yellow-700"
                      : result.status === "expired"
                      ? "text-red-700"
                      : "text-gray-700"
                  }`}>
                    {result.status === "valid"
                      ? "Gültig"
                      : result.status === "expiring"
                      ? "Läuft bald ab"
                      : result.status === "expired"
                      ? "Abgelaufen"
                      : "Unbekannt"}
                  </h2>
                  <p className="text-gray-600 mt-2">{result.message}</p>
                </div>

                {/* Details */}
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b pb-2">Genehmigungsdetails</h3>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Firma:</span>
                    <span className="font-medium">{result.companyName}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Genehmigungsnummer:</span>
                    <span className="font-medium">{result.permitNumber}</span>
                  </div>

                  {result.expiryDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Ablaufdatum:</span>
                      <span className="font-medium">{new Date(result.expiryDate).toLocaleDateString("de-DE")}</span>
                    </div>
                  )}

                  {result.daysUntilExpiry !== null && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Verbleibende Tage:</span>
                      <span className={`font-bold ${
                        result.daysUntilExpiry > 30
                          ? "text-green-600"
                          : result.daysUntilExpiry > 0
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}>
                        {result.daysUntilExpiry > 0
                          ? `${result.daysUntilExpiry} Tage`
                          : `Abgelaufen vor ${Math.abs(result.daysUntilExpiry)} Tagen`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Ampel Visual */}
                <div className="mt-8 flex justify-center gap-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    result.status === "valid" ? "bg-green-500" : "bg-gray-300"
                  }`}>
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    result.status === "expiring" ? "bg-yellow-500" : "bg-gray-300"
                  }`}>
                    <span className="text-white text-2xl">!</span>
                  </div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    result.status === "expired" ? "bg-red-500" : "bg-gray-300"
                  }`}>
                    <span className="text-white text-2xl">✕</span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">Hinweis:</p>
                      <p>
                        Dies ist ein einfacher Checker für eine erste Orientierung.
                        Für eine vollständige Verwaltung Ihrer Genehmigungen empfehlen
                        wir HeavyPermit - die professionelle Lösung für Speditionen.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Features */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Volle Kontrolle mit HeavyPermit
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Automatische Erinnerungen</h3>
                  <p className="text-gray-600 text-sm">
                    Erinnerungen per E-Mail, wenn Genehmigungen bald ablaufen
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Calendar className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Kalender-Ansicht</h3>
                  <p className="text-gray-600 text-sm">
                    Alle Genehmigungen auf einen Blick im Kalender
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <FileText className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">OCR-Erkennung</h3>
                  <p className="text-gray-600 text-sm">
                    Automatisches Auslesen Ihrer Genehmigungsdokumente
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
