import './App.css'

function App() {
  const topics = [
    {
      title: "Topic 1",
      buttons: ["Option 1", "Option 2", "Option 3"],
    },
    {
      title: "Topic 2",
      buttons: ["Option 1", "Option 2", "Option 3"],
    },
    {
      title: "Topic 3",
      buttons: ["Option 1", "Option 2", "Option 3"],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">Topics</h1>

      {topics.map((topic, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl font-semibold">{topic.title}</h2>
          <hr className="my-4 border-gray-300" />
          <div className="flex gap-4 flex-wrap">
            {topic.buttons.map((label, idx) => (
              <button
                key={idx}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
