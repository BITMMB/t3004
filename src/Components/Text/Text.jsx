import TextTruncate from 'react-text-truncate'

export default function Text(txt) {
  let lines
  window.innerWidth <= 420 ? (lines = 4) : (lines = 5)
  return <TextTruncate line={lines} element="span" truncateText="…" text={txt.text} textTruncateChild={''} />
}
