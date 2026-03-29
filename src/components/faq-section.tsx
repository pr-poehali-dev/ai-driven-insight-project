import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какой минимальный заказ?",
      answer:
        "Минимального заказа нет — можно купить хоть один флакон. При заказе от 3 флаконов действует скидка 10%, от 6 флаконов — 15%.",
    },
    {
      question: "Как долго идёт доставка?",
      answer:
        "По Москве и МО — 1-2 дня курьером. В регионы — 3-7 дней через СДЭК или Почту России. Также доступен самовывоз.",
    },
    {
      question: "Какую крепость никотина выбрать?",
      answer:
        "Если вы курили до пачки в день — рекомендуем 20 мг соли. Полпачки и меньше — 10-12 мг. Если хотите без никотина — есть линейка 0 мг.",
    },
    {
      question: "Подходят ли жидкости для любого вейпа?",
      answer:
        "Солевые жидкости — для подов и устройств с высоким сопротивлением. Классические жидкости (свободная основа) — для боксмодов и субомных атомайзеров.",
    },
    {
      question: "Есть ли гарантия качества?",
      answer:
        "Все жидкости произведены на сертифицированном производстве. Состав проверен, флаконы запечатаны. Если жидкость вам не понравилась — обменяем или вернём деньги.",
    },
    {
      question: "Можно ли заказать пробники?",
      answer:
        "Да! У нас есть наборы-пробники по 10 мл из каждой серии. Отличный способ найти свой любимый вкус перед покупкой полного флакона.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о заказе, доставке, выборе вкуса и крепости никотина.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-purple-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-purple-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}