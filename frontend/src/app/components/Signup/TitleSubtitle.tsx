import React from "react";

type TitleProps = {
	title: string;
	subtitle: string;
	addClass?: string;
	spanText?: string;
};

export const TitleSubtitle = ({
	title,
	subtitle,
	addClass,
	spanText,
}: TitleProps): JSX.Element => {
	return (
		<div className="flex flex-col gap-5 md:gap-9 mb-4 w-full">
			<h1 className="font-bold text-primary text-3xl">{title}</h1>
			<p className="text-gray-500 text-lg">
				{subtitle}
				<span className={`${addClass}`}> {spanText}</span>
			</p>
		</div>
	);
};
