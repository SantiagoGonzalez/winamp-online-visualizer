
"use client"

import iconUrl from "../static/logo-1.svg"
import iconPng from "../static/logo-1.png"
import Image from "next/image"

interface TitleDisplayProps {
  value: string
  size: number
  color: string
  padding: number
  fontFamily: string
}

export function TitleDisplay({ value, size, color, padding, fontFamily }: TitleDisplayProps) {
  const INITIAL_PADDING = 5
  const totalPadding = INITIAL_PADDING + padding/19

  return (
<div>
  
    <div
      className="absolute top-0 z-20 p-left"
      style={{
        paddingTop: `${totalPadding}%`,
        paddingLeft: `${totalPadding}%`,
      }}
      >
      <div
        className={`${fontFamily} font-bold text-balance font spin`}
        style={{
          color: color,
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        >
       <Image src={iconUrl} alt="" style={{
          color: color,
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }} />      
     </div>
    </div>


    <div
      className="absolute top-0 right-0 z-20"
      style={{
        paddingTop: `${totalPadding}%`,
        paddingRight: `${totalPadding}%`,
      }}
      >
      <div
        className={`${fontFamily} font-bold text-balance`}
        style={{
          fontSize: `${size}px`,
          color: color,
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        >
        {value}
      </div>
    </div>
        </div>
  )
}
