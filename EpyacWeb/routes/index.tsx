import Navbar from "../components/Navbar.tsx";
import { useEffect } from "preact/hooks";
import gsap from "https://cdn.skypack.dev/gsap";

export default function HomePage() {
  useEffect(() => {
    gsap.from(".animate-fade-in", { opacity: 0, y: 20, duration: 1, stagger: 0.2 });
    gsap.from(".animate-slide-in", { opacity: 0, y: 40, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 overflow-hidden">
      <Navbar />
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">Welcome to Epyac AI</h1>
          <p className="mt-2 text-lg text-gray-600 animate-fade-in">Innovating AI Integrations</p>
        </div>
      </header>
      <main className="relative">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-6 bg-white shadow px-4 py-5 sm:p-6 animate-slide-in rounded-lg overflow-hidden">
            <h2 className="text-lg font-medium text-gray-1200">About Epyac AI</h2>
            <p className="mt-1 text-medium text-black-500">
              Epyac AI is dedicated to enhancing AI capabilities and making them accessible for everyday use. Our mission is to integrate AI seamlessly into various applications, providing users with intuitive and powerful tools.
            </p>
            <br/>
            <h3 className="text-lg font-medium text-gray-1200">Key Features</h3>
            <ul className="mt-2 text-medium text-black-500">
              <li className="animate-fade-in">Seamless AI Integration</li>
              <li className="animate-fade-in">User-Friendly Interface</li>
              <li className="animate-fade-in">Open-Source Contributions Welcome</li>
            </ul>
          </div>
          <div className="mt-6 bg-white shadow px-4 py-5 sm:p-6 animate-slide-in rounded-lg overflow-hidden">
            <h2 className="text-lg font-medium text-gray-1200">Get Started</h2>
            <p className="mt-1 text-medium text-black-500">
              To get started with Epyac AI, explore our GitHub repository and learn how you can contribute to the project. We welcome contributions from the community and look forward to collaborating with you.
            </p>
          </div>
          <div className="mt-6 bg-white shadow px-4 py-5 sm:p-6 animate-slide-in rounded-lg overflow-hidden">
            <h2 className="text-lg font-medium text-gray-1200">Contribute</h2>
            <p className="mt-1 text-medium text-black-500">
              We welcome contributions from the community. Visit our GitHub repository to learn how you can contribute to the project.
            </p>
          <div className="mt-6 bg-white shadow px-10 border-t border-gray-200 px-4 py-5 sm:px-6 rounded-lg">
            
            <div className="mt-4 space-y-4 relative animate-fade-in">

              <a href="https://github.com/asaadzx/Epyac_AI/" target="_blank" className="block text-indigo-600 background-color:rgb(95, 90, 124) animate-fade-in hover:underline">
                Explore the Repository
              </a>

              <a href="https://github.com/asaadzx" target="_blank" className="block text-indigo-600 hover:underline">
                Visit the Developer
              </a>

            </div>
           </div>
          </div>
        </div>
      </main>
    </div>
  );
}
