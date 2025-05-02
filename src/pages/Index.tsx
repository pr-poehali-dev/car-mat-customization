
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Герой-секция */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}
        />
        
        <div className="container relative mx-auto px-6 py-16 md:py-24 z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Автомобильные коврики на заказ
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Индивидуальный пошив ковриков для вашего автомобиля из высококачественных материалов
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Оформить заказ
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Icon name="CheckCircle" className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Точное соответствие</h3>
              <p className="text-gray-600">Индивидуальные лекала для каждой модели автомобиля</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Icon name="Timer" className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрое изготовление</h3>
              <p className="text-gray-600">Срок производства от 1 до 3 дней</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Icon name="Star" className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качественные материалы</h3>
              <p className="text-gray-600">Только проверенные материалы премиум класса</p>
            </div>
          </div>
        </div>
      </section>

      {/* Материалы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Материалы</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Мы используем только качественные материалы, которые обеспечивают долговечность и привлекательный вид ковриков
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover-scale">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Автоковролин" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Автоковролин</h3>
                <p className="text-gray-600 mb-4">Представлен в трех вариантах:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-green-500 mr-2" />
                    <span>Стандарт - практичный и доступный вариант</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-green-500 mr-2" />
                    <span>Комфорт - мягкий и приятный на ощупь</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-green-500 mr-2" />
                    <span>Премиум - износостойкий с улучшенной звукоизоляцией</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover-scale">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1600689828143-7d34f3942ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="ЭВА материал" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">ЭВА материал</h3>
                <p className="text-gray-600 mb-4">Инновационный материал с уникальными свойствами:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-green-500 mr-2" />
                    <span>Влагостойкость и непромокаемость</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-green-500 mr-2" />
                    <span>Экологичность и отсутствие запаха</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-green-500 mr-2" />
                    <span>Устойчивость к истиранию и деформации</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Процесс изготовления */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Заявка</h3>
              <p className="text-gray-600">Оставьте заявку или позвоните нам</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Выбор материала</h3>
              <p className="text-gray-600">Выберите тип и цвет материала</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Изготовление</h3>
              <p className="text-gray-600">Мы изготовим коврики по лекалам вашего авто</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">Доставим готовые коврики или вы можете забрать их сами</p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы сделать заказ?</h2>
            <p className="text-xl mb-8">Оставьте свои контактные данные, и мы свяжемся с вами для уточнения деталей</p>
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">АвтоКоврики</h3>
              <p className="text-gray-400">Индивидуальный пошив автомобильных ковриков из качественных материалов</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="MapPin" className="w-5 h-5 mr-2" />
                  <span>г. Москва, ул. Автомобильная, 123</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="w-5 h-5 mr-2" />
                  <span>info@autokovrik.ru</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб: 10:00 - 18:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 АвтоКоврики. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
