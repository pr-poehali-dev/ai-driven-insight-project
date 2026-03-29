import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей К.",
    role: "Вейпер со стажем 4 года",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наконец-то нашёл жидкость, которая реально пахнет как манго, а не как конфета «Барбарис». Серия CLOUD — просто огонь!",
  },
  {
    name: "Мария С.",
    role: "Любитель ментола",
    avatar: "/professional-woman-scientist.png",
    content:
      "ICE Ледяная Дыня — лучшее, что со мной случалось этим летом. Заказываю уже третий флакон подряд, советую всем!",
  },
  {
    name: "Дмитрий В.",
    role: "Переходит с сигарет",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Солевой никотин помог мне бросить сигареты. Вкус Крем-брюле настолько хорош, что даже не думаю о табаке.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят покупатели</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы от реальных людей — никакой рекламы, только честный опыт
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}