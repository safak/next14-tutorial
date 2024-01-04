// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { contact } from "@/lib/action";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
	title: "Contact Page",
	description: "Contact description",
};

const ContactPage = () => {
	// const a = Math.random();

	// console.log(a);

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src="/contact.png" alt="" fill className={styles.img} />
			</div>
			<div className={styles.formContainer}>
				{/* <HydrationTestNoSSR/> */}
				{/* <div suppressHydrationWarning>{a}</div> */}
				<form action={contact} className={styles.form}>
					<input type="text" placeholder="Name and Surname" name="name" />
					<input type="text" placeholder="Email Address" name="email" />
					<input
						type="text"
						placeholder="Phone Number (Optional)"
						name="phone"
					/>
					<textarea
						id=""
						cols="30"
						rows="10"
						placeholder="Message"
						name="message"
					></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
