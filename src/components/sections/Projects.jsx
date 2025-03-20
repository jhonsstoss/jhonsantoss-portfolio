import { RevealOnScroll } from "../ReviewOnScroll";

export const Projects = () => {
  return (
    <section 
    id="projects" 
    className="min-h-screen flex items-center justify-center py-20">

      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
            <h3 className="text-xl font-bold mb-2">DrawGenAi</h3>
            <p className="text-gray-400 mb-4">
              A SaaS platform for AI-powered image generation, allowing users to create high-quality visuals effortlessly. It features a complete authentication system with login, registration, and payment integration, ensuring a seamless and secure user experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Vite", "Node.js", "JWT Auth", "Axios", "Tailwind CSS", "MongoDB", "API"].map((tech, key) => (
                <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 
                  py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://drawgen-ai-front.onrender.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                {""}View Project →{""}
              </a>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
            <h3 className="text-xl font-bold mb-2">Youtube Clone</h3>
            <p className="text-gray-400 mb-4">
            A web platform inspired by YouTube, allowing users to watch, search, and interact with videos. The project features a secure authentication system and database integration for content management.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Vite", "Typescript", "Axios", "Moment.js","Node.js","JWT Auth", "MongoDB", "MySQL"].map((tech, key) => (
                <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 
                  py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://yt-frontend-yo5r.onrender.com/" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                {""}View Project →{""}
              </a>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
            <h3 className="text-xl font-bold mb-2">Ninja Type Game</h3>
            <p className="text-gray-400 mb-4">
              Scalable cloud infrasctructure management with real-time monitoring and automated scaling.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 
                  py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://ninja-type-game.vercel.app/" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                {""}View Project →{""}
              </a>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
            <h3 className="text-xl font-bold mb-2">Rick and Morty Characters</h3>
            <p className="text-gray-400 mb-4">
              A web application that allows users to explore characters from the Rick and Morty universe. Using the official API, the site dynamically fetches and displays detailed information about each character, including their status, species, and origin, in a simple and engaging interface.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JavaScript", "REST API"].map((tech, key) => (
                <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 
                  py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://rick-morty-characters-beta.vercel.app/" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                {""}View Project →{""}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
            <h3 className="text-xl font-bold mb-2">Oppenheimer Project</h3>
            <p className="text-gray-400 mb-4">
              A web application dedicated to the Oppenheimer movie, featuring an interactive experience with the official trailer, synopsis, streaming availability, cast details, and a comment section for user discussions. The site provides a seamless navigation experience with a modern UI and dynamic content rendering.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "React Router DOM", "Bootstrap ", "CSS", "JavaScript", "Swiper"].map((tech, key) => (
                <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 
                  py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://rick-morty-characters-beta.vercel.app/" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                {""}View Project →{""}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
            <h3 className="text-xl font-bold mb-2">Star Wars Characters</h3>
            <p className="text-gray-400 mb-4">
            A web platform that brings the Star Wars universe to life, allowing users to explore character images and details using an external API. The project features a simple and intuitive UI for an immersive experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "HTML", "CSS", "Star Wars API"].map((tech, key) => (
                <span 
                  key={key}
                  className="bg-blue-500/10 text-blue-500 
                  py-1 px-3 rounded-full text-sm 
                  hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://star-wars-characters-rho.vercel.app/" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                {""}View Project →{""}
              </a>
            </div>
          </div>
        </div>
          <div className="mt-12 flex justify-center items-center">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://github.com/jhonsstoss" 
                className="text-[20px] font-semibold text-blue-400 hover:text-blue-300 transition-colors my-4">
                {""}Discover more of my projects on GitHub! 🔗{""}
              </a>
            </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};