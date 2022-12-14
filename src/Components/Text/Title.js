import TextTruncate from 'react-text-truncate'

export default function Title(txt) {
  return <TextTruncate line={2} element="span" truncateText="…" text={txt.text} textTruncateChild={''} />
}
