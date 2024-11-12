import React  from 'react';
import Link from "next/link";
import Image from "next/image";

export const Navbar = ():JSX.Element => {
	return (
		<nav className="bg-white py-[22px] border-b-2 border-[#AEB8C3]">
			<div>
				<div></div>
				<div></div>

				<div>
					{/* Login */}
					<Link href="/signin">
						<div className="flex flex-col justify-center items-center">
							<Image
								src="/login-icon.png"
								alt="нэвтрэх"
								width={20}
								height={22}
							/>
							<span className="text-primary text-base font-bold">Нэвтрэх</span>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};
