/**
 * Utility functions for liturgical content processing
 */

/**
 * Formats liturgical text with proper rubric styling
 * @param {string} text - The text to format
 * @param {string} type - The type of rubric ('asterisk', 'dagger', 'normal')
 * @returns {string} - Formatted HTML string
 */
export function formatRubric(text, type = 'normal') {
  const className = type === 'normal' ? 'rubric' : `rubric ${type}`;
  return `<span class="${className}">${text}</span>`;
}

/**
 * Creates a lettrine (drop cap) element
 * @param {string} letter - The letter to display as drop cap
 * @param {string} color - The color for the lettrine
 * @returns {string} - Formatted HTML string
 */
export function createLettrine(letter, color = '#DC143C') {
  return `<span class="lettrine" style="color: ${color}">${letter}</span>`;
}

/**
 * Formats psalm verse with proper Latin/English structure
 * @param {string} latin - Latin text
 * @param {string} english - English translation
 * @param {boolean} hasLettrine - Whether to include a lettrine
 * @param {string} lettrine - The lettrine character
 * @returns {object} - Object with formatted left and right content
 */
export function formatPsalmVerse(latin, english, hasLettrine = false, lettrine = '') {
  let leftContent = latin;
  let rightContent = english;
  
  if (hasLettrine && lettrine) {
    leftContent = createLettrine(lettrine) + latin.substring(1);
    rightContent = createLettrine(lettrine) + english.substring(1);
  }
  
  return {
    leftContent,
    rightContent
  };
}

/**
 * Processes liturgical text to add proper markup
 * @param {string} text - Raw liturgical text
 * @returns {string} - Processed text with markup
 */
export function processLiturgicalText(text) {
  return text
    .replace(/\*\s*/g, '<span class="rubric asterisk">*</span> ')
    .replace(/†/g, '<span class="rubric dagger">†</span>')
    .replace(/℣\./g, '<span class="versicle-symbol">℣.</span>')
    .replace(/℟\./g, '<span class="response-symbol">℟.</span>');
}

/**
 * Creates antiphon markup
 * @param {string} text - Antiphon text
 * @returns {string} - Formatted antiphon
 */
export function formatAntiphon(text) {
  return `<span class="rubric">Ant.</span> ${text}`;
}

/**
 * Creates versicle and response markup
 * @param {string} versicle - Versicle text
 * @param {string} response - Response text
 * @returns {object} - Formatted versicle and response
 */
export function formatVersicleResponse(versicle, response) {
  return {
    versicle: `<span class="versicle-symbol">℣.</span> ${versicle}`,
    response: `<span class="response-symbol">℟.</span> ${response}`
  };
}

/**
 * CSS class utilities for common patterns
 */
export const cssClasses = {
  // Typography
  textCenter: 'text-center',
  textRed: 'text-red',
  textGold: 'text-gold',
  fontBold: 'font-bold',
  italic: 'italic',
  smallcaps: 'smallcaps',
  
  // Layout
  section: 'section',
  sectionBreak: 'section-break',
  container: 'container',
  
  // Liturgical
  rubric: 'rubric',
  rubricAsterisk: 'rubric asterisk',
  rubricDagger: 'rubric dagger',
  lettrine: 'lettrine',
  psalmTitle: 'psalm-title',
  sectionTitle: 'section-title',
  
  // Images
  decorativeImage: 'decorative-image',
  pageImageTop: 'page-image-top',
  pageImageBottom: 'page-image-bottom'
};

/**
 * Common liturgical patterns
 */
export const liturgicalPatterns = {
  requiemAeternam: {
    latin: 'Réquiem ætérnam',
    english: 'Eternal rest'
  },
  
  gloriaPatri: {
    latin: 'Glória Patri, et Fílio, et Spirítui Sancto.',
    english: 'Glory be to the Father, and to the Son, and to the Holy Ghost.'
  },
  
  sicutErat: {
    latin: 'Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.',
    english: 'As it was in the beginning, is now, and ever shall be, world without end. Amen.'
  }
};
