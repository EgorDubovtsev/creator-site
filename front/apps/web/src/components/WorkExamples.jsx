import CardSwap, { Card } from "../../../../src/component/CardSwap"
import ColorBends from "../../../../src/component/ColorBends"

export const WorkExamples = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-black py-16 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          rotation={55}
          speed={0.2}
          colors={["#f97316", "#f97316"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.9}
          noise={0}
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-6 md:flex-row md:gap-20 md:px-8">
        {/* Левая часть */}
        <div className="mx-auto max-w-md rounded bg-[#020617] p-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white md:text-9xl">Примеры</h2>

          <p className="mt-4 text-base leading-relaxed text-white md:mt-6 md:text-lg">
            Несколько примеров интерфейсов и дизайнов. Мы создаём современные,
            быстрые и визуально чистые продукты, которые помогают компаниям
            выглядеть свежее и выделяться среди конкурентов.
          </p>
        </div>

        {/* Правая часть */}
        <div className="relative hidden h-[500px] w-[720px] items-center justify-center md:flex">
          <CardSwap
            width={400}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <div
                className="aspect-video w-[720px] rounded-xl border border-neutral-800 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/example/ex1.webp')",
                }}
              />
            </Card>

            <Card>
              <div
                className="aspect-video w-[720px] rounded-xl border border-neutral-800 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/example/ex2.webp')",
                }}
              />
            </Card>

            <Card>
              <div
                className="aspect-video w-[720px] rounded-xl border border-neutral-800 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/example/ex3.webp')",
                }}
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  )
}

export default WorkExamples
