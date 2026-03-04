// Accent-Color-System fuer HeavyPermit (bold-industrial Preset)
// Rotierende Farben fuer Feature-Cards und How-It-Works Steps

export interface AccentColor {
  bg: string; // Tailwind bg-Klasse
  icon: string; // Tailwind text-Klasse fuer Icons
  border: string; // Tailwind border-Klasse
  label: string; // Sprachliche Beschreibung
}

export const accentColors: AccentColor[] = [
  {
    bg: "bg-blue-100",
    icon: "text-blue-700",
    border: "border-blue-200",
    label: "trust-blue",
  },
  {
    bg: "bg-green-100",
    icon: "text-green-700",
    border: "border-green-200",
    label: "go-green",
  },
  {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    border: "border-orange-200",
    label: "safety-orange",
  },
  {
    bg: "bg-yellow-100",
    icon: "text-yellow-700",
    border: "border-yellow-200",
    label: "attention-yellow",
  },
  {
    bg: "bg-purple-100",
    icon: "text-purple-700",
    border: "border-purple-200",
    label: "authority-purple",
  },
  {
    bg: "bg-teal-100",
    icon: "text-teal-700",
    border: "border-teal-200",
    label: "tech-teal",
  },
];

/**
 * Gibt die Accent-Farbe fuer einen Index zurueck (rotierend).
 */
export function getAccentColor(index: number): AccentColor {
  return accentColors[index % accentColors.length];
}
