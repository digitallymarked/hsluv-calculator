export default function Mono({ children, style }) {
  return (
    <span
      style={{
        fontFamily:
          'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
        textTransform: 'uppercase',
        ...style,
      }}
    >
      {children}
    </span>
  )
}
