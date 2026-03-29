import { Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              VAPE<span className="text-purple-500">CLOUD</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Жидкости для вейпов с насыщенным вкусом и густым паром. Более 50 вкусов в трёх линейках.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="font-space-mono text-gray-400 hover:text-purple-500 transition-colors duration-200"
                >
                  Все вкусы
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-purple-500 transition-colors duration-200"
                >
                  Линейки
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-purple-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Магазин</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-purple-500 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-purple-500 transition-colors duration-200">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-purple-500 transition-colors duration-200">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-purple-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2026 VAPECLOUD. Все права защищены. Продажа лицам 18+</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-purple-500 text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-purple-500 text-sm transition-colors duration-200"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-purple-500 text-sm transition-colors duration-200"
              >
                Cookie-политика
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}