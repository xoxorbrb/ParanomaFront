export function useDebounce<T extends (...args: any[]) => void>( // 어떤 타입의 함수가 와도 실행할 수 있게끔
  func: T,
  delay: number
) {
  let timer: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
