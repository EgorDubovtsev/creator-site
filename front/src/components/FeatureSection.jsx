import { motion } from "framer-motion"
import { Users, TrendingUp, Rocket } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "6+ лет в разработке",
    desc: "Значимый опыт в IT сфере",
  },
  {
    icon: TrendingUp,
    title: "Конверсия до +30%",
    desc: "Клиенты отзываются о росте конверсии после редизайна на 20–30%, при том же бюджете",
  },
  {
    icon: Rocket,
    title: "Готовый сайт от 7 дней",
    desc: "Быстрый запуск без потери качества",
  },
]

export default function FeatureSection() {
  return (
    <section className="relative bg-[#020617] px-6 py-28 text-white">
      {/* subtle orange ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 bg-orange-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 bg-gradient-to-b from-orange-500/10 via-orange-500/[0.06] to-transparent blur-[220px]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {features.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:border-orange-400/30"
            >
              {/* premium gradient border on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,115,0,0.25), transparent)",
                }}
              />

              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-orange-400/5 transition group-hover:border-orange-400/40">
                  <Icon
                    className="h-9 w-9 text-orange-400 transition group-hover:text-orange-300"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-center text-lg font-medium tracking-tight transition group-hover:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-center text-sm leading-relaxed text-gray-400 transition group-hover:text-gray-300">
                {item.desc}
              </p>

              {/* Accent line */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-orange-400/30 to-transparent opacity-60" />

              {/* subtle hover lift */}
              <div className="absolute inset-0 rounded-2xl transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
