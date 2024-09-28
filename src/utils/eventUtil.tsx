import { useCallback, useEffect, useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>( // 어떤 타입의 함수가 와도 실행할 수 있게끔
  func: T,
  delay: number
) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  return useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );
}
