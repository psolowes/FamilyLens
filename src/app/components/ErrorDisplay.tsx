export default function ErrorDisplay({ error }: { error: Error }) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded">
      <p>Error: {error.message}</p>
    </div>
  )
}