"use client"

import { useState } from "react"
import { MainVisualizer } from "./main-visualizer"
import { TitleDisplay } from "./title-display"
import { TimeDisplay } from "./time-display"
import { OptionsSidebar } from "./options-sidebar"

export interface VisualizerControls {
  titlePadding: number
  timePadding: number
  titleSize: number
  timeSize: number
  textColor: string
  titleValue: string
  timeValue: string
  timeFormat: "year" | "datetime"
  fontFamily: string
}

export function FullComposition() {
  const [controls, setControls] = useState<VisualizerControls>({
    titlePadding: 0,
    timePadding: 0,
    titleSize: 24,
    timeSize: 18,
    textColor: "#6366f1",
    titleValue: "WINAMP ONLINE",
    timeValue: new Date().getFullYear().toString(),
    timeFormat: "year",
    fontFamily: "font-mono",
  })

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="relative h-full w-full bg-background overflow-hidden">
      {/* Options Sidebar */}
      <OptionsSidebar
        controls={controls}
        setControls={setControls}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className={`h-full transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-80"}`}>
        
        {/* Title Display - Top Right */}
        <TitleDisplay
          value={controls.titleValue}
          size={controls.titleSize}
          color={controls.textColor}
          padding={controls.titlePadding}
          fontFamily={controls.fontFamily}
        />

        {/* Time Display - Bottom Left */}
        <TimeDisplay
          value={controls.timeValue}
          size={controls.timeSize}
          color={controls.textColor}
          padding={controls.timePadding}
          format={controls.timeFormat}
          fontFamily={controls.fontFamily}
        />

        {/* Main Visualizer - Bottom Center */}
        <MainVisualizer />
      </div>
    </div>
  )
}
