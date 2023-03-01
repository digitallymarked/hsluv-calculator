export default function Tag({ children }) {
  return (
    <span
      style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '4px 8px',
        marginLeft: '8px',
        borderRadius: '6px',
      }}
    >
      {children}
    </span>
  )
}
