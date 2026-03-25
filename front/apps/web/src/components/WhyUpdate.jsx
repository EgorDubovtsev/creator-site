import { motion } from "framer-motion"

export default function WhyUpdate() {
  return (
    <section className="relative bg-[#020617] px-6 py-40 text-white" id="why">
      {/* top glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 bg-gradient-to-t from-orange-500/[0.06] to-transparent blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 text-sm tracking-widest text-orange-400 uppercase">
            Почему обновление сайта — это необходимость
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl leading-tight font-semibold tracking-tight md:text-6xl"
          >
            Старый сайт снижает эффективность
            <br />
            <span className="text-orange-400">каждого вложенного рубля</span>
          </motion.h2>
        </div>

        {/* content grid */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-relaxed text-gray-300"
          >
            <p>
              Вы уже инвестируете в рекламу, трафик и продвижение. Но можете
              получать больше.
            </p>

            <p>
              Причина часто не в маркетинге, а в сайте. Именно он превращает
              посетителя в клиента — или теряет его.
            </p>

            <p>
              Пользователь принимает решение за секунды. Устаревший интерфейс,
              слабая структура и отсутствие логики вызывают недоверие и снижают
              конверсию.
            </p>

            <p>
              В результате вы теряете заявки не из-за спроса, а из-за того, как
              представлен ваш продукт.
            </p>
          </motion.div>

          {/* right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-relaxed text-gray-300"
          >
            <p>
              Обновление сайта — это не редизайн ради визуала. Это показатель
              вашей современности и профессиональности.
            </p>

            <p>
              Каждый блок начинает работать на результат: удержание внимания,
              формирование доверия и подведение к действию.
            </p>

            <p>
              Один и тот же трафик начинает приносить больше заявок — без
              увеличения рекламных расходов.
            </p>
          </motion.div>
        </div>

        {/* bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-12 backdrop-blur-xl"
        >
          <div className="max-w-3xl">
            <p className="mb-6 text-2xl leading-snug text-white md:text-3xl">
              Это инвестиция, которая усиливает все каналы привлечения клиентов.
            </p>

            <p className="text-lg leading-relaxed text-gray-400">
              Вы не просто получаете новый сайт — вы увеличиваете отдачу от
              маркетинга, улучшаете восприятие бренда и создаёте фундамент для
              роста.
            </p>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

            <div className="mt-8 text-sm text-gray-500">
              Больше заявок. Выше конверсия. Сильнее бизнес.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
