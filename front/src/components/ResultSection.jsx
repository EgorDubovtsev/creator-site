import { motion } from "framer-motion"

export default function ResultSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-40 text-white">
      {/* top separator glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-orange-500/10 to-transparent blur-[180px]" />

      {/* subtle center glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/[0.04] blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 text-xs tracking-[0.3em] text-orange-400 uppercase"
        >
          После всех этапов
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Что вы получаете
        </motion.h2>

        {/* text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-400 md:text-xl"
        >
          В результате вы получаете полностью готовый сайт с продуманной
          структурой и современным интерфейсом. У вас есть полный и эксклюзивный
          доступ ко всем материалам и исходникам — вы самостоятельно управляете
          проектом без ограничений.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl"
        >
          Сайт не привязан к разработчику или платформе. Вы имеете полный
          административный контроль, можете масштабировать проект и использовать
          его как инструмент роста бизнеса.
        </motion.p>

        {/* accent line */}
        <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

        {/* final statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-xl font-medium text-white md:text-2xl"
        >
          Полный контроль. Никакой зависимости.
        </motion.p>
      </div>
    </section>
  )
}
