import web_image from "../assets/web.png";
import app_image from "../assets/app.png";
import ui_image from "../assets/uiux.png";
import graphic_image from "../assets/graphic.png";

export const aboutData = [
  {
    image: <img src={app_image} alt="" />,
    heading: "App Developing",
    details:
      "Building top-tier Android and iOS apps with React Native, merging JavaScript and React for unified cross-platform creation.",
    link: "projects",
  },
  {
    image: <img src={web_image} alt="" />,
    heading: "Web Developing",
    details:
      "Crafting modern single-page websites with ReactJS, a powerful library for dynamic and efficient web development.",
    link: "web",
  },
  {
    image: <img src={ui_image} alt="" />,
    heading: "UI/UX Design",
    details:
      "Designing best app and web interfaces with Figma, implementing industry best practices for superior user experiences",
    link: "uiux",
  },
  {
    image: <img src={graphic_image} alt="" />,
    heading: "Graphic Design",
    details:
      "Creating stunning posts, logos, digital portraits, and many more graphic works using Photoshop and Illustrator.",
    link: "graphic",
  },
];
