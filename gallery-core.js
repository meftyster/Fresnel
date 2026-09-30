/**
 * gallery-core.js — Единый источник конфигурации и логики раскладки фото
 */
window.GalleryCore = {
  offsets: [
    7, 3.5, 11, -6, 8, 2.5, 10.5, -4, 6.5, 12,
    4, 8.5, -7, 3, 11.5, 6, -5, 9, 3.5, 7.5
  ],

  xPatterns: [
    [
      -3.5,  3.2, -1.2,    0.0,  2.8,  3.6, -3.0, -3.4,  1.0, -2.2,
       3.4,  1.8, -3.6,    2.5, -2.8, -1.4,  3.5,  0.0, -3.2,  3.0,
       1.2, -1.0,  3.6, -3.5, -1.8,  2.2,  3.2, -2.5,  0.0,  3.4,
      -3.4,  1.5, -2.0, -3.2,  3.6, -1.2,  2.8,  0.0, -3.6,  3.2
    ],
    [
       1.8, -2.4,  3.1, -1.5,  2.2, -3.2,  1.2,  3.5, -2.0, -1.4,
       3.6, -1.8,  2.4, -3.4,  1.6,  2.8, -2.6,  0.8, -3.1,  3.3,
      -1.6,  2.5, -2.2,  3.4, -3.0,  1.5, -2.8,  3.0, -1.2,  2.4,
       3.2, -3.5,  1.4, -2.0,  3.1, -1.8,  2.6, -3.2,  1.0,  2.7
    ],
    [
      -2.8,  1.4, -3.6,  2.2,  3.5, -1.8, -2.5,  3.1,  1.2, -3.2,
       2.0, -2.6,  3.4, -1.5,  2.8, -3.0,  0.8,  3.6, -2.2,  1.6,
      -3.4,  2.8, -1.2,  3.2, -2.0,  3.0, -3.2,  1.4, -2.6,  3.5,
       1.8, -3.0,  2.4, -1.6,  3.2, -3.4,  1.5,  2.6, -2.8,  1.0
    ],
    [
       3.0, -3.0,  2.4, -2.4,  3.6, -3.2,  1.8, -1.8,  2.6, -3.5,
       3.2, -2.8,  1.5, -3.2,  3.4, -2.2,  2.0, -3.6,  3.1, -1.5,
       2.8, -3.4,  3.5, -2.0,  1.6, -3.1,  3.2, -2.6,  2.2, -3.5,
       3.4, -1.8,  2.5, -3.2,  3.0, -2.5,  1.8, -3.4,  3.6, -2.0
    ],
    [
      -1.2,  1.5, -2.2,  2.5, -3.2,  3.4, -1.0,  2.8, -3.5,  1.8,
      -2.6,  3.2, -1.5,  3.6, -3.0,  2.0, -3.4,  1.2, -2.8,  3.5,
      -1.6,  3.0, -3.2,  2.2, -2.0,  3.6, -3.4,  1.8, -2.5,  3.1,
      -1.4,  2.8, -3.6,  2.0, -3.0,  3.2, -1.8,  2.4, -3.2,  1.6
    ],
    [
       3.4,  2.6, -1.8, -3.2,  1.5, -2.8,  3.2,  1.8, -3.4, -2.0,
       2.5, -3.1,  1.6,  3.5, -2.4, -1.5,  3.0, -3.2,  2.2,  1.4,
      -3.5, -1.8,  3.1,  2.0, -2.6, -3.4,  1.8,  3.0, -2.2, -1.6,
       3.6,  1.2, -3.0, -2.5,  2.8, -3.5,  1.4,  3.2, -2.0, -1.2
    ],
    [
      -3.2, -1.5,  3.4,  1.8, -2.8, -2.0,  3.6,  2.4, -3.0, -1.2,
       3.2,  2.0, -3.5, -1.6,  2.8,  3.2, -2.2, -3.4,  1.8,  3.0,
      -3.4, -2.2,  3.0,  1.6, -3.2, -1.4,  3.5,  2.2, -2.6, -3.0,
       2.4,  3.5, -1.8, -3.2,  2.0,  3.4, -2.5, -1.6,  3.2,  1.8
    ],
    [
       1.5, -1.8,  2.4, -2.0,  1.8, -2.6,  2.2, -1.6,  2.5, -2.2,
       1.6, -2.4,  2.0, -1.8,  2.6, -2.0,  1.5, -2.5,  2.4, -1.7,
       2.2, -2.0,  1.8, -2.4,  2.5, -1.9,  2.0, -2.6,  1.6, -2.2,
       2.4, -1.8,  2.2, -2.5,  1.7, -2.0,  2.6, -1.6,  2.1, -2.3
    ],
    [
      -3.6,  3.5, -2.0,  1.8, -3.4,  3.6, -1.5,  2.4, -3.2,  3.0,
      -3.5,  2.8, -1.8,  3.4, -3.0,  2.2, -3.6,  3.2, -2.4,  1.6,
      -3.2,  3.6, -2.2,  2.6, -3.5,  3.0, -1.8,  3.4, -3.2,  2.5,
      -3.6,  3.4, -2.0,  1.8, -3.0,  3.5, -2.5,  2.8, -3.4,  3.2
    ],
    [
       0.0,  2.5, -2.5,  3.4, -1.8,  1.8, -3.2,  3.0, -2.8,  0.0,
       2.8, -3.4,  1.6, -2.0,  3.5, -3.0,  2.2, -1.4,  3.2, -2.6,
       0.0,  3.2, -3.0,  2.0, -2.4,  3.6, -1.8,  2.8, -3.4,  1.5,
      -2.8,  3.0, -1.6,  3.5, -2.2,  0.0,  3.2, -3.2,  2.4, -1.8
    ],
    [
      -2.4,  2.4, -3.5,  3.5, -1.8,  1.8, -3.0,  3.0, -2.6,  2.6,
      -3.4,  3.4, -1.5,  1.5, -3.2,  3.2, -2.8,  2.8, -3.6,  3.6,
      -2.0,  2.0, -3.2,  3.2, -2.5,  2.5, -3.4,  3.4, -1.8,  1.8,
      -3.6,  3.6, -2.2,  2.2, -3.0,  3.0, -2.6,  2.6, -3.4,  3.4
    ],
    [
      -3.6, -1.8,  2.2, -3.2, -2.4,  1.6, -3.5, -1.2,  2.8, -3.0,
      -2.6,  1.4, -3.4, -2.0,  2.5, -3.6, -1.5,  1.8, -3.2, -2.2,
       2.0, -3.5, -1.6,  2.4, -3.0, -2.8,  1.2, -3.6, -1.8,  2.2,
      -3.4, -2.0,  1.5, -3.2, -2.5,  2.6, -3.6, -1.4,  1.8, -3.0
    ],
    [
       3.5,  1.6, -2.0,  3.2,  2.5, -1.4,  3.6,  1.2, -2.6,  3.0,
       2.4, -1.5,  3.4,  2.0, -2.2,  3.5,  1.8, -1.6,  3.1,  2.4,
      -1.8,  3.6,  1.5, -2.4,  3.0,  2.6, -1.2,  3.5,  1.6, -2.0,
       3.2,  2.2, -1.5,  3.4,  2.5, -2.5,  3.6,  1.4, -1.8,  3.0
    ],
    [
      -3.2,  1.8,  3.2, -1.8, -2.6,  3.4,  2.6, -3.4, -1.5,  2.8,
       3.5, -2.2, -3.0,  1.6,  3.6, -2.0, -2.4,  3.2,  2.8, -3.2,
      -1.8,  2.5,  3.4, -2.8, -3.2,  1.4,  3.0, -1.6, -2.8,  3.6,
       2.2, -3.5, -1.6,  3.0,  3.2, -2.4, -3.4,  1.8,  2.6, -3.0
    ],
    [
       2.0, -3.4,  1.5, -2.8,  3.2, -1.8,  2.6, -3.6,  1.2, -3.0,
       3.5, -2.0,  2.4, -3.2,  1.8, -2.6,  3.4, -1.6,  2.8, -3.5,
       1.4, -3.2,  3.0, -2.2,  2.5, -3.4,  1.6, -2.8,  3.6, -1.8,
       2.2, -3.6,  1.5, -3.0,  3.2, -2.4,  2.0, -3.4,  1.8, -2.8
    ],
    [
      -1.8, -3.2,  2.4,  3.6, -1.4, -2.8,  2.0,  3.4, -2.2, -3.5,
       1.8,  3.2, -1.6, -3.0,  2.5,  3.5, -2.0, -3.4,  1.5,  3.0,
      -1.8, -3.2,  2.2,  3.6, -1.5, -2.8,  2.4,  3.4, -2.0, -3.5,
       1.6,  3.0, -1.8, -3.2,  2.2,  3.4, -1.4, -3.0,  2.5,  3.5
    ],
    [
       3.6, -3.6,  1.2, -1.2,  3.5, -3.5,  1.8, -1.8,  3.4, -3.4,
       1.5, -1.5,  3.6, -3.6,  2.0, -2.0,  3.2, -3.2,  1.6, -1.6,
       3.5, -3.5,  1.4, -1.4,  3.6, -3.6,  1.8, -1.8,  3.2, -3.2,
       2.2, -2.2,  3.5, -3.5,  1.5, -1.5,  3.6, -3.6,  2.0, -2.0
    ],
    [
      -2.0,  1.2, -2.8,  2.2, -1.8,  2.6, -2.4,  1.8, -3.0,  2.4,
      -1.6,  2.8, -2.2,  1.8, -2.6,  2.5, -2.0,  1.6, -3.2,  2.2,
      -1.8,  2.4, -2.5,  2.0, -1.6,  2.8, -2.4,  1.8, -2.8,  2.5,
      -2.0,  1.8, -3.0,  2.2, -1.8,  2.6, -2.2,  1.6, -2.6,  2.4
    ],
    [
       2.6,  3.4, -2.6, -3.4,  1.8,  3.0, -1.8, -3.0,  2.2,  3.6,
      -2.2, -3.6,  1.5,  2.8, -1.5, -2.8,  2.5,  3.2, -2.5, -3.2,
       2.0,  3.5, -2.0, -3.5,  1.6,  3.0, -1.6, -3.0,  2.4,  3.4,
      -2.4, -3.4,  1.8,  3.2, -1.8, -3.2,  2.2,  3.6, -2.2, -3.6
    ],
    [
      -3.4,  2.2, -1.6,  3.5, -2.8,  1.4, -3.6,  3.0, -1.8,  2.6,
      -3.2,  1.8, -2.4,  3.4, -3.0,  2.0, -1.5,  3.6, -3.4,  2.2,
      -2.0,  3.2, -3.5,  1.6, -2.6,  3.0, -3.2,  2.5, -1.8,  3.4,
      -3.6,  2.0, -2.2,  3.2, -2.8,  1.8, -3.4,  2.8, -2.0,  3.6
    ]
  ],

  currentPatternIndex: 0,
  activeXOffsets: null,

  getRandomPatternIndex(excludeIndex = -1) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.xPatterns.length);
    } while (newIndex === excludeIndex && this.xPatterns.length > 1);
    return newIndex;
  },

  initRandomPattern() {
    this.currentPatternIndex = this.getRandomPatternIndex();
    this.activeXOffsets = this.xPatterns[this.currentPatternIndex];
    return this.currentPatternIndex;
  },

  applyPatternToGroup(container, patternIndex) {
    const pattern = this.xPatterns[patternIndex % this.xPatterns.length];
    const cards = container.querySelectorAll('.photo-item, .photo-card');

    cards.forEach((el, index) => {
      const rawVal = pattern[index % pattern.length];
      const xVal = index === 0 ? 0 : rawVal;
      const yVal = parseFloat((-rawVal * 0.45).toFixed(2));

      el.style.setProperty('--x-offset', `${xVal}%`);
      el.style.setProperty('--y-nudge', `${yVal}%`);
    });
  },

  nextPattern() {
    this.currentPatternIndex = (this.currentPatternIndex + 1) % this.xPatterns.length;
    this.activeXOffsets = this.xPatterns[this.currentPatternIndex];

    const cards = document.querySelectorAll('.photo-item, .photo-card');
    cards.forEach((el, index) => {
      const rawVal = this.activeXOffsets[index % this.activeXOffsets.length];
      const xVal = index === 0 ? 0 : rawVal;
      const yVal = parseFloat((-rawVal * 0.45).toFixed(2));

      el.style.setProperty('--x-offset', `${xVal}%`);
      el.style.setProperty('--y-nudge', `${yVal}%`);
    });

    return this.currentPatternIndex;
  },

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

  extractColors(data) {
    if (Array.isArray(data.colors) && data.colors.length > 0) {
      return data.colors;
    }

    let rawSource = '';
    if (typeof data.gradient === 'string') {
      rawSource = data.gradient;
    } else if (typeof data === 'string') {
      rawSource = data;
    }

    if (!rawSource) return ['#f5f5f7'];

    const hexColors = rawSource.match(/#[a-fA-F0-9]{3,8}/g) || [];
    const rgbMatches = rawSource.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*[\d.]+)?\s*\)/g) || [];
    const rgbAsHex = rgbMatches.map(rgbStr => {
      const nums = rgbStr.match(/\d+/g);
      if (!nums || nums.length < 3) return null;
      return '#' + nums.slice(0, 3).map(n => {
        const hex = parseInt(n, 10).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');
    }).filter(Boolean);

    const combined = [...hexColors, ...rgbAsHex];
    return combined.length > 0 ? combined : ['#f5f5f7'];
  },

  getPhotoPalette(allColors) {
    if (!Array.isArray(allColors) || allColors.length < 4) {
      return ['#f5f5f7'];
    }
    return allColors.slice(2, 19);
  },

  getCardLayout(index, photoColors) {
    if (!this.activeXOffsets) {
      this.initRandomPattern();
    }

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

    const rawVal = this.activeXOffsets[index % this.activeXOffsets.length];
    const xOffsetPercent = index === 0 ? 0 : rawVal;
    const yNudgePercent = parseFloat((-rawVal * 0.45).toFixed(2));
    const glowColor = photoColors[pairIndex % photoColors.length];

    return {
      offsetRem,
      xOffsetPercent,
      yNudgePercent,
      glowColor
    };
  },

  applyCardLayout(element, index, photoColors) {
    const layout = this.getCardLayout(index, photoColors);
    element.style.setProperty('--offset', `${layout.offsetRem}rem`);
    element.style.setProperty('--x-offset', `${layout.xOffsetPercent}%`);
    element.style.setProperty('--y-nudge', `${layout.yNudgePercent}%`);
    element.style.setProperty('--glow-color', layout.glowColor);
  }
};

window.GalleryCore.initRandomPattern();
