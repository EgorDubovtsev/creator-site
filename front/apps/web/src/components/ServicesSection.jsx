import { motion } from "framer-motion"

const services = [
  {
    title: "Tilda Site Конструктор",
    desc: "Быстрое решение для запуска сайта с понятной структурой и современным дизайном.",
    pros: ["Быстрый запуск", "Простое управление", "Лёгкая поддержка"],
    cons: ["Ограничения платформы"],
    price: "от 20 000 ₽",
    highlight: false,
  },
  {
    title: "Code Site",
    desc: "Индивидуальная разработка с нуля под задачи бизнеса на современных технологиях.",
    pros: [
      "Полная гибкость",
      "Нет ограничений",
      "Возможность реализовать любую логику",
      "Есть варианты реализации",
      "Независимость от платформы",
      "Возможность реализовать профессиональные дизайны",
      "Дешевле поддерживать",
    ],
    cons: ["Более долгий запуск"],
    price: "от 25 000 ₽",
    highlight: true,
  },
]

export default function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#020617] px-6 py-40 text-white"
      id="services"
    >
      {/* glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/[0.05] blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-20 max-w-2xl">
          <div className="mb-6 text-sm tracking-widest text-orange-400 uppercase">
            Услуги
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Выберите формат
            <br /> под ваши задачи
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Два подхода — быстрый запуск или гибкая система. Выбор зависит от
            задач бизнеса и планов на масштабирование.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group relative flex h-full flex-col rounded-3xl border p-10 transition duration-300 ${
                item.highlight
                  ? "border-orange-400/40 bg-gradient-to-b from-orange-500/10 to-transparent"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              {/* title */}
              <h3 className="mb-4 text-2xl font-medium">{item.title}</h3>
              {/* desc */}
              <p className="mb-8 leading-relaxed text-gray-400">{item.desc}</p>
              {/* pros */}
              <div className="mb-6">
                <div className="mb-3 text-sm text-white">Преимущества</div>
                <ul className="space-y-2 text-gray-400">
                  {item.pros.map((p, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              {/* cons */}
              <div className="mb-8">
                <div className="mb-3 text-sm text-white">Особенности</div>
                <ul className="space-y-2 text-gray-500">
                  {item.cons.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="mb-6 text-xl text-white">{item.price}</div>
                <a href="/#contacts">
                  <button className="relative w-full overflow-hidden rounded-xl border border-orange-400/40 px-6 py-3 text-sm text-white transition hover:border-orange-400">
                    <span className="relative z-10">Выбрать вариант</span>
                    <span className="absolute inset-0 bg-orange-500/10 opacity-0 transition group-hover:opacity-100" />
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
