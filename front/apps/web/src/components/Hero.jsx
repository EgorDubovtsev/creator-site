import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import TextType from "../../../../src/component/TextType"
import Magnet from "../../../../src/component/Magnet"

export const Hero = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* background layer 1 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/back.png')",
        }}
      />

      {/* background layer 2 (parallax) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          marginLeft: "600px",
          backgroundImage: "url('/hand.png')",
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="ml-[8%] max-w-xl">
            <h1 className="text-5xl leading-tight font-bold text-white md:text-6xl">
              Вы
            </h1>
            <TextType
              className="text-5xl leading-tight font-bold text-orange-500 md:text-6xl"
              text={[
                "теряете клиентов",
                "отстаете от конкурентов",
                "теряете деньги",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={[
                "Welcome to React Bits! Good to see you!",
                "Build some amazing experiences!",
              ]}
              deletingSpeed={50}
              // variableSpeedEnabled={false}
              // variableSpeedMin={60}
              // variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
            <h1 className="text-5xl leading-tight font-bold text-white md:text-6xl">
              из-за устаревшего сайта
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Мы перерабатываем сайты малого и среднего бизнеса так, чтобы
              трафик превращался в заявки. Обновляем и упаковываем сайты, чтобы
              они усиливали продажи, а не отпугивали клиентов.
            </p>

            <div className="mt-8 flex gap-4">
              <Magnet padding={25} disabled={false} magnetStrength={5}>
                <a href="/#contacts">
                  <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200">
                    Записаться на консультацию
                    <ArrowRight size={18} />
                  </button>
                </a>
              </Magnet>
              <a href="/#why">
                <button className="rounded-xl border border-white/30 px-6 py-3 text-white transition hover:bg-white/10">
                  Узнать больше
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
