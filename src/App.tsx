import React from 'react';
import PxToRemConverter from './components/PxToRemConverter';
import { GithubIcon } from 'lucide-react'; // Correct the import

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Px to Rem Converter Tool</h1>
      <PxToRemConverter />
      <footer className="mt-8 text-center text-gray-600">
        <p>Created with React and Tailwind CSS</p>
        <a
          href="https://github.com/yourusername/px-to-rem-converter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2"
        >
          <GithubIcon className="w-5 h-5 mr-2" /> {/* Use the correct icon component */}
          View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;