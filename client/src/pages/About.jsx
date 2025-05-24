export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Welcome to America</h1>
      <p className="mb-4">
        Welcome to America is a project designed to help newcomers learn about life in the United States. Our goal is to provide helpful resources, practical information, and a supportive community for immigrants and visitors.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What You'll Find Here</h2>
        <ul className="list-disc list-inside">
          <li>Guides on important topics (housing, healthcare, education, etc.)</li>
          <li>Step-by-step instructions for filling out common forms</li>
          <li>Links to local and national support organizations</li>
          <li>Frequently asked questions and answers</li>
        {/* Add more as needed */}
            </ul>
              </section>

              <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
            <p>
              We are a group of Computer Science students at Western Washington University passionate about making a difference in the immigration experience.
            </p>
              </section>

              <section>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>
              Have questions or suggestions? Email us at <a href="mailto:TEMP@welcometoamerica.com" className="text-blue-600 underline">TEMP@welcometoamerica.com</a>
            </p>
          </section>
        </div>
      );
}