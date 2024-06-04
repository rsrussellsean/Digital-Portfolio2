import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import ImageCarousel from "./ImageCarousel";

const items = [
  {
    id: 1,
    title: "Alliance Subscription Monitoring",
    img: "/project/alliance.png",
    desc: "Alliance Subscription Monitoring provides the insights and control needed to keep your operations running smoothly and efficiently. Enhance your subscription management process with our intuitive and powerful solution.",
    link: "https://www.behance.net/gallery/200255943/Alliance-Subscription-Monitoring",
  },
  {
    id: 2,
    title: "BarangayMed",
    img: "/project/brgymed.png",
    desc: "Barangay Med is a community-focused medical appointment platform designed to provide free healthcare access to residents within their barangay.",
    link: "https://www.behance.net/gallery/200256313/BarangayMed",
  },
  {
    id: 3,
    title: "Radiant",
    img: "/project/rd.png",
    desc: "Radiant is a dynamic and engaging app that combines the thrill of gamification with the noble cause of environmental cleanup. GreenGleam turns eco-friendly activities into exciting challenges and rewarding experiences.",
    link: "https://www.behance.net/gallery/200256661/Radiant",
  },
  {
    id: 4,
    title: "EalyNexus",
    img: "/project/ealynexus.png",
    desc: "Discover, connect, and collaborate within the crypto gaming ecosystem on EalyNexus, where the future of gaming and professional networking converge.",
    link: "https://www.behance.net/gallery/200247263/EalyNexus",
  },

  // {
  //   id: 4,
  //   title: "Worlash",
  //   img: "/project/worlash.png",
  //   desc: "Worlash is an exciting crypto-based word-combining game that challenges players to test their vocabulary and creativity. Dive into the world of Worlash and unleash your word power while earning valuable crypto assets!",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* <img src={item.img} alt="" /> */}
            <ImageCarousel id={item.id} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p className="madeThin">{item.desc}</p>
            <div className="logoContainer">
              <a href={item.link} target="_blank">
                <img src="/logo/behance.png" style={{ width: "40px" }}></img>
              </a>
              <a href={item.link2} target="_blank">
                <img
                  src="/logo/figma.png"
                  style={{ width: "40px", marginLeft: "10px" }}
                ></img>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// const Single = ({ item }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <section>
//       <div className="container">
//         <div className="wrapper">
//           <div className="imageContainer">
//             <img src={item.img} alt={item.title} onClick={openModal} />
//           </div>
//           <div className="textContainer">
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//             <button onClick={openModal}>View Full Image</button>
//           </div>
//         </div>
//       </div>
//       {isOpen && <Modal item={item} onClose={closeModal} />}
//     </section>
//   );
// };

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <div className="titleContainer">
          <h2 className="grifter text2">FEATURED </h2>
          <h2 className="grifter text">WORK</h2>
        </div>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
