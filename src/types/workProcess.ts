
/**
 * Шаг рабочего процесса
 */
export interface WorkStep {
  /**
   * Номер шага
   */
  step: number;
  
  /**
   * Название шага
   */
  title: string;
  
  /**
   * Описание шага
   */
  description: string;
}
