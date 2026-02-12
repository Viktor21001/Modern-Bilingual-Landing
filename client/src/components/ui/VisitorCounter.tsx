import { useEffect, useState } from 'react';

interface VisitorCounterProps {
  className?: string;
}

export default function VisitorCounter({ className = '' }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const namespace = 'my-english-online';
    const key = 'visitors';
    const url = `https://countapi.xyz/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`;

    const fallbackToLocal = () => {
      try {
        const localKey = 'my-english-online-local-count';
        const sessionKey = 'my-english-online-session';
        const stored = Number(localStorage.getItem(localKey) || 0);
        const alreadyCounted = sessionStorage.getItem(sessionKey) === '1';
        const next = alreadyCounted ? stored : stored + 1;
        localStorage.setItem(localKey, String(next));
        sessionStorage.setItem(sessionKey, '1');
        setCount(next);
      } catch {
        setError(true);
      }
    };

    fetch(url)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setCount(data.value);
        } else {
          fallbackToLocal();
        }
      })
      .catch(() => {
        fallbackToLocal();
      });
  }, []);

  if (count === null && !error) {
    return null;
  }
  if (error) {
    return (
      <span className={`text-xs text-muted-foreground ${className}`}>
        🧮 ?
      </span>
    );
  }

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium ${className}`}
      data-testid="counter-footer-views"
    >
      <span>👥</span>
      <span>{count}</span>
    </div>
  );
}