"use client"

interface TimeDisplayProps {
  value: string
  size: number
  color: string
  padding: number
  format: "year" | "datetime"
  fontFamily: string
}

export function TimeDisplay({ value, size, color, padding, fontFamily }: TimeDisplayProps) {
  const INITIAL_PADDING = 5
  const totalPadding = INITIAL_PADDING + padding

  return (
    <div
      className="absolute bottom-0 z-20"
      style={{
        paddingBottom: `${totalPadding}%`,
        paddingLeft: `${totalPadding}%`,
      }}
    >
      <div
        className={`${fontFamily} font-medium`}
        style={{
          fontSize: `${size}px`,
          color: color,
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {value}
      </div>
    </div>
  )
}
