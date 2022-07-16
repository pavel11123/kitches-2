import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion, MotionConfig } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="card-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="card__photo"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.div className="card__photo-img">
              <motion.img
                src={doc.url}
                alt="uploadded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
