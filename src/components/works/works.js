import logo from "../../assets/logo-egf-small.svg";
import logoRentbuyparis from "../../assets/logo-rentbuyparis.svg";
import logoAkonsulting from "../../assets/logo-akonsulting.png";

export const works = [
  {
    company: "EGF",
    position: "Fullstack Web Developer & Webdesigner",
    years: 2021,
    detail: (
      <>
        <p>
          <b>Mobile application development</b> for a golf company in the
          south-east of France. It included mobile application design on Figma
          following the visual identity of the already existing website, and the
          development of the application front-end and back-end based on their
          database.
        </p>
        <p>Both working in their office and in remote.</p>
        <p>
          <u>Tools</u> : PostgreSQL, Figma, Postman
        </p>
      </>
    ),
    tech: ["React Native", "PHP"],
    logo: logo,
    link: "",
    category: "dev&design",
  },
  {
    company: "RentBuyParis",
    position: "Fullstack Web developer & Webdesigner",
    years: 2022,
    detail: (
      <>
        <p>
          <b>Webdesign and fullstack development</b> of a showcase website in
          the real estate domain. In freelance with a partner for a client, we
          had phone calls and monthly meetups.
        </p>
        <p>
          <u>Tools</u> : Figma, Heroku, Github, Cloudinary
        </p>
      </>
    ),
    tech: ["ReactJS", "NodeJS"],
    logo: logoRentbuyparis,
    link: "https://rentbuyparis.vercel.app/",
    category: "dev&design",
  },
  {
    company: "Akonsulting",
    position: "Webdesigner",
    years: 2022,
    detail: (
      <>
        <p>
          <b>Web Design</b> of a showcase site for a freelance in the nuclear.
        </p>

        <p>
          <u>Tools</u> : Figma
        </p>
      </>
    ),
    tech: ["Figma"],
    logo: logoAkonsulting,
    link: "https://akonsulting.fr/",
    category: "design",
  },
];
