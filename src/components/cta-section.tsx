import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готовы попробовать?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Более 50 вкусов, быстрая доставка и скидки на первый заказ. Найдите свой идеальный вкус уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white pulse-button text-lg px-8 py-4"
            >
              Заказать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white text-lg px-8 py-4 bg-transparent"
            >
              Смотреть все вкусы
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}