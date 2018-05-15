export const listWords = (words) => (
  words.map((word, i) => {
    if (i === words.length-1) return ` and ${word}`
    if (i > 0 && i < words.length) return `, ${word}`
    return word
  }).join('')
)
