import styles from './ExternalLink.module.css'

export default function ExternalLink({ href, children }) {
  return (
    <a href={href} className={styles.link} target='_blank' rel='noreferrer'>
      {children} ↗
    </a>
  )
}
