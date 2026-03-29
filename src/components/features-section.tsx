import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Фруктовые миксы",
    description: "Яркие многослойные вкусы из спелых фруктов — манго, арбуз, клубника, личи. Сочно с первой затяжки.",
    icon: "brain",
    badge: "Хит",
  },
  {
    title: "Ментол и лёд",
    description: "Освежающие жидкости с холодным послевкусием. Идеально для жаркого дня или тех, кто любит свежесть.",
    icon: "lock",
    badge: "Свежесть",
  },
  {
    title: "Десерты и сладкое",
    description: "Крем-брюле, ванильный пудинг, карамельный попкорн — насыщенные десертные вкусы без калорий.",
    icon: "globe",
    badge: "Сладко",
  },
  {
    title: "Высокий VG",
    description: "Жидкости с повышенным содержанием VG для максимально густого и плотного облака пара.",
    icon: "zap",
    badge: "Облако",
  },
  {
    title: "Солевой никотин",
    description: "Никотиновые соли для быстрого и мягкого насыщения. Подходят для подов и малых девайсов.",
    icon: "link",
    badge: "Salt Nic",
  },
  {
    title: "Без никотина",
    description: "Полная линейка 0 мг — все вкусы доступны без никотина для чистого удовольствия от пара.",
    icon: "target",
    badge: "0 мг",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans" id="features">Наши вкусы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 50 вкусов на любой настроение — от освежающего льда до сладких десертов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}