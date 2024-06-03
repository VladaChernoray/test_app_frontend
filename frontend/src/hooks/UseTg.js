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
  }

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe ? tg.initDataUnsafe.user : null,
  };
}
