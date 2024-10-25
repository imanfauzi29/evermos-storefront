import React, { useEffect, useRef, useState } from "react"
import styles from "./DoubleRangeSlider.module.css"

interface DoubleRangeSliderProps {
  min: number
  max: number
  minValues: number
  maxValues: number
  from: (t: number) => void
  to: (t: number) => void
  step?: number
}

const DoubleRangeSlider = ({
  minValues,
  min = 0,
  maxValues,
  max = 100,
  from,
  to,
  step = 1,
}: DoubleRangeSliderProps) => {
  const [minValue, setMinValue] = useState(minValues)
  const [maxValue, setMaxValue] = useState(maxValues)
  const minRangeRef = useRef<HTMLInputElement>(null)
  const maxRangeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    updateTrack()
  }, [minValue, maxValue])

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1)
    from(value)
    setMinValue(value)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1)
    to(value)
    setMaxValue(value)
  }

  const updateTrack = () => {
    const rangeTrack = document.querySelector(
      `.${styles.sliderRange}`,
    ) as HTMLElement

    if (minRangeRef.current && maxRangeRef.current) {
      const percentMin = ((minValue - min) / (max - min)) * 100
      const percentMax = ((maxValue - min) / (max - min)) * 100
      rangeTrack.style.left = `${percentMin}%`
      rangeTrack.style.width = `${percentMax - percentMin}%`
    }
  }

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderTrack}></div>
      <div className={styles.sliderRange}></div>

      <input
        ref={minRangeRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        className={styles.rangeInput}
      />

      <input
        ref={maxRangeRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className={styles.rangeInput}
      />
    </div>
  )
}

export default DoubleRangeSlider
