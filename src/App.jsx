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
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
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

        {/* Testimonials Section */}
        <section className="py-16 px-6 text-center bg-gray-200 dark:bg-gray-800">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">What Our Users Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
              <p className="text-gray-900 dark:text-gray-100">"This landing page builder is amazing! It saved me hours of work."</p>
              <h3 className="mt-4 font-bold text-blue-600">- Jane Doe</h3>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
              <p className="text-gray-900 dark:text-gray-100">"A simple yet powerful tool. Highly recommended!"</p>
              <h3 className="mt-4 font-bold text-blue-600">- John Smith</h3>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Pricing Plans</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Basic</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">$9.99/month</p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700">Choose Plan</button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Pro</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">$19.99/month</p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700">Choose Plan</button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Enterprise</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">$49.99/month</p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700">Choose Plan</button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white text-center py-16">
          <h2 className="text-3xl font-bold">Ready to Launch?</h2>
          <p className="mt-4 text-lg">Start building your landing page today.</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">Sign Up</button>
        </section>
      </div>
  );
}

export default App
