import { motion } from "motion/react";

function App() {
  const links = [
    { name: "Github", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "YouTube", url: "#" },
  ];

  return (
    <div className="w-screen h-screen bg-neutral-950 text-white flex fixed overflow-auto">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 rounded-lg m-auto flex flex-col items-center justify-center gap-8 bg-neutral-900 cursor-grab active:cursor-grabbing"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          className="rounded-full w-32 h-32 overflow-hidden"
        >
          <img
            src="https://utfs.io/f/xlDS7bZeuGNrjEZ3nWXTIYeScpJG62uVoRAh0Wif7Lyd9OKw"
            alt="John Doe"
          />
        </motion.div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col gap-4"
        >
          <motion.h1 variants={textVariants} className="text-4xl font-semibold">
            John Doe
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-xl text-amber-500 font-semibold"
          >
            London, UK
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%", transition: { delay: 1, duration: 1 } }}
          className="flex flex-col gap-4 overflow-hidden"
        >
          <p className="text-center text-nowrap">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </motion.div>
        <motion.div
          variants={linkContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 w-[350px]"
        >
          {links.map((link, index) => (
            <motion.a
              variants={linkVariants}
              whileHover={{ scale: 1.1, backgroundColor: "#404040" }}
              key={index}
              href={link.url}
              rel="noreferrer"
              className="text-xl w-full text-center py-3 bg-neutral-800 rounded-lg font-semibold"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <motion.p initial={{opacity:0}} animate={{opacity:1, transition: {delay:4}} className="m-auto">Try to drag the card around</motion.p>
    </div>
  );
}

const textContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const linkContainer = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default App;
