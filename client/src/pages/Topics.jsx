import { Link } from "react-router-dom";

function Topics() {
  const topics = [
    {
      title: "Immigration",
      buttons: [
        { label: "Registration", to: "/Registration" },
        { label: "Green Cards", to: "/Green-cards" },
        { label: "Legal Support", to: "/Legal-support" },
      ],
    },
    {
      title: "Work & Life",
      buttons: [
        { label: "Driver's Licenses", to: "/Drivers-licenses" },
        { label: "Government Assistance", to: "/Government-assistance" },
        { label: "Employment", to: "/Employment" },
      ],
    },
    {
      title: "Health",
      buttons: [
        { label: "Mental Health", to: "/Mental-health" },
        { label: "Healthcare", to: "/Healthcare" },
        { label: "Reproductive", to: "/Reproductive-health" },
      ],
    },
    {
      title: "Education",
      buttons: [
        { label: "Financial Aid", to: "/Financial-aid" },
        { label: "K-12", to: "/K-12" },
        { label: "Undocumented", to: "/Undocumented" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Topics</h1>

      {topics.map((topic, index) => (
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

export default Topics;
