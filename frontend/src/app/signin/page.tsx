import React from "react";
import Image from "next/image";
import { SignupSection } from "../components";

export default function Login() {
	return (
		<div className="flex justify-center bg-white md:gap-16 lg:gap-20">
			<section className="display-none md:w-3/5 lg:w-2/4 relative">
				<Image
					src="/login-img.jpeg"
					alt="брэндийн зураг"
					layout="fill"
					objectFit="cover"
				/>
			</section>
			<section className="w-4/5 flex flex-col justify-center">
				<SignupSection />
			</section>
		</div>
	);
}
