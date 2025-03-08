import Navbar from "../components/Navbar.tsx";
import { useEffect } from "preact/hooks";
import gsap from "https://cdn.skypack.dev/gsap";

export default function AboutPage() {
  useEffect(() => {
    gsap.from(".animate-fade-in", { opacity: 0, y: 20, duration: 1, stagger: 0.2 });
    gsap.from(".animate-slide-in", { opacity: 0, y: 40, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 overflow-hidden">
      <Navbar />
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">About Epyac AI</h1>
        </div>
      </header>
      <main className="relative">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg animate-slide-in">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Our Mission</h2>
              <p className="mt-1 text-sm text-gray-500">
                At Epyac AI, our mission is to make AI more accessible and integrated into everyday applications. We aim to provide users with intuitive tools that leverage the power of AI to enhance their experiences.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
              <ul className="mt-2 text-sm text-gray-500">
                <li className="animate-fade-in">Seamless AI Integration</li>
                <li className="animate-fade-in">User-Friendly Interface</li>
                <li className="animate-fade-in">Open-Source Contributions Welcome</li>
              </ul>
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">Contribute</h3>
              <p className="mt-1 text-sm text-gray-500">
                We welcome contributions from the community. Visit our GitHub repository to learn how you can contribute to the project.
              </p>
              <a href="https://github.com/asaadzx" target="_blank" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-300 hover:scale-105">
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
