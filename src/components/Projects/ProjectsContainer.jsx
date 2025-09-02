import ProjectCard from "./ProjectCard";
//
import inv_image_1 from "../../assets/projects/inv-1.png";
import inv_image_2 from "../../assets/projects/inv-2.png";
import inv_image_3 from "../../assets/projects/inv-3.png";
import inv_image_4 from "../../assets/projects/inv-4.png";
import inv_image_5 from "../../assets/projects/inv-5.png";
import admin_image_1 from "../../assets/projects/admin-1.png";
import admin_image_2 from "../../assets/projects/admin-2.png";
import admin_image_3 from "../../assets/projects/admin-3.png";
import admin_image_4 from "../../assets/projects/admin-4.png";
import admin_image_5 from "../../assets/projects/admin-5.png";
import tp_image_1 from "../../assets/projects/tp-1.png";
import tp_image_2 from "../../assets/projects/tp-2.png";
import tp_image_3 from "../../assets/projects/tp-3.png";
import tp_image_4 from "../../assets/projects/tp-4.png";
import tp_image_5 from "../../assets/projects/tp-5.png";

export default function ProjectsContainer({ isMobile }) {
  const projectsData = [
    {
      title: "Admin Panel for BARISCEANO",
      description:
        " A centralized web panel for managing the entire e-commerce workflow, from product cataloging to real-time order tracking and dispatch coordination with DHL integration.",
      role: "Developed the front-end architecture, including dynamic tables for products and orders, real-time status updates, and integrating the DHL API for seamless tracking.",
      t_used: "React JS, Material UI, REST APIs",
      images: [
        admin_image_2,
        admin_image_1,
        admin_image_3,
        admin_image_4,
        admin_image_5,
      ],
    },
    {
      title: `Tech-Pack Creator
      Web App`,
      description:
        "An intuitive web-app for fashion designers to create, manage, update and export detailed tech packs through a central interface, significantly streamlining the garment design process.",
      role: "Designed the central settings module, Implemented a cascading update feature where a change in global settings automatically propagates to all existing tech-packs which can be viewed or exported as PDF.",
      t_used: "React JS, jsPDF, Tailwind CSS",
      images: [tp_image_1, tp_image_2, tp_image_3, tp_image_4, tp_image_5],
    },
    {
      title: "Inventory Management System",
      description:
        "An inventory management solution for a mobile cover manufacturer featuring a challan system to track transactions between suppliers and buyers with real-time stock updates.",
      role: "Designed and built the entire app, integrated MongoDB for data storage, gathered client requirements to create tailored interfaces, and deployed the app on Vercel.",
      t_used:
        "NEXT JS, React JS, Redux Toolkit, bcrypt, JWT, RTK Query for backend APIs, Tailwind CSS",
      images: [inv_image_1, inv_image_2, inv_image_3, inv_image_4, inv_image_5],
    },
  ];
  return (
    <section className=''>
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-5xl p-2 font-bold bg-clip-text text-transparent bg-[#947CF6] mb-4'>
          My Projects
        </h2>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
