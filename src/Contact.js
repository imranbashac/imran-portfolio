const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-l-4 pl-3 border-cyan-500">Contact Me</h2>

        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            alert("✅ Message sent! (Form is frontend only)");
          }}
          className="grid gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-cyan-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-cyan-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
