import { content } from "../Content";

const AboutMe = () => {
  const { services } = content;

  const features = [
    {
      name: 'Software Development.',
      description:
        'I have a deep passion for creating clean, efficient, and scalable code. I love building applications that solve real-world problems.',
    },
    {
      name: 'Cybersecurity Enthusiast.',
      description:
        'I am continuously learning about security best practices, penetration testing, and protecting applications from potential threats.',
    },
    {
      name: 'Continuous Learning.',
      description:
        'I am always curious and eager to learn new technologies, frameworks, and tools to enhance my development and security skills.',
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">About Me</h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                I am a Computer Science student with a strong passion for software development and cybersecurity. I am constantly striving to improve my skills and learn new technologies to build better software solutions and ensure robust security.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fintegressinc.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fscreen_2x-1.jpg&f=1&nofb=1&ipt=23878b61c8d0efa881b0e6c2f550e5a3061645bd900b144113aa2afd421e7a27&ipo=images"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
