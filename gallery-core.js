/**
 * gallery-core.js — Единый источник конфигурации и логики раскладки фото
 */
window.GalleryCore = {
  // Вертикальные смещения пар в rem
  offsets: [
    7, 3.5, 11, -6, 8, 2.5, 10.5, -4, 6.5, 12,
    4, 8.5, -7, 3, 11.5, 6, -5, 9, 3.5, 7.5
  ],

  // Органичные горизонтальные X-смещения (действуют на всех разрешениях)
  xOffsets: [
    -3.5,  3.2, -1.2,   0.0,  2.8,  3.6, -3.0, -3.4,  1.0, -2.2,
     3.4,  1.8, -3.6,   2.5, -2.8, -1.4,  3.5,  0.0, -3.2,  3.0,
     1.2, -1.0,  3.6, -3.5, -1.8,  2.2,  3.2, -2.5,  0.0,  3.4,
    -3.4,  1.5, -2.0, -3.2,  3.6, -1.2,  2.8,  0.0, -3.6,  3.2
  ],

  // Сортировка изображений по числовому индексу в имени файла
  sortImages(images) {
    return [...images].sort((a, b) => {
      const nameA = (a.src || '').split('/').pop();
      const nameB = (b.src || '').split('/').pop();
      const matchA = nameA.match(/\d+/);
      const matchB = nameB.match(/\d+/);
      const numA = matchA ? parseInt(matchA[0], 10) : 0;
      const numB = matchB ? parseInt(matchB[0], 10) : 0;
      return numA - numB;
    });
  },

  // Извлечение цветов из data.json
  extractColors(data) {
    if (Array.isArray(data.colors) && data.colors.length > 0) return data.colors;
    if (typeof data.gradient === 'string' && data.gradient.includes('#')) {
      return data.gradient.match(/#[a-fA-F0-9]{3,8}/g) || ['#f5f5f7'];
    }
    return ['#f5f5f7'];
  },

  // Палитра для теней и свечений карточек
  getPhotoPalette(allColors) {
    if (allColors.length > 3) {
      return allColors.slice(2, -1);
    }
    return allColors.filter((_, idx) => idx !== 1);
  },

  // Расчёт всех параметров раскладки для конкретной карточки по ее индексу
  getCardLayout(index, photoColors) {
    const pairIndex = Math.floor(index / 2);
    const shiftValue = this.offsets[pairIndex % this.offsets.length];
    let offsetRem = 0;

    if (index === 0) {
      offsetRem = 0;
    } else if (index % 2 === 0) {
      offsetRem = shiftValue < 0 ? Math.abs(shiftValue) : 0;
    } else {
      offsetRem = shiftValue > 0 ? shiftValue : 0;
    }

    const xOffsetPercent = this.xOffsets[index % this.xOffsets.length];
    const glowColor = photoColors[pairIndex % photoColors.length];

    return {
      offsetRem,
      xOffsetPercent,
      glowColor
    };
  },

  // Применение вычисленных стилей к элементу карточки
  applyCardLayout(element, index, photoColors) {
    const layout = this.getCardLayout(index, photoColors);
    element.style.setProperty('--offset', `${layout.offsetRem}rem`);
    element.style.setProperty('--x-offset', `${layout.xOffsetPercent}%`);
    element.style.setProperty('--glow-color', layout.glowColor);
  }
};