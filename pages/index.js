import Link from 'next/link'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">
        Powering Innovation in Africa
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        We build intelligent solutions across hardware, software, and AI.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Get Started
      </Link>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
          CT Integrated Technologies is a Nigerian-based startup using smart IoT, Intelligent Systems and AI-powered systems
          to solve real-world challenges in utilities, agriculture, and sustainability.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Smart Energy Meters:</strong> Monitor and optimize energy use, detect theft, and ensure grid stability.
          </li>
          <li>
            <strong>AI & Embedded Solutions:</strong> We integrate sensors and intelligence into IoT devices for automation and data insights.
          </li>
          <li>
            <strong>Mobile App Integration:</strong> We build apps that allow users to interact with their devices via Bluetooth or the Internet.
          </li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          Want to collaborate or need a custom solution? Let’s talk.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
