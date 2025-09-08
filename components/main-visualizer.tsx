"use client"

export function MainVisualizer() {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full w-full">
        {/* Main Circle Visualizer */}
        <svg width="100%" height="100%" viewBox="0 0 300 300" className="drop-shadow-lg">
          {/* Outer glow effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Main circle */}
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            className="animate-pulse"
          />

          {/* Inner circle */}
          <circle
            cx="150"
            cy="150"
            r="80"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeOpacity="0.5"
            strokeDasharray="5,5"
            className="animate-spin"
            style={{ animationDuration: "8s" }}
          />

          {/* Center dot */}
          <circle cx="150" cy="150" r="4" fill="#6366f1" className="animate-pulse" />
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
