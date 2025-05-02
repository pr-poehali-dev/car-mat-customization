
import Icon from "@/components/ui/icon";
import { ContactInfo, WorkingHours } from "@/types/contact";

const contactInfo: ContactInfo = {
  address: "г. Москва, ул. Автомобильная, 123",
  phone: "+7 (999) 123-45-67",
  email: "info@autokovrik.ru"
};

const workingHours: WorkingHours = {
  weekdays: "Пн-Пт: 9:00 - 20:00",
  saturday: "Сб: 10:00 - 18:00",
  sunday: "Вс: выходной"
};

const socials = [
  { name: "VK", icon: "MessageCircle", url: "#" },
  { name: "Telegram", icon: "Send", url: "#" },
  { name: "WhatsApp", icon: "MessageSquare", url: "#" },
  { name: "YouTube", icon: "Youtube", url: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 pt-16 text-white relative overflow-hidden">
      {/* Волна сверху */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100C0,79.91,101.77,51.11,219.51,34.74,316.41,21.08,384.5,63.82,451.17,81.36,509.33,96.75,563.75,92.44,621.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mr-3">
                <span className="font-bold text-white text-xl">AK</span>
              </div>
              <h3 className="text-2xl font-bold">АвтоКоврики</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Индивидуальный пошив автомобильных ковриков премиум-класса из высококачественных материалов
            </p>
            <div className="flex space-x-3">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Компания</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  Наши работы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  Блог
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="MapPin" className="w-5 h-5 mr-3 text-primary-400 mt-1" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="w-5 h-5 mr-3 text-primary-400" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="w-5 h-5 mr-3 text-primary-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Режим работы</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Icon name="Calendar" className="w-5 h-5 mr-3 text-primary-400" />
                {workingHours.weekdays}
              </li>
              <li className="flex items-center">
                <Icon name="Calendar" className="w-5 h-5 mr-3 text-primary-400" />
                {workingHours.saturday}
              </li>
              <li className="flex items-center">
                <Icon name="Calendar" className="w-5 h-5 mr-3 text-primary-400" />
                {workingHours.sunday}
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-medium mb-2 flex items-center">
                <Icon name="CreditCard" className="w-4 h-4 mr-2 text-primary-400" />
                Способы оплаты
              </h5>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-bold text-gray-900">VISA</div>
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-bold text-gray-900">MC</div>
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-bold text-gray-900">МИР</div>
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-bold text-gray-900">СБП</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 pb-10 text-center text-gray-500">
          <p>© {year} АвтоКоврики. Все права защищены. <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">Политика конфиденциальности</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
