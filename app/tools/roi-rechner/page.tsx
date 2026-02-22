"use client";

import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Clock, Shield, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ROICalculatorPage() {
  const [fleetSize, setFleetSize] = useState<number>(5);
  const [avgFine, setAvgFine] = useState<number>(2500);
  const [hourlyRate, setHourlyRate] = useState<number>(75);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(5);
  const [results, setResults] = useState<{
    timeSavingsPerYear: number;
    moneySavedFines: number;
    moneySavedTime: number;
    totalSavings: number;
    roi: number;
  } | null>(null);

  const calculateROI = () => {
    // Zeitersparnis pro Woche: ca. 5 Stunden pro LKW
    const weeklyTimeSavings = hoursPerWeek * fleetSize;
    const yearlyTimeSavings = weeklyTimeSavings * 50; // 50 Arbeitswochen
    const moneySavedTime = yearlyTimeSavings * hourlyRate;

    // Vermiedene Bußgelder: ca. 1 Bußgeld pro Jahr pro 10 LKWs (geschätzt)
    const estimatedFinesPerYear = Math.ceil(fleetSize / 10);
    const moneySavedFines = estimatedFinesPerYear * avgFine;

    // Kosten: 499€ Basis + 20€ pro LKW
    const yearlyCost = (499 + fleetSize * 20) * 12;

    const totalSavings = moneySavedTime + moneySavedFines;
    const roi = ((totalSavings - yearlyCost) / yearlyCost) * 100;

    setResults({
      timeSavingsPerYear: yearlyTimeSavings,
      moneySavedFines,
      moneySavedTime,
      totalSavings,
      roi,
    });
  };

  useEffect(() => {
    calculateROI();
  }, [fleetSize, avgFine, hourlyRate, hoursPerWeek]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Calculator className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ROI-Rechner
          </h1>
          <p className="text-xl text-gray-600">
            Berechnen Sie, wie viel Geld Sie mit HeavyPermit sparen können
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Ihre Daten</CardTitle>
                <CardDescription>
                  Tragen Sie Ihre Daten ein, um den ROI zu berechnen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="fleetSize">Anzahl LKWs in Ihrer Flotte</Label>
                  <Input
                    id="fleetSize"
                    type="number"
                    min="1"
                    max="500"
                    value={fleetSize}
                    onChange={(e) => setFleetSize(parseInt(e.target.value) || 1)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="avgFine">Durchschnittliches Bußgeld (€)</Label>
                  <Input
                    id="avgFine"
                    type="number"
                    min="100"
                    max="50000"
                    value={avgFine}
                    onChange={(e) => setAvgFine(parseInt(e.target.value) || 0)}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ein einziger Fehler (Fahren ohne Genehmigung) kostet schnell 2.500€+
                  </p>
                </div>

                <div>
                  <Label htmlFor="hourlyRate">Stundensatz Ihrer Mitarbeiter (€)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    min="20"
                    max="200"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value) || 0)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="hoursPerWeek">Stunden pro Woche für Genehmigungsverwaltung (pro LKW)</Label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    min="1"
                    max="20"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value) || 0)}
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={calculateROI}
                  className="w-full bg-blue-900 hover:bg-blue-800"
                >
                  ROI neu berechnen
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              {results && (
                <>
                  {/* ROI Card */}
                  <Card className={results.roi > 0 ? "border-green-500 border-2" : "border-red-500 border-2"}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className={`w-6 h-6 ${results.roi > 0 ? "text-green-600" : "text-red-600"}`} />
                        Ihre Rendite
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`text-5xl font-bold mb-2 ${results.roi > 0 ? "text-green-600" : "text-red-600"}`}>
                        {results.roi.toFixed(0)}%
                      </div>
                      <p className="text-gray-600">
                        {results.roi > 0
                          ? "HeavyPermit rentiert sich für Sie!"
                          : " Bei kleinen Flotten empfehlen wir den Starter-Tarif"}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Savings Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Ihre Ersparnisse pro Jahr</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-green-600" />
                          <span className="font-medium">Zeitersparnis</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-700">
                            {results.timeSavingsPerYear.toLocaleString()} h
                          </div>
                          <div className="text-sm text-gray-600">
                            = {results.moneySavedTime.toLocaleString()} €
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="font-medium">Vermeidung von Bußgeldern</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-700">
                            {results.moneySavedFines.toLocaleString()} €
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-lg">Gesamtersparnis</span>
                          <span className="text-3xl font-bold text-green-700">
                            {results.totalSavings.toLocaleString()} €
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-2 text-gray-600">
                          <span>Jährliche Kosten für HeavyPermit</span>
                          <span>- {(499 + fleetSize * 20 * 12).toLocaleString()} €</span>
                        </div>
                        <div className="flex items-center justify-between mt-2 font-bold text-xl">
                          <span>Netto-Ersparnis</span>
                          <span className="text-green-700">
                            {(results.totalSavings - (499 + fleetSize * 20) * 12).toLocaleString()} €
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Weitere Vorteile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Rechtliche Sicherheit bei Audits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Professioneller Eindruck bei Kunden</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Weniger Stress für Ihre Mitarbeiter</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
