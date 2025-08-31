import SkillsCard from "./SkillsCard";
import javascriptLogo from "../../assets/javascript.png";
import typescriptLogo from "../../assets/typescript.png";
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import reactLogo from "../../assets/react.png";
import nextjsLogo from "../../assets/nextjs.png";
import reduxLogo from "../../assets/redux.png";
import reactRouterDomLogo from "../../assets/react-router-dom.png";
import reactQueryLogo from "../../assets/react-query.png";

import tailwindLogo from "../../assets/tailwind.png";
import sassLogo from "../../assets/sass.png";
import muiLogo from "../../assets/mui.png";
import flowbiteLogo from "../../assets/flowbite.png";
import bootstrapLogo from "../../assets/bootstrape.png";
// Sample data - replace with your actual skill data
const skillsData = [
  {
    category: "Languages",
    items: [
      { id: "html", title: "HTML", image: htmlLogo },
      { id: "css", title: "CSS", image: cssLogo },
      { id: "js", title: "JavaScript", image: javascriptLogo },
      { id: "ts", title: "TypeScript", image: typescriptLogo },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { id: "react", title: "React", image: reactLogo },
      { id: "nextjs", title: "Next.js", image: nextjsLogo },
      {
        id: "reactRouterDom",
        title: "React Router DOM",
        image: reactRouterDomLogo,
      },
      { id: "reactQuery", title: "React Query", image: reactQueryLogo },
      { id: "redux", title: "Redux", image: reduxLogo },
    ],
  },
  {
    category: "Styling & UI",
    items: [
      {
        id: "tailwind",
        title: "Tailwind",
        image: tailwindLogo,
      },
      { id: "sass", title: "Sass", image: sassLogo },
      { id: "mui", title: "Material UI", image: muiLogo },
      { id: "flowbite", title: "Flowbite", image: flowbiteLogo },
      { id: "bootstrap", title: "Bootstrap", image: bootstrapLogo },
    ],
  },
];

export default function SkillsContainer({ isMobile }) {
  return (
    <section className='relative w-full py-16 md:py-16 bg-gradient-to-b from-transparent to-gray-900/5'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 mb-4'>
            Skills
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {isMobile && (
            <div className='pb-6 text-center'>
              {/* <h3 className='text-xl font-semibold text-white mb-4'>
                <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                  {category.category}
                </span>
              </h3> */}

              <SkillsCard
                title={"Skills"}
                items={skillsData.map((arr) => arr.items).flat()}
                columns={4}
                itemWidth={50}
                itemHeight={50}
                className='bg-gray-900/20 backdrop-blur-lg rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10'
                delay={1 * 0.1}
              />
            </div>
          )}
          {!isMobile &&
            skillsData.map((category, index) => (
              <div
                key={category.category}
                className='pb-6 text-center'>
                <h3 className='text-xl font-semibold text-white mb-4'>
                  <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                    {category.category}
                  </span>
                </h3>

                <SkillsCard
                  title={category.category}
                  items={category.items}
                  columns={3}
                  itemWidth={70}
                  itemHeight={70}
                  className='bg-gray-900/20 backdrop-blur-lg rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10'
                  delay={index * 0.1}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
