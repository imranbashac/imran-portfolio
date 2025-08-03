const AboutAndSkills = () => {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* About Me */}
        <div>
          <h2 className="text-3xl font-bold mb-4 border-l-4 pl-3 border-cyan-500">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            I'm <strong>Imran Basha</strong>, a Senior IT Support & Web
            Administrator with over 5 years of experience. I specialize in
            managing Linux servers, AWS, WordPress, OpenCart, CCTV systems, and
            eCommerce platforms like Zid and Salla. My goal is simple: keep your
            infrastructure secure, stable, and scalable.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-4 border-l-4 pl-3 border-cyan-500">
            Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-medium">
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              AWS Lightsail
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              Linux (Ubuntu)
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              Windows Server
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              Office 365
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              WordPress
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              OpenCart
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              Zid / Salla
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              CCTV (DVR/NVR)
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              Access Control
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              IP Phone Setup
            </li>
            <li className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-3 py-2 rounded shadow">
              HTML / CSS / JS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutAndSkills;
