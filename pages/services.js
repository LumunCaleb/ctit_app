export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded-2xl p-6">
          <h4 className="text-xl font-bold text-blue-700 mb-2">Smart Energy Meters</h4>
          <p className="text-gray-600">Monitor and optimize energy use, detect theft, and ensure grid stability.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h4 className="text-xl font-bold text-blue-700 mb-2">AI & Embedded Solutions</h4>
          <p className="text-gray-600">We integrate sensors and intelligence into IoT devices for automation and data insights.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h4 className="text-xl font-bold text-blue-700 mb-2">Mobile App Integration</h4>
          <p className="text-gray-600">We build apps that allow users to interact with their devices via Bluetooth or the Internet.</p>
        </div>
      </div>
    </section>
  )
}
