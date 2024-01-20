import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import "./Modal.css";

export default function Modal(props) {
	const { open, setOpen } = props;
	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						onClick={() => setOpen(false)}
						className="modal-backdrop"
					/>
					<motion.div
						initial={{
							opacity: 0,
							translateX: 1000,
						}}
						animate={{
							opacity: 1,
							translateX: 0,
							transition: {
								duration: 0.3,
							},
						}}
						exit={{
							translateX: 1000,
							transition: {
								duration: 0.3,
							},
						}}
						className="modal-content-wrapper"
					>
						<motion.div className="modal-content">
							{" "}
							<IoMdClose
								size={20}
								onClick={() => setOpen(false)}
								className="cursor-pointer fixed right-16 top-16"
							/>
							{props.children}
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
