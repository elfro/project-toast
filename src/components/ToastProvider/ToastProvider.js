import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();
function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([]);

  const resetToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(resetToasts);
  function addToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message
    };

    setToasts([...toasts, newToast]);
  }

  function dismissToast(id) {
    const updatedToasts = toasts.filter(toast => toast.id !== id);

    setToasts(updatedToasts);
  }

  return (
      <ToastContext.Provider value = {{ toasts, addToast, dismissToast }}>
        {children}
      </ToastContext.Provider>
  );
}

export default React.memo(ToastProvider);
