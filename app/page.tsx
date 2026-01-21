"use client";

import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Award, Target, Code2, ChevronDown, Users, Heart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedAcademic, setExpandedAcademic] = useState<number[]>([]);
  const [expandedPersonal, setExpandedPersonal] = useState<number[]>([]);
  const toggleAcademic = (index: number) => {
    setExpandedAcademic(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const togglePersonal = (index: number) => {
    setExpandedPersonal(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <span className="text-sm font-semibold text-slate-900 dark:text-white hidden md:block">Navigation</span>
            <div className="flex w-full md:w-auto overflow-x-auto pb-2 md:pb-0 gap-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              <button onClick={() => scrollToSection('about')} className="whitespace-nowrap px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                À propos
              </button>
              <button onClick={() => scrollToSection('experience')} className="whitespace-nowrap px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                Expérience
              </button>
              <button onClick={() => scrollToSection('projects')} className="whitespace-nowrap px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                Projets
              </button>
              <button onClick={() => scrollToSection('education')} className="whitespace-nowrap px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                Formation
              </button>
              <button onClick={() => scrollToSection('skills')} className="whitespace-nowrap px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                Compétences
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24 animate-fade-in">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {resumeData.personalInfo.name}
            </h1>
            <div className="h-1 w-24 bg-slate-900 dark:bg-white mb-6"></div>
            <p className="text-2xl text-slate-600 dark:text-slate-400 mb-2 font-medium">
              {resumeData.personalInfo.title}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500">
              {resumeData.personalInfo.subtitle}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600 dark:text-slate-400 my-8">
            <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center gap-2 link-underline hover:text-slate-900 dark:hover:text-white transition-colors">
              <Mail size={16} className="flex-shrink-0" />
              <span>{resumeData.personalInfo.email}</span>
            </a>
            <a href={`tel:${resumeData.personalInfo.phone}`} className="flex items-center gap-2 link-underline hover:text-slate-900 dark:hover:text-white transition-colors">
              <Phone size={16} className="flex-shrink-0" />
              <span>{resumeData.personalInfo.phone}</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="flex-shrink-0" />
              <span>{resumeData.personalInfo.location}</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a
              href={`https://${resumeData.personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 link-underline text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} className="flex-shrink-0" />
              <span>linkedin.com/in/raphael-benat-renucci</span>
            </a>
            <a
              href={`https://${resumeData.personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 link-underline text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} className="flex-shrink-0" />
              <span>{resumeData.personalInfo.github}</span>
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-16 animate-slide-up scroll-mt-24">
          <div className="border-l-4 border-slate-900 dark:border-white pl-6 py-2">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {resumeData.about}
            </p>
          </div>
        </section>        {/* Projects - Academic & Personal */}
        <section id="projects" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Code2 size={24} className="text-slate-900 dark:text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Projets
            </h2>
          </div>

          {/* Academic Projects */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6">Projets Académiques</h3>
            <div className="space-y-6 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
              {resumeData.academicProjects.map((project, index) => (
                <div
                  key={index}
                  className="pl-8 relative"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-slate-900 dark:bg-white -translate-x-[3.5px]"></div>

                  <div
                    className="bg-white dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700/50 cursor-pointer hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-md transition-all group"
                    onClick={() => toggleAcademic(index)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                          {project.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                          {project.period}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 dark:text-slate-500 hidden md:inline">
                            {expandedAcademic.includes(index) ? 'Réduire' : 'Voir plus'}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-all ${expandedAcademic.includes(index) ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </div>
                    </div>

                    {expandedAcademic.includes(index) && (
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-4">
                          {project.description.map((item, i) => (
                            <li key={i} className="pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-slate-400">
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3">
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Compétences Product Management :</p>
                          <div className="flex flex-wrap gap-2">
                            {project.pmSkills.map((skill, i) => (
                              <span key={i} className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6">Projets Personnels</h3>
            <div className="space-y-6">
              {resumeData.personalProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700/50 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-all card-hover"
                  onClick={() => togglePersonal(index)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {project.title}
                      </h4>
                      {project.company && (
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                          {project.company}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                        {project.period}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-400 transition-transform ${expandedPersonal.includes(index) ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>

                  {expandedPersonal.includes(index) && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-4">
                        {project.description.map((item, i) => (
                          <li key={i} className="pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-slate-400">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Compétences Product Management :</p>
                        <div className="flex flex-wrap gap-2">
                          {project.pmSkills.map((skill, i) => (
                            <span key={i} className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience - Grid Layout */}
        <section id="experience" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase size={24} className="text-slate-900 dark:text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Expérience Professionnelle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.professionalExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all card-hover"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    {exp.location}
                  </p>
                </div>

                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-700">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer */}
        {resumeData.volunteer && resumeData.volunteer.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Heart size={24} className="text-slate-900 dark:text-white" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Bénévolat
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.volunteer.map((vol, index) => (
                <div key={index} className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700/50 card-hover">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {vol.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">
                    {vol.organization} • {vol.period}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {vol.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        <section id="education" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap size={24} className="text-slate-900 dark:text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Formation
            </h2>
          </div>

          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border-b border-slate-200 dark:border-slate-800 pb-6 last:border-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-500 mt-2 md:mt-0 font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-3">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Target size={24} className="text-slate-900 dark:text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Compétences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(resumeData.skills).map(([category, skills], index) => (
              <div
                key={category}
                className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700/50 card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-3 py-1.5 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qualities */}
        <section className="mb-20">
          <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} />
              <h2 className="text-3xl font-bold tracking-tight">
                Qualités
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {resumeData.qualities.map((quality, index) => (
                <span
                  key={index}
                  className="text-sm bg-white/10 dark:bg-slate-900/10 px-4 py-2 rounded-lg font-medium backdrop-blur-sm"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Languages & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <section className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700/50">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5">
              Langues
            </h2>
            <div className="space-y-3">
              {resumeData.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white font-medium">{lang.name}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-2 border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Award size={22} className="text-slate-900 dark:text-white" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Certifications
              </h2>
            </div>
            <div className="space-y-2">
              {resumeData.certifications.map((cert, index) => (
                <p key={index} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert}
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* Interests */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
            Centres d&apos;intérêt
          </h2>
          <div className="flex flex-wrap gap-3">
            {resumeData.interests.map((interest, index) => (
              <span
                key={index}
                className="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} {resumeData.personalInfo.name}
          </p>
        </footer>
      </div>
    </main>
  );
}




