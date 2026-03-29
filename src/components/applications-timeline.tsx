import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Серия CLOUD — Фрукты",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Флагманская линейка с натуральными фруктовыми вкусами. Высокое содержание VG обеспечивает
            плотный сладкий пар с ярким послевкусием.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Манго Маракуйя — тропический взрыв вкуса
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Арбуз Личи — свежий летний микс
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Клубника Киви — классика с кислинкой
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Серия ICE — Холод",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Ментольная линейка для любителей свежести. Каждый вкус дополнен натуральным охлаждающим эффектом
            без резкости дешёвого ментола.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Мятный Виноград — прохлада и сладость
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Ледяная Дыня — свежесть с первой затяжки
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Полярный Цитрус — кислый лёд
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Серия SWEET — Десерты",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Десертная линейка для сладкоежек. Бархатистые, насыщенные вкусы с кремовым пором — идеально
            для вечернего расслабления.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Крем-брюле — классический французский десерт
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Карамельный Попкорн — сладкий и обволакивающий
            </div>
            <div className="flex items-center gap-3 text-purple-400 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Ванильный Пудинг — нежный и кремовый
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Наши линейки</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три серии жидкостей под любое настроение — фруктовая свежесть, ледяной холод и сладкий десерт.
            Каждая линейка доступна в 3 крепостях никотина.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}