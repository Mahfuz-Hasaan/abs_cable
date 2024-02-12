import { expand, opacity } from "@helper/anim";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const anim = (variants, custom = null) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      custom,

      variants,
    };
  };
  const nbOfColumns = 5;
  return (
    <div className="page stairs">
      <motion.div {...anim(opacity)} className="transition-background" />

      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>

      {children}
    </div>
  );
};

export default PageTransition;
