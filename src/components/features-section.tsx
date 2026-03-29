import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const lines = [
  {
    title: "CLOUD — Фруктовые миксы",
    description: "Яркие многослойные вкусы из спелых тропических фруктов. Манго, арбуз, клубника, личи — сочно с первой затяжки.",
    badge: "Хит продаж",
    image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/121ee8c1-23e4-4311-b699-605d3326ce3a.jpg",
    color: "from-orange-500/20 to-yellow-500/20",
    accent: "text-orange-400",
    border: "border-orange-500/30",
  },
  {
    title: "ICE — Ментол и холод",
    description: "Освежающие жидкости с натуральным охлаждающим эффектом. Идеально для жаркого дня и тех, кто любит свежесть.",
    badge: "Свежесть",
    image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/88e31600-9f34-4a0b-9ee7-94f867ccef67.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    border: "border-blue-500/30",
  },
  {
    title: "SWEET — Десерты",
    description: "Крем-брюле, ванильный пудинг, карамельный попкорн — насыщенные десертные вкусы для вечернего настроения.",
    badge: "Премиум",
    image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/de18a3d2-1288-48c4-b924-e9690f5c6c98.jpg",
    color: "from-amber-500/20 to-yellow-700/20",
    accent: "text-amber-400",
    border: "border-amber-500/30",
  },
]

export function FeaturesSection() {
  const navigate = useNavigate()

  return (
    <section className="py-24 px-6 bg-background" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Наши линейки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Три серии жидкостей с более чем 50 вкусами — от освежающего льда до сладких десертов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${line.border} bg-gradient-to-b ${line.color} overflow-hidden hover:scale-[1.02] transition-all duration-300 slide-up flex flex-col`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={line.image}
                  alt={line.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-purple-600 text-white border-0">
                  {line.badge}
                </Badge>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-bold mb-3 font-orbitron ${line.accent}`}>{line.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">{line.description}</p>
                <Button
                  className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white border-0"
                  onClick={() => navigate("/catalog")}
                >
                  Смотреть вкусы
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}