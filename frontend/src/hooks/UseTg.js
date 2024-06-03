import { useState, useEffect } from 'react';

const tg = window.Telegram?.WebApp;

export function UseTg() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (tg) {
      tg.ready();
      setUser(tg.initDataUnsafe ? tg.initDataUnsafe.user : null);
    } else {
      console.error("Telegram WebApp not initialized");
    }
  }, []);

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user,
  };
}
