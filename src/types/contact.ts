
/**
 * Контактная информация
 */
export interface ContactInfo {
  /**
   * Физический адрес
   */
  address: string;
  
  /**
   * Телефонный номер
   */
  phone: string;
  
  /**
   * Email адрес
   */
  email: string;
}

/**
 * Часы работы
 */
export interface WorkingHours {
  /**
   * Рабочие дни недели
   */
  weekdays: string;
  
  /**
   * Суббота
   */
  saturday: string;
  
  /**
   * Воскресенье
   */
  sunday: string;
}
