import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    before:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJrI3apAHvnc0rsNtAnLoNNAzXrcaLDShhA&s",
    after:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTGl5Uksk1N_oPVrafqgt8UTdznR_oaJIHg&s",
    title: "Landing page redesign",
  },
  {
    before:
      "https://png.pngtree.com/background/20230613/original/pngtree-desktop-wallpaper-xp-picture-image_3417495.jpg",
    after:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTGl5Uksk1N_oPVrafqgt8UTdznR_oaJIHg&s",
    title: "E-commerce UX upgrade",
  },
  {
    before:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTGl5Uksk1N_oPVrafqgt8UTdznR_oaJIHg&s",
    after:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJrI3apAHvnc0rsNtAnLoNNAzXrcaLDShhA&s",
    title: "Corporate website refresh",
  },
]

export default function BeforeAfterCarousel() {
  const [index, setIndex] = useState(0)
  const [showAfter, setShowAfter] = useState(false)
  const [direction, setDirection] = useState(0)
  const next = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % slides.length)
    setShowAfter(false)
  }

  const prev = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setShowAfter(false)
  }

  const current = slides[index]

  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-28 text-white">
      {/* glow */}
      <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-sm tracking-widest text-orange-400 uppercase">
            Кейсы
          </div>
          <h2 className="text-4xl font-semibold md:text-5xl">До / После</h2>
        </motion.div>

        {/* carousel */}
        <div className="relative">
          {/* card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              {/* image */}
              <div className="relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={showAfter ? current.after : current.before}
                  alt="case"
                  className="h-full w-full object-cover transition duration-500"
                  onClick={() => setShowAfter(!showAfter)}
                />

                {/* overlay label */}
                <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1 text-xs backdrop-blur">
                  {showAfter ? "После" : "До"}
                </div>

                {/* hint */}
                <div className="absolute top-4 right-4 text-xs text-white/60">
                  нажми для сравнения
                </div>

                {/* 🔥 КНОПКИ НА ФОТО */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prev()
                  }}
                  className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur transition hover:bg-black/70"
                >
                  <ArrowLeft className="h-5 w-5 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    next()
                  }}
                  className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur transition hover:bg-black/70"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
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
