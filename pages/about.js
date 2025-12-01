// export default function About() {
//   return (
//     <section className="max-w-5xl mx-auto px-6 py-16">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
//       <p className="text-gray-600 text-lg">
//         CT Integrated Technologies is a Nigerian-based startup using smart IoT, energy meters, and AI-powered systems to solve real-world challenges in utilities, agriculture, and sustainability.
//       </p>
//     </section>
//   )
// }


import { useState } from 'react';

const divisions = [
  {
    title: '1. Agricultural and Agricultural Technology Division',
    content: `
- Vegetable Farming: Engaging in large-scale vegetable farming utilizing innovative technologies.
- Cassava Processing: Establishing a facility for cassava-based products.
- Crop Farming: Producing agricultural crops to support food security.
- Livestock Farming (Fish).
- Agricultural Marketing: Connecting farmers with markets.
    `
  },
  {
    title: '2. Research and Development Division',
    content: `
- Innovative Solutions: R&D for new technologies and products.
- AI and Machine Learning Research.
- Collaboration with academic institutions for specialized projects.
    `
  },
  {
    title: '3. Technology and Software Development Division',
    content: `
- Machine Learning and AI Solutions.
- Microcontroller Programming for IoT devices.
- Mobile Application Development.
- Product Design and Technological Solutions.
- Cyber Security.
    `
  },
  {
    title: '4. Health/Environmental Technology Division',
    content: `
- Health Solutions: Medical tech and software.
- Paper Recycling.
- Leather Recycling.
    `
  },
  {
    title: '5. Engineering Division',
    content: `
- Gadget Maintenance and Repair.
- Automated Vehicle Diagnostics.
- CCTV Installation and Maintenance.
- Computer Networking.
- Solar PV System Installation and Maintenance.
    `
  }
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-white">
      {/* Watermark */}
      <img
        src="/logo.png"
        alt="CT IT Logo Watermark"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 w-[70%] max-w-[500px] pointer-events-none select-none z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Vision Statement</h2>
          <p className="text-gray-700">
            To be a leading tech company in Africa that leverages cutting-edge technologies
            to deliver immediate solutions to pressing issues, while creating sustainable job
            opportunities for the growing global youth population.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Mission Statement</h2>
          <p className="text-gray-700">
            We are an innovative tech organization dedicated to solving emerging problems
            by integrating homegrown and advanced technologies, including AI,
            while providing a platform for job creation to empower unemployed youth.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Accountability:</strong> Full responsibility for our decisions and results.</li>
            <li><strong>Integrity:</strong> Honest, ethical, and transparent practices.</li>
            <li><strong>Collaboration:</strong> Teamwork and partnerships for impact.</li>
            <li><strong>Humility:</strong> Openness to learning and growth.</li>
            <li><strong>Transparency:</strong> Clear communication and openness in operations.</li>
            <li><strong>Equality:</strong> Inclusive environment with equal opportunities.</li>
            <li><strong>Innovation:</strong> Continuous technological advancement.</li>
            <li><strong>Excellence:</strong> Delivering top-tier results in all we do.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Divisions of CT Integrated Technologies</h2>
          <div className="space-y-4">
            {divisions.map((division, index) => (
              <div key={index} className="border rounded shadow-sm">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  {division.title}
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 text-gray-700 whitespace-pre-line">
                    {division.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
