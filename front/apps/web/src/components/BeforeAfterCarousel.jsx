import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { useRef } from "react"

const slides = [
  {
    after: "/example/cases/bath/ван_пос1.webp",
    title: "Редизайн магазина ванных пренадлежностей",
    category: "bath",
  },
  {
    after: "/example/cases/bath/ванпос2.webp",
    title: "Редизайн магазина ванных пренадлежностей",
    category: "bath",
  },
  {
    after: "/example/cases/ceil/потпос2.webp",
    title: "Редизайн для компании натяжных потолков",
    category: "ceil",
  },
  {
    after: "/example/cases/ceil/потпос3.webp",
    title: "Редизайн для компании натяжных потолков",
    category: "ceil",
  },
  {
    after: "/example/cases/ceil/потпос4.webp",
    title: "Редизайн для компании натяжных потолков",
    category: "ceil",
  },
  {
    after: "/example/cases/jump/батпос1.webp",
    title: "Редизайн для батутного центра",
    category: "jump",
  },
  {
    after: "/example/cases/jump/батпос4.webp",
    title: "Редизайн для батутного центра",
    category: "jump",
  },

  {
    after: "/example/cases/jump/батпос3.webp",
    title: "Редизайн для батутного центра",
    category: "jump",
  },

  {
    after: "/example/cases/jump/батпос4.webp",
    title: "Редизайн для батутного центра",
    category: "jump",
  },
  {
    after: "/example/cases/jump/батпос5.webp",
    title: "Редизайн для батутного центра",
    category: "jump",
  },
  {
    after: "/example/cases/jump/батпос6.webp",
    title: "Редизайн для батутного центра",
    category: "jump",
  },
  {
    after: "/example/cases/ph/фот1.webp",
    title: "Создание сайта для фотографа",
    category: "photo",
  },

  {
    after: "/example/cases/ph/фот2.webp",
    title: "Создание сайта для фотографа",
    category: "photo",
  },

  {
    after: "/example/cases/ph/фот3.webp",
    title: "Создание сайта для фотографа",
    category: "photo",
  },

  {
    after: "/example/cases/ph/фот4.webp",
    title: "Создание сайта для фотографа",
    category: "photo",
  },

  {
    after: "/example/cases/ph/фот5.webp",
    title: "Создание сайта для фотографа",
    category: "photo",
  },

  {
    after: "/example/cases/ph/фот6.webp",
    title: "Создание сайта для фотографа",
    category: "photo",
  },

  {
    after: "/example/cases/ph/фот7.webp",
    title: "Создание сайта для фотографа",
    category: "photo",
  },
]

const menu = [
  { label: "Ванные принадлежности", category: "bath" },
  { label: "Натяжные потолки", category: "ceil" },
  { label: "Батутный комплекс", category: "jump" },
  { label: "Фотограф", category: "photo" },
]

export default function BeforeAfterCarousel() {
  const [isLoading, setIsLoading] = useState(true)
  const [[page, dir], setPage] = useState([0, 0])
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      filter: "blur(8px)",
    }),
  }
  const intervalRef = useRef(null)
  const index = ((page % slides.length) + slides.length) % slides.length
  const current = slides[index]
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setPage(([p]) => [p + 1, 1])
    }, 4000)
  }

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    startAutoSlide()
  }

  useEffect(() => {
    startAutoSlide()
    return () => clearInterval(intervalRef.current)
  }, [])

  const next = () => {
    setPage(([p]) => [p + 1, 1])
    resetAutoSlide()
  }

  const prev = () => {
    setPage(([p]) => [p - 1, -1])
    resetAutoSlide()
  }

  const goToSlide = (targetIndex) => {
    const currentIndex =
      ((page % slides.length) + slides.length) % slides.length

    const direction = targetIndex > currentIndex ? 1 : -1

    setPage([targetIndex, direction])
    resetAutoSlide()
  }

  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-28 text-white">
      {/* glow */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm tracking-widest text-orange-400 uppercase">
            Кейсы
          </div>
          <h2 className="text-4xl font-semibold md:text-5xl">
            Наши результаты
          </h2>
        </div>

        {/* 🔥 МЕНЮ СЛАЙДОВ */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {menu.map((item, i) => {
            const isActive = current.category === item.category

            return (
              <button
                key={i}
                onClick={() => {
                  const targetIndex = slides.findIndex(
                    (s) => s.category === item.category
                  )
                  if (targetIndex !== -1) goToSlide(targetIndex)
                }}
                className={`relative cursor-pointer overflow-hidden rounded-2xl px-5 py-2 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-orange-500/20 blur-xl" />
                )}

                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* carousel */}
        <div className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl md:p-6 lg:p-8">
            {/* image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 md:aspect-[16/9] lg:aspect-[18/9]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.img
                  key={page} // ❗️ВАЖНО: не index, а page
                  src={current.after}
                  alt="Пример"
                  custom={dir}
                  initial={{ x: dir > 0 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: dir > 0 ? -100 : 100, opacity: 0 }}
                  transition={{
                    x: { duration: 0.3, ease: "easeOut" },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  onLoad={() => setIsLoading(false)}
                />
              </AnimatePresence>

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-white border-t-transparent" />
                </div>
              )}

              {/* shine */}
              <motion.div
                key={index + "-shine"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent"
              />

              {/* arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute top-1/2 left-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur transition hover:bg-black/70"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute top-1/2 right-3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur transition hover:bg-black/70"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* bottom */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-300">{current.title}</div>

              <div className="min-w-fit text-sm text-orange-400">
                {index + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
