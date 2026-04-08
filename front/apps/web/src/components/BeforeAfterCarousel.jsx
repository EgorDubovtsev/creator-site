import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

const slides = [
  {
    before: "/example/cases/bath/вандо1.png",
    after: "/example/cases/bath/ван_пос1.png",
    title: "Редизайн магазина ванных пренадлежностей",
    category: "bath",
  },
  {
    before: "/example/cases/bath/вандо2.png",
    after: "/example/cases/bath/ванпос2.png",
    title: "Редизайн магазина ванных пренадлежностей",
    category: "bath",
  },
  {
    before: "/example/cases/ceil/потдо1.png",
    after: "/example/cases/ceil/потпос2.png",
    title: "Редизайн для компании натяжных потолков",
    category: "ceil",
  },
  {
    before: "/example/cases/ceil/потдо2.png",
    after: "/example/cases/ceil/потпос3.png",
    title: "Редизайн для компании натяжных потолков",
    category: "ceil",
  },
  {
    before: "/example/cases/ceil/потдо4.png",
    after: "/example/cases/ceil/потпос4.png",
    title: "Редизайн для компании натяжных потолков",
    category: "ceil",
  },
  {
    before: "/example/cases/jump/батдо1.png",
    after: "/example/cases/jump/батпос1.png",
    title: "Редизайн для батутного центра",
    category: "jump",
  },
  {
    before: "/example/cases/jump/батдо2.png",
    after: "/example/cases/jump/батпос4.png",
    title: "Редизайн для батутного центра",
    category: "jump",
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/jump/батпос3.png",
    title: "Редизайн для батутного центра",
    category: "jump",
    isNew: true,
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/jump/батпос4.png",
    title: "Редизайн для батутного центра",
    category: "jump",
    isNew: true,
  },
  {
    before: "/example/placeholder.png",
    after: "/example/cases/jump/батпос5.png",
    title: "Редизайн для батутного центра",
    category: "jump",
    isNew: true,
  },
  {
    before: "/example/placeholder.png",
    after: "/example/cases/jump/батпос6.png",
    title: "Редизайн для батутного центра",
    category: "jump",
    isNew: true,
  },
  {
    before: "/example/placeholder.png",
    after: "/example/cases/ph/фот1.png",
    title: "Создание сайта для фотографа",
    category: "photo",
    isNew: true,
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/ph/фот2.png",
    title: "Создание сайта для фотографа",
    category: "photo",
    isNew: true,
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/ph/фот3.png",
    title: "Создание сайта для фотографа",
    category: "photo",
    isNew: true,
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/ph/фот4.png",
    title: "Создание сайта для фотографа",
    category: "photo",
    isNew: true,
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/ph/фот5.png",
    title: "Создание сайта для фотографа",
    category: "photo",
    isNew: true,
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/ph/фот6.png",
    title: "Создание сайта для фотографа",
    category: "photo",
    isNew: true,
  },

  {
    before: "/example/placeholder.png",
    after: "/example/cases/ph/фот7.png",
    title: "Создание сайта для фотографа",
    category: "photo",
    isNew: true,
  },
]

const menu = [
  { label: "Ванные принадлежности", category: "bath" },
  { label: "Натяжные потолки", category: "ceil" },
  { label: "Батутный комплекс", category: "jump" },
  { label: "Фотограф", category: "photo" },
]

export default function BeforeAfterCarousel() {
  const [index, setIndex] = useState(0)
  const [showAfter, setShowAfter] = useState(false)
  const [direction, setDirection] = useState(0)

  const current = slides[index]

  // 👉 ВАЖНО: при смене слайда учитываем isNew
  useEffect(() => {
    setShowAfter(current.isNew ? true : false)
  }, [index])

  const next = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prev = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (i) => {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
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
          <h2 className="text-4xl font-semibold md:text-5xl">До / После</h2>
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
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              {/* image */}
              <div className="relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={showAfter ? current.after : current.before}
                  alt="Пример"
                  className="h-full w-full object-cover transition duration-500"
                  onClick={() => setShowAfter(!showAfter)}
                />

                {/* 🔥 УЛУЧШЕННЫЙ ЛЕЙБЛ */}
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/70 px-5 py-2 text-sm font-medium backdrop-blur-xl md:text-base">
                  {showAfter ? "После" : "До"}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 right-4 rounded-xl border border-white/10 bg-black/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl md:text-sm"
                >
                  Нажми на фото для сравнения
                </motion.div>
                {/* arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prev()
                  }}
                  className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur transition hover:bg-black/70"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    next()
                  }}
                  className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur transition hover:bg-black/70"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* bottom */}
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-300">{current.title}</div>

                <div className="text-sm text-orange-400">
                  {index + 1} / {slides.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* controls */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.06]"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.06]"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
