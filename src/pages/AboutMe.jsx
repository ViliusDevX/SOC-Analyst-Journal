function AboutMe() {
  return (
    <section className="space-y-8">
      <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-8">
        <p className="text-sm text-emerald-400 mb-2">
          About Me
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Who Am I?
        </h1>

        <p className="text-zinc-400 max-w-4xl leading-relaxed">
          I am a 17-year-old cybersecurity enthusiast focused on SOC skills,
          CySA+ preparation, frontend development, and building practical
          projects. I have achieved Security+, built security scripts and
          personal tools, worked with CTF-style labs, and I am currently
          developing a purple team home lab with pfSense, Wazuh, Kali, Windows,
          and Active Directory.
        </p>

        <p className="text-zinc-400 max-w-4xl leading-relaxed mt-4">
          My long-term goal is to build valuable tools that are not just
          portfolio projects, but useful systems that help people learn,
          practice, and improve real technical skills.
        </p>
      </div>

      <div>
        <p className="text-sm text-emerald-400 mb-2">
          Project Purpose
        </p>

        <h2 className="text-3xl font-bold mb-5">
          What Is SOC Journal?
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-emerald-500 transition">
            <h3 className="text-xl font-semibold mb-3">
              Capture My Learning
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              This project documents my progress over time through raw CySA+
              questions, SOC scenarios, mistakes, answers, and future reviews.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-emerald-500 transition">
            <h3 className="text-xl font-semibold mb-3">
              Showcase My Skills
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              SOC Journal combines cybersecurity thinking with frontend
              development by using React, Tailwind, JSON data, reusable
              components, and structured analyst-style content.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6 hover:border-emerald-500 transition">
            <h3 className="text-xl font-semibold mb-3">
              Help Others Practice
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              The most important goal is to eventually let users practice SOC
              scenarios for free, so people like me can learn alert triage and
              investigation thinking without needing paid platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Current Focus
          </h3>

          <ul className="space-y-3 text-zinc-400">
            <li>• CySA+ preparation</li>
            <li>• SOC analyst fundamentals</li>
            <li>• Alert triage and incident response</li>
            <li>• Log review and SIEM thinking</li>
            <li>• React, Tailwind, and structured frontend projects</li>
          </ul>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Future Improvements
          </h3>

          <ul className="space-y-3 text-zinc-400">
            <li>• Free interactive SOC scenario practice</li>
            <li>• “Check Answers” review system</li>
            <li>• MITRE ATT&CK mapping for scenarios</li>
            <li>• Better analyst notes and learning reflections</li>
            <li>• More realistic incident investigation flows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;