import LinkButton from "../components/LinkButton";

function Forms() {
  const forms = [
    {
      title: "Most Accessed",
      buttons: [
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
      ],
    },
    {
      title: "Family",
      buttons: [
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
      ],
    },
    {
      title: "Employment",
      buttons: [
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
      ],
    },
    {
      title: "Humanitarian",
      buttons: [
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
        { label: "form link", to: "https://www.uscis.gov/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl text-center font-bold mb-8">Forms</h1>
      {forms.map((form, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl text-center font-semibold">{form.title}</h2>
          <hr className="my-4 border-gray-300" />
          <div className="flex flex-wrap justify-center gap-4">
            {form.buttons.map((btn, idx) => (
              <LinkButton key={idx} to={btn.to} className="bg-gray-400">
                {btn.label}
              </LinkButton>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forms;