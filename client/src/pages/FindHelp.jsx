import { Link } from "react-router-dom";

function FindHelp() {
  const find_help = [
    {
      title: "placeholder1",
      buttons: [
        { label: "button1", to: "/button1" },
      ],
    },
    {
        title: "placeholder2",
        buttons: [
          { label: "button2", to: "/button2" },
        ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Topics</h1>

      {find_help.map((topic, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl text-center font-semibold">{topic.title}</h2>
          <hr className="my-4 border-gray-300" />
          <div className="flex gap-4 flex-wrap justify-center items-center">
            {topic.buttons.map((btn, idx) => (
              <Link
                key={idx}
                to={btn.to}
                className="bg-gray-500 text-white px-8 py-6 rounded-md text-lg font-semibold hover:bg-gray-600 transition flex items-center justify-center"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindHelp;