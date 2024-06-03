const tg = window.Telegram.WebApp;

export function UseTg() {
  if (!tg) {
    console.error("Telegram WebApp not initialized");
    return {
      onClose: () => {},
      onToggleButton: () => {},
      tg: null,
      user: null,
    };
  }

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

  const user = tg.initDataUnsafe ? tg.initDataUnsafe.user : null;
  
  console.log('Telegram initDataUnsafe:', tg.initDataUnsafe);
  console.log('User:', user);

  return {
    onClose,
    onToggleButton,
    tg,
    user,
  };
}
