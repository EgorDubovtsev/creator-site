import { motion } from "framer-motion"
import ElectricBorder from "../../../../src/component/ElectricBorder"

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-40 text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 translate-y-1/2 bg-orange-500/[0.08] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Хватит терять клиентов
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Оставьте заявку — разберём ваш сайт и покажем, где вы теряете деньги
          </p>
        </div>

        {/* form card */}
        <ElectricBorder
          color="#f97316"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            {/* glow hover */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-40" />

            <form className="relative z-10 space-y-8">
              {/* name */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white placeholder-gray-500 transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
                />
              </div>

              {/* select */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Тип сайта
                </label>
                <select className="w-full rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30">
                  <option>На платформе Tilda</option>
                  <option>Индивидуальная разработка</option>
                </select>
              </div>

              {/* phone */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white placeholder-gray-500 transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
                />
              </div>

              {/* email */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white placeholder-gray-500 transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
                />
              </div>

              {/* textarea */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Дополнительно
                </label>
                <textarea
                  rows="4"
                  placeholder="Кратко опишите задачу..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white placeholder-gray-500 transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
                />
              </div>

              {/* button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full overflow-hidden rounded-xl border border-orange-400/40 py-4 text-lg font-medium transition"
              >
                <span className="relative z-10">Получить консультацию</span>

                {/* animated glow */}
                <span className="absolute inset-0 bg-orange-500/10 opacity-0 transition duration-300 hover:opacity-100" />
              </motion.button>

              {/* policy */}
              <p className="text-center text-sm text-gray-500">
                Нажимая кнопку, вы соглашаетесь с обработкой данных
              </p>
            </form>
          </div>
        </ElectricBorder>
      </div>
    </section>
  )
}
