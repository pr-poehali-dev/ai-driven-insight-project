import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Icon from "@/components/ui/icon"

const products = [
  { id: 1, name: "Манго Маракуйя", line: "CLOUD", flavor: "fruit", nicotine: [0, 12, 20], price: 650, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/121ee8c1-23e4-4311-b699-605d3326ce3a.jpg", tags: ["Тропик", "Сладкий"], popular: true },
  { id: 2, name: "Арбуз Личи", line: "CLOUD", flavor: "fruit", nicotine: [0, 12, 20], price: 650, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/121ee8c1-23e4-4311-b699-605d3326ce3a.jpg", tags: ["Ягодный", "Летний"], popular: false },
  { id: 3, name: "Клубника Киви", line: "CLOUD", flavor: "fruit", nicotine: [0, 12, 20], price: 650, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/121ee8c1-23e4-4311-b699-605d3326ce3a.jpg", tags: ["Ягодный", "Кислый"], popular: true },
  { id: 4, name: "Персик Малина", line: "CLOUD", flavor: "fruit", nicotine: [0, 12, 20], price: 650, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/121ee8c1-23e4-4311-b699-605d3326ce3a.jpg", tags: ["Фрукты", "Нежный"], popular: false },
  { id: 5, name: "Мятный Виноград", line: "ICE", flavor: "menthol", nicotine: [0, 12, 20], price: 680, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/88e31600-9f34-4a0b-9ee7-94f867ccef67.jpg", tags: ["Ментол", "Свежий"], popular: true },
  { id: 6, name: "Ледяная Дыня", line: "ICE", flavor: "menthol", nicotine: [0, 12, 20], price: 680, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/88e31600-9f34-4a0b-9ee7-94f867ccef67.jpg", tags: ["Ментол", "Летний"], popular: false },
  { id: 7, name: "Полярный Цитрус", line: "ICE", flavor: "menthol", nicotine: [0, 12, 20], price: 680, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/88e31600-9f34-4a0b-9ee7-94f867ccef67.jpg", tags: ["Ментол", "Кислый"], popular: false },
  { id: 8, name: "Арктическая Мята", line: "ICE", flavor: "menthol", nicotine: [0, 12, 20], price: 680, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/88e31600-9f34-4a0b-9ee7-94f867ccef67.jpg", tags: ["Ментол", "Классика"], popular: true },
  { id: 9, name: "Крем-брюле", line: "SWEET", flavor: "dessert", nicotine: [0, 12, 20], price: 720, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/de18a3d2-1288-48c4-b924-e9690f5c6c98.jpg", tags: ["Десерт", "Кремовый"], popular: true },
  { id: 10, name: "Карамельный Попкорн", line: "SWEET", flavor: "dessert", nicotine: [0, 12, 20], price: 720, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/de18a3d2-1288-48c4-b924-e9690f5c6c98.jpg", tags: ["Десерт", "Сладкий"], popular: false },
  { id: 11, name: "Ванильный Пудинг", line: "SWEET", flavor: "dessert", nicotine: [0, 12, 20], price: 720, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/de18a3d2-1288-48c4-b924-e9690f5c6c98.jpg", tags: ["Десерт", "Нежный"], popular: true },
  { id: 12, name: "Шоколадный Фондан", line: "SWEET", flavor: "dessert", nicotine: [0, 12, 20], price: 720, image: "https://cdn.poehali.dev/projects/10f78860-d0f2-4ad0-b780-7c39d0830780/files/de18a3d2-1288-48c4-b924-e9690f5c6c98.jpg", tags: ["Десерт", "Шоколад"], popular: false },
]

const flavorOptions = [
  { value: "all", label: "Все вкусы" },
  { value: "fruit", label: "Фруктовые" },
  { value: "menthol", label: "Ментол / Лёд" },
  { value: "dessert", label: "Десерты" },
]

const nicotineOptions = [
  { value: "all", label: "Любая крепость" },
  { value: "0", label: "0 мг (без никотина)" },
  { value: "12", label: "12 мг (лёгкий)" },
  { value: "20", label: "20 мг (солевой)" },
]

const lineColors: Record<string, string> = {
  CLOUD: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  ICE: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  SWEET: "bg-amber-500/20 text-amber-300 border-amber-500/30",
}

export default function Catalog() {
  const [flavorFilter, setFlavorFilter] = useState("all")
  const [nicotineFilter, setNicotineFilter] = useState("all")
  const [selectedNicotine, setSelectedNicotine] = useState<Record<number, number>>({})

  const filtered = products.filter((p) => {
    const flavorMatch = flavorFilter === "all" || p.flavor === flavorFilter
    const nicMatch = nicotineFilter === "all" || p.nicotine.includes(Number(nicotineFilter))
    return flavorMatch && nicMatch
  })

  const getNicotineForProduct = (id: number, options: number[]) => {
    return selectedNicotine[id] ?? options[1] ?? options[0]
  }

  return (
    <div className="dark min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">Каталог жидкостей</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Более 50 вкусов в трёх линейках. Выберите свой идеальный вкус.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          <div className="flex flex-wrap gap-2">
            {flavorOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFlavorFilter(opt.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  flavorFilter === opt.value
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-transparent text-gray-400 border-gray-700 hover:border-purple-500 hover:text-purple-400"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="w-px bg-gray-700 hidden md:block" />

          <div className="flex flex-wrap gap-2">
            {nicotineOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setNicotineFilter(opt.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  nicotineFilter === opt.value
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-transparent text-gray-400 border-gray-700 hover:border-purple-500 hover:text-purple-400"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-6 text-center">Найдено: {filtered.length} вкусов</p>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const currentNic = getNicotineForProduct(product.id, product.nicotine)
            return (
              <div
                key={product.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 bg-purple-600 text-white border-0 text-xs">
                      Популярное
                    </Badge>
                  )}
                  <Badge
                    className={`absolute top-3 right-3 border text-xs ${lineColors[product.line]}`}
                    variant="outline"
                  >
                    {product.line}
                  </Badge>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-base mb-1">{product.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Nicotine selector */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Крепость никотина:</p>
                    <div className="flex gap-1">
                      {product.nicotine.map((mg) => (
                        <button
                          key={mg}
                          onClick={() => setSelectedNicotine((prev) => ({ ...prev, [product.id]: mg }))}
                          className={`flex-1 py-1 text-xs rounded-lg border transition-all ${
                            currentNic === mg
                              ? "bg-purple-600 border-purple-600 text-white"
                              : "bg-transparent border-gray-700 text-gray-400 hover:border-purple-500"
                          }`}
                        >
                          {mg} мг
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white font-bold text-lg">{product.price} ₽</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white border-0 gap-1">
                      <Icon name="ShoppingCart" size={14} />
                      В корзину
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Icon name="SearchX" size={48} className="text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Ничего не найдено. Попробуйте изменить фильтры.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
