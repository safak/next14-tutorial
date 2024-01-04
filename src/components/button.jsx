"use client";

import { useRouter } from "next/navigation";
import style from "@/components/button.module.css";

const Button = ({ path, name }) => {
	const router = useRouter();
	return (
		<button onClick={() => router.push(path)} className={style.button}>
			{name}
		</button>
	);
};
export default Button;
