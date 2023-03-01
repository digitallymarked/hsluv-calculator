export default function Tag({ children }) {
  return (
    <span
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '4px 8px',
        marginLeft: '8px',
        borderRadius: '6px',
        fontFamily:
          'ui-monospace, "Cascadia Mono", "Segoe UI Mono", "Ubuntu Mono", "Roboto Mono",Menlo, Monaco, Consolas,monospace',
      }}
    >
      {children}
    </span>
  )
}
