import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function AboutMe() {
  return (
    <section
      className="relative -mt-20 overflow-hidden bg-[#020617] px-6 py-28 text-white"
      id="about"
    >
      {/* ambient orange glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* label */}
          <div className="mb-6 text-sm tracking-widest text-orange-400 uppercase">
            Обо мне
          </div>

          {/* name */}
          <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Егор
          </h2>

          {/* main text */}
          <p className="mb-6 leading-relaxed text-gray-300">
            Работаю в IT уже более 6 лет. Я занимаюсь разработкой сайтов для
            бизнеса, который уже вложился в рекламу, но недополучает заявки
            из-за устаревшего интерфейса и слабой структуры.
          </p>

          <p className="mb-8 leading-relaxed text-gray-400">
            Работаю напрямую с заказчиками. Моя задача — повысить эффективность
            существующего трафика и превратить посетителей сайта в клиентов.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="/#contacts">
              <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-black transition hover:bg-orange-400">
                Связаться
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </a>

            <div className="text-sm text-gray-500">
              Начнем работу в ближайшее время
            </div>
          </div>
        </motion.div>

        {/* RIGHT: VISUAL / PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* border glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-70 blur-xl" />

          {/* card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            {/* fake photo placeholder */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#020617] text-sm text-gray-500">
              <img src="/im.png" alt="Автор" />
            </div>

            {/* bottom info */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">
                  Frontend / UX / Backend
                </div>
                <div className="text-sm text-white">Web Developer</div>
              </div>

              <div className="text-sm text-orange-400">опыт 6+ лет</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
