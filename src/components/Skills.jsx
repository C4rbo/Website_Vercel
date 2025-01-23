import { content } from "../Content";
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'C/C++ Programming',
    description:
      'I am proficient in C and C++, with experience in building high-performance applications and understanding low-level programming concepts.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Java Development',
    description:
      'Experienced in Java, working on object-oriented applications and backend development with frameworks like Spring Boot.',
    icon: LockClosedIcon,
  },
  {
    name: 'Web Development',
    description:
      'Developed various web applications using modern technologies such as JavaScript, React, and Node.js, focusing on responsive design and scalability.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Sharing Content on Social Media',
    description:
      'Regularly share tutorials, programming insights, and development tips on my social media channels to engage with the community.',
    icon: FingerPrintIcon,
  },
];

const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit bg-fontbianco py-14" id="skills">
      <div className="md:container px-5">
        <h2 className="title text-center text-black" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle text-center mb-6" data-aos="fade-down">
          {skills.subtitle}
        </h4>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-6 text-lg/8 text-gray-600">
              These are some of my core skills and expertise areas that I have developed over the years of practice and learning.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900 flex items-center">
                    <div className="absolute top-0 left-0 flex items-center justify-center rounded-lg bg-indigo-600 p-3">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="ml-12">{feature.name}</span>
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
