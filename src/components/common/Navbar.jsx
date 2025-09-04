import CardNav from "../GSAP/CardNav";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const items = [
    {
      label: "Skills",
      bgColor: "#151E2E",
      textColor: "#7C86FF",
      link: "skills",
      links: [
        { label: "Languages", ariaLabel: "About Languages", link: "skills" },
        {
          label: "Frameworks",
          ariaLabel: "About Frameworks",
          link: "skills",
        },
        { label: "Styling", ariaLabel: "About Styling", link: "skills" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#151E2E",
      textColor: "#7C86FF",
      link: "projects",
      links: [
        {
          label: "Admin Panel for BARISCEANO",
          ariaLabel: "Featured Projects",
          link: "admin-panel-for-barisceano",
        },
        {
          label: "Tech-Pack Creator App",
          ariaLabel: "Project Case Studies",
          link: "tech-pack-creator-app",
        },
        {
          label: "Inventory Management System",
          ariaLabel: "Project Case Studies",
          link: "inventory-management-system",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#151E2E",
      textColor: "#7C86FF",
      link: "contact",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          link: "contact",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          link: "contact",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt='Company Logo'
      items={items}
      baseColor='#0D111F'
      menuColor='#fff'
      ease='power3.out'
    />
  );
}
