import {useState} from "react";

function App() {
  const [title, setTitle] = useState("Build Your Landing Page Fast");
  const [subtitle, setSubtitle] = useState("Create a stunning landing page in minutes using Tailwind CSS.");
  const [ctaText, setCtaText] = useState("Get Started");
  const [features, setFeatures] = useState([
    { title: "Easy to Use", description: "No coding required, just customize and publish." },
    { title: "Fast Performance", description: "Optimized for speed and efficiency." },
    { title: "Fully Responsive", description: "Looks great on all devices." },
  ]);

  return (
      <div className="min-h-screen flex">
        {/* Sidebar for customization */}
        <div className="w-1/4 p-6 bg-gray-800 text-white min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Customize Page</h2>
          <label className="block mb-2">Title</label>
          <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 mb-4 text-black rounded"
          />
          <label className="block mb-2">Subtitle</label>
          <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full p-2 mb-4 text-black rounded"
          />
          <label className="block mb-2">CTA Text</label>
          <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="w-full p-2 mb-4 text-black rounded"
          />
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          {/* Hero Section */}
          <section className="bg-blue-600 text-white text-center py-20">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4 text-lg">{subtitle}</p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">{ctaText}</button>
          </section>

          {/* Features Section */}
          <section className="py-16 px-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Why Choose Us?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                  <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{feature.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
              ))}
            </div>
          </section>
        </div>
      </div>
  );
}

export default App
