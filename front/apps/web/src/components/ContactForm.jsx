import { motion } from "framer-motion"
import { useState } from "react"
import { IMaskInput } from "react-imask"
import ElectricBorder from "../../../../src/component/ElectricBorder"
import Select from "./Select"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    siteType: "На платформе Tilda Конструктор",
    phone: "",
    email: "",
    message: "",
  })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSuccess(false)
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Введите имя"
    }

    if (!form.siteType.trim()) {
      newErrors.name = "Укажите тип сайта"
    }

    if (!form.email.trim()) {
      newErrors.email = "Введите email"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Некорректный email"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    setServerError("")

    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/form/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("RATE_LIMIT")
        }
        throw new Error("GENERIC")
      }

      setErrors({})
      setSuccess(true)
    } catch (err) {
      if (err.message === "RATE_LIMIT") {
        setServerError("Слишком много запросов. Попробуйте позже")
      } else {
        setServerError("Не удалось отправить форму. Попробуйте позже")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="relative overflow-hidden bg-[#020617] px-6 py-40 text-white"
      id="contacts"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 translate-y-1/2 bg-orange-500/[0.08] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Хотите перестать терять клиентов?
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

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              {/* name */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">Имя</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white placeholder-gray-500 transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <Select
                  value={form.siteType}
                  name="siteType"
                  onChange={(val) => {
                    setForm((prev) => ({ ...prev, siteType: val }))
                    setSuccess(false)
                  }}
                />
              </div>

              {/* phone */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Телефон
                </label>
                <IMaskInput
                  mask="+{7} (000) 000-00-00"
                  value={form.phone}
                  onAccept={(value) => {
                    setForm((prev) => ({ ...prev, phone: value }))
                    setSuccess(false)
                  }}
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white placeholder-gray-500 transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* textarea */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Дополнительно
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Кратко опишите задачу..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#020617] px-5 py-4 text-white placeholder-gray-500 transition outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/30"
                />
              </div>

              {/* server error */}
              {serverError && (
                <p className="text-center text-sm text-red-400">
                  {serverError}
                </p>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-green-400/20 bg-green-500/10 px-5 py-4 text-center text-sm text-green-300 backdrop-blur"
                >
                  Заявка успешно отправлена. Мы свяжемся с вами в ближайшее
                  время
                </motion.div>
              )}
              {/* button */}
              <motion.button
                type="submit"
                disabled={loading || success}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full overflow-hidden rounded-xl border border-orange-400/40 py-4 text-lg font-medium transition disabled:opacity-50"
              >
                <span className="relative z-10">
                  {loading ? "Отправка..." : "Получить консультацию"}
                </span>

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
