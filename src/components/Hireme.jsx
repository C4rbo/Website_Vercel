import { content } from "../Content";
import { FaTiktok, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-primary py-14">
      <div className="md:container px-5">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle mb-10" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full max-w-sm" data-aos="fade-right">
            <img
              src={Hireme.image1}
              alt="Hire Me illustration"
              className="hidden md:block w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Card dei social */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full max-w-xl"
            data-aos="fade-left"
          >
            {/* TikTok Card */}
      <a 
        href="https://www.tiktok.com/@carbodev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <div className="p-4 bg-black text-white rounded-full">
          <FaTiktok size={34} />
        </div>
        <div>
          <h5 className="text-lg font-semibold">TikTok</h5>
          <p className="text-sm text-gray-600">Follow me on TikTok</p>
        </div>
      </a>

      {/* Twitter Card */}
      {/* <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <div className="p-4 bg-blue-400 text-white rounded-full">
          <FaTwitter size={34} />
        </div>
        <div>
          <h5 className="text-lg font-semibold">Twitter</h5>
          <p className="text-sm text-gray-600">Stay updated on Twitter</p>
        </div>
      </a> */}

      {/* LinkedIn Card */}
      {/* <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <div className="p-4 bg-blue-700 text-white rounded-full">
          <FaLinkedinIn size={34} />
        </div>
        <div>
          <h5 className="text-lg font-semibold">LinkedIn</h5>
          <p className="text-sm text-gray-600">Connect with me on LinkedIn</p>
        </div>
      </a> */}

      {/* GitHub Card */}
      <a 
        href="https://github.com/C4rbo" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white shadow-lg p-6 rounded-lg flex items-center gap-4 hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <div className="p-4 bg-gray-800 text-black rounded-full">
          <FaGithub size={64} />
        </div>
        <div>
          <h5 className="text-lg font-semibold">GitHub</h5>
          <p className="text-sm text-gray-600">Explore my projects</p>
        </div>
      </a>

    </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
