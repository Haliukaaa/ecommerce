import Image from "next/image";
import { TitleSubtitle  } from "./index";

export const SignupSection = (): JSX.Element => {
	return (
		<div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/4">
			{/* title */}
			<TitleSubtitle addClass="text-blue-500" spanText="Бүртгэлтэй" title="Бүртгүүлэх" subtitle="Бүртгүүлэх?"/>
			{/* input fields */}
			<div className="w-full flex flex-col gap-4">
				<input
					type="text"
					placeholder="И-мэйл хаяг"
					className="input input-primary w-full text-black"
				/>
				<input
					type="text"
					placeholder="Нууц үг"
					className="input input-primary w-full text-black"
				/>
				<input
					type="text"
					placeholder="Нууц үг давтах"
					className="input input-primary w-full text-black"
				/>
			</div>
			<button type="submit" className="btn btn-primary mt-14 text-white text-lg">Бүртгүүлэх <span className="ml-12"><Image src="/right-arrow.png" alt="бүртгүүлэх" width={19} height={14}/></span></button>
		</div>
	);
};
