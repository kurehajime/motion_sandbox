import { motion, useMotionValue, useTransform } from "framer-motion"
import React, { useState } from "react"
import "./MainElement.css"

export default function MainElement() {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='main'>
            <motion.div
                className="rect"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
            >
                押すとボヨヨンとなるし横にもちょっと動く
            </motion.div>
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >参上
            </motion.nav>
            <button onClick={() => setIsOpen(isOpen => !isOpen)} >押すと</button>
        </div>
    )
}