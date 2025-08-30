import SkillsCard from "./SkillsCard";
import javascriptLogo from "../../assets/javascript.png";
import typescriptLogo from "../../assets/typescript.png";
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
// Sample data - replace with your actual skill data
const skillsData = [
  {
    category: "Languages",
    items: [
      { id: "js", title: "JavaScript", image: javascriptLogo },
      { id: "ts", title: "TypeScript", image: typescriptLogo },
      { id: "html", title: "HTML", image: htmlLogo },
      { id: "css", title: "CSS", image: cssLogo },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { id: "react", title: "React", image: "/images/skills/react.png" },
      { id: "node", title: "Node.js", image: "/images/skills/nodejs.png" },
      { id: "express", title: "Express", image: "/images/skills/express.png" },
      { id: "mongodb", title: "MongoDB", image: "/images/skills/mongodb.png" },
    ],
  },
  {
    category: "Styling & UI",
    items: [
      { id: "css", title: "CSS3", image: "/images/skills/css.png" },
      {
        id: "tailwind",
        title: "Tailwind",
        image: "/images/skills/tailwind.png",
      },
      { id: "sass", title: "Sass", image: "/images/skills/sass.png" },
      { id: "mui", title: "Material UI", image: "/images/skills/mui.png" },
    ],
  },
];

export default function SkillsContainer() {
  return (
    <section className='relative w-full py-16 md:py-24 bg-gradient-to-b from-transparent to-gray-900/5'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent w-full h-full'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 mb-4'>
            My Skills
          </h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Technologies and tools I work with to create amazing digital
            experiences
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillsData.map((category, index) => (
            <SkillsCard
              key={category.category}
              title={category.category}
              items={category.items}
              columns={2}
              className='bg-gray-900/20 backdrop-blur-lg rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10'
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
