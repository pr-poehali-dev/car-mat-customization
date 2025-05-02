
/**
 * Особенность материала
 */
export interface MaterialFeature {
  /**
   * Текст особенности материала
   */
  text: string;
}

/**
 * Тип материала (автоковролин или ЭВА)
 */
export interface MaterialType {
  /**
   * Уникальный идентификатор материала
   */
  id: string;
  
  /**
   * Название материала
   */
  name: string;
  
  /**
   * Описание материала
   */
  description: string;
  
  /**
   * URL изображения материала
   */
  image: string;
  
  /**
   * Особенности материала
   */
  features: MaterialFeature[];
}
