"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, ChevronRight, Settings, Moon, Sun } from "lucide-react"
import type { VisualizerControls } from "./full-composition"

interface OptionsSidebarProps {
  controls: VisualizerControls
  setControls: (controls: VisualizerControls) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function OptionsSidebar({ controls, setControls, collapsed, setCollapsed }: OptionsSidebarProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      if (controls.timeFormat === "datetime") {
        setControls({ 
          ...controls,
          timeValue: `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${now.getFullYear()}`,
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [controls, setControls])

  const handleTimeFormatChange = (format: "year" | "datetime") => {
    const now = new Date()
    setControls({
      ...controls,
      timeFormat: format,
      timeValue:
        format === "year"
          ? now.getFullYear().toString()
          : `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${now.getFullYear()}`,
    })
  }

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 z-10 ${
        collapsed ? "w-16" : "w-80"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-sidebar-primary" />
            <h2 className="font-semibold text-sidebar-foreground">Controls</h2>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-8rem)]">
        {!collapsed && (
          <>
            {/* Theme Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                    <Label htmlFor="theme-toggle" className="text-sm">
                      {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </Label>
                    <Moon className="h-4 w-4" />
                  </div>
                  <Switch id="theme-toggle" checked={isDarkMode} onCheckedChange={toggleTheme} />
                </div>
              </CardContent>
            </Card>

            {/* Title Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Title Display</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title-value">Title Text</Label>
                  <Input
                    id="title-value"
                    value={controls.titleValue}
                    onChange={(e) => setControls({ ...controls, titleValue: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Padding: {controls.titlePadding}%</Label>
                  <Slider
                    value={[controls.titlePadding]}
                    onValueChange={([value]) => setControls({ ...controls, titlePadding: value })}
                    max={15}
                    step={1}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Size: {controls.titleSize}px</Label>
                  <Slider
                    value={[controls.titleSize]}
                    onValueChange={([value]) => setControls({ ...controls, titleSize: value })}
                    min={12}
                    max={105}
                    step={1}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Time Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Time Display</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Format</Label>
                  <Select value={controls.timeFormat} onValueChange={handleTimeFormatChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="year">Current Year</SelectItem>
                      <SelectItem value="datetime">HH:MM YEAR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Padding: {controls.timePadding}%</Label>
                  <Slider
                    value={[controls.timePadding]}
                    onValueChange={([value]) => setControls({ ...controls, timePadding: value })}
                    max={15}
                    step={1}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Size: {controls.timeSize}px</Label>
                  <Slider
                    value={[controls.timeSize]}
                    onValueChange={([value]) => setControls({ ...controls, timeSize: value })}
                    min={12}
                    max={48}
                    step={1}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Appearance Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="text-color">Text Color</Label>
                  <Input
                    id="text-color"
                    type="color"
                    value={controls.textColor}
                    onChange={(e) => setControls({ ...controls, textColor: e.target.value })}
                    className="h-10"
                  />
                </div>
                <div>
                  <Label>Font Family</Label>
                  <Select
                    value={controls.fontFamily}
                    onValueChange={(value) => setControls({ ...controls, fontFamily: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="font-sans">Sans Serif</SelectItem>
                      <SelectItem value="font-serif">Serif</SelectItem>
                      <SelectItem value="font-mono">Monospace</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Footer with collapse button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
        <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="w-full justify-center">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
