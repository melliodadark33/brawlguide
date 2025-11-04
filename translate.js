let translated = false;

function toggleLanguage() {
  const translations = {
    "ОТДЕЛОМ УФМС РОССИИ В ПОС. ХАРП": "DEPARTMENT OF FMS OF RUSSIA IN KHARP",
    "04.06.1976": "04.06.1976",
    "880-111": "880-111",
    "АГАТОВНА": "AGATOVNA",
    "СОНЯ": "SONYA",
    "ЗОМБИ": "ZOMBI",
    "Ж": "F",
    "16.02.2024": "16.02.2024",
    "Г. БОБРУЙСК": "CITY OF BOBRUISK",
    "14  88   193945": "14  88   193945"
  };

  const texts = document.querySelectorAll(".passport-text");

  texts.forEach((el) => {
    // Берём чистый текст без HTML
    const original = el.dataset.original || el.textContent.trim();

    if (!el.dataset.original) {
      el.dataset.original = original; // сохраняем оригинал
    }

    if (!translated) {
      el.textContent = translations[original] || original; // переводим
    } else {
      el.textContent = el.dataset.original; // возвращаем русский
    }
  });

  translated = !translated;
}