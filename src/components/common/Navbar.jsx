import CardNav from "../GSAP/CardNav";
import logo from "../../mayursinh-chudasama.png";

export default function Navbar() {
  const items = [
    {
      label: "About",
      bgColor: "#64ACF8",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#0d111f",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
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
