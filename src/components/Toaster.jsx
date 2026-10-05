import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { Toast } from '@ds/index.js';

const ToastContext = createContext(() => {});

/** Toast pojok kanan atas, otomatis hilang setelah 5 detik. Pakai: const toast = useToast(); toast('success', 'Judul'). */
export function ToasterProvider({ initialToast, children }) {
  // initialToast: [status, title] — hanya untuk preset demo (tanpa auto-dismiss).
  const [toast, setToast] = useState(initialToast ? { status: initialToast[0], title: initialToast[1], key: 0 } : null);
  const timer = useRef();
  const show = useCallback((status, title) => {
    clearTimeout(timer.current);
    setToast({ status, title, key: Date.now() });
    timer.current = setTimeout(() => setToast(null), 5000);
  }, []);
  return (
    <ToastContext.Provider value={show}>
      {children}
      {toast && (
        <div style={{ position: 'fixed', top: 'var(--space-24)', right: 'var(--space-24)', zIndex: 200 }}>
          <Toast key={toast.key} status={toast.status} title={toast.title} dismissible onDismiss={() => setToast(null)} />
        </div>
      )}
    </ToastContext.Provider>
  );
}

// eslint-disable-next-line react/only-export-components
export const useToast = () => useContext(ToastContext);
