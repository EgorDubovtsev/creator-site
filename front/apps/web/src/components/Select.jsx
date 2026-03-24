import { useState, useRef, useEffect } from "react"

export default function Select({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const options = [
    { value: "tilda", label: "На платформе Tilda" },
    { value: "custom", label: "Индивидуальная разработка" },
  ]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selected = options.find((o) => o.value === value)

  return (
    <div ref={ref} className="relative w-full">
      <label className="mb-2 block text-sm text-gray-400">Тип сайта</label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-left text-white transition hover:border-white/20 focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
      >
        <div className="flex items-center justify-between">
          <span>{selected ? selected.label : "Выберите тип сайта"}</span>

          <svg
            className={`h-5 w-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#020617] shadow-lg transition-all duration-200 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              onChange(option.value)
              setOpen(false)
            }}
            className={`cursor-pointer px-5 py-3 text-white transition hover:bg-white/5 ${
              value === option.value ? "bg-white/10" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )
}
