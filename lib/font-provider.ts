export const fontOptions = [
  { value: "font-sans", label: "Sans Serif" },
  { value: "font-serif", label: "Serif" },
  { value: "font-mono", label: "Monospace" },
]

export function getFontClass(fontFamily: string): string {
  return fontFamily || "font-sans"
}
