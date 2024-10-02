export default function DocumentList() {
  const documents = [
    "Smith Family Portrait",
    "Johnson-Brown Wedding",
    "War Memories"
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Uploaded Documents</h2>
      <ul>
        {documents.map((doc, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center mr-2">
              <span className="text-xs">📄</span>
            </div>
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}