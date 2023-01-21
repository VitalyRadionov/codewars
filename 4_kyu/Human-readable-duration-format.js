function formatDuration(seconds) {
  let theEnding = (e) => e > 1 ? 's' : '';

  const s2 = seconds % 60,
    m2 = Math.floor(seconds / 60) % 60 || '',
    h2 = Math.floor(seconds / (60 * 60)) % 24 || '',
    d2 = Math.floor(seconds / (24 * 60 * 60)) % 365 || '',
    y2 = Math.floor(seconds / (365 * 24 * 60 * 60)) || '';

  let date = {
    s: s2 ? `${(m2 || h2 || d2 || y2) ? ' and ' : ''}${s2} second${theEnding(s2)}` : seconds ? '' : 'now',
    m: m2 ? `${(h2 || d2 || y2) && s2 ? ', ' : m2 && s2 ? '' : m2 && h2 ? ' and ' : ''}${m2} minute${theEnding(m2)}` : '',
    h: h2 ? `${d2 ? ', ' : ''}${h2} hour${theEnding(h2)}` : '',
    d: d2 ? `${y2 ? ', ' : ''}${d2} day${theEnding(d2)}` : '',
    y: y2 ? `${y2} year${theEnding(y2)}` : '',
    dateString() {
      return `${this.y}${this.d}${this.h}${this.m}${this.s}`;
    },
  }

  return date.dateString();
}

console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"