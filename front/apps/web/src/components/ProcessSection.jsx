import { motion } from "framer-motion"

const steps = [
  { title: "Анализ", desc: "Собираем информацию: цели, требования и ожидания" },
  {
    title: "Создание макета",
    desc: "Формируем структуру и дизайн под задачи бизнеса",
  },
  {
    title: "Согласование",
    desc: "Вносим правки и утверждаем финальный вариант",
  },
  { title: "Начало работ", desc: "Запускаем разработку сайта" },
  {
    title: "Демонстрация",
    desc: "Показываем результат и дорабатываем при необходимости",
  },
  { title: "Тестирование", desc: "Проверяем сайт на ошибки и стабильность" },
  { title: "Развертывание", desc: "Публикуем сайт и подключаем домен" },
  { title: "Готово", desc: "Сайт полностью готов к работе" },
]

export default function ProcessSection() {
  return (
    <section className="relative bg-[#020617] px-6 py-40 text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/[0.05] blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-24">
          <div className="mb-6 text-sm tracking-widest text-orange-400 uppercase">
            Процесс работы
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Понятный и прозрачный
            <br /> процесс разработки
          </h2>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* top line */}
          <div className="absolute top-8 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

          {/* bottom line */}
          <div className="absolute top-55 left-0 h-[2px] w-full translate-y-[56px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

          <div className="grid gap-16 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* dot */}
                <div className="relative mb-8 flex items-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-orange-400/40 bg-[#020617] text-base font-medium">
                    {index + 1}
                  </div>

                  <div className="absolute left-0 h-14 w-14 rounded-full bg-orange-500/30 opacity-80 blur-2xl" />
                </div>

                {/* content */}
                <div>
                  <h3
                    className={`mb-3 text-xl font-medium ${
                      index === steps.length - 1
                        ? "text-orange-400"
                        : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-base leading-relaxed text-gray-400">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
