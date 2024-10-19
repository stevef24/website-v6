/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BlurFade from "../ui/Blur";
import { Typography, Variant } from "../ui/Typography";

const ValueItem = ({ title, quote }: { title: string; quote: string }) => (
	<div className="flex flex-col items-center space-y-4">
		<BlurFade inView>
			<Typography
				variant={Variant.h4}
				className="font-bold text-orange-500 mb-2"
			>
				{title}
			</Typography>
			<Typography
				variant={Variant.h3}
				className="text-foreground dark:text-white italic"
			>
				"{quote}"
			</Typography>
		</BlurFade>
	</div>
);

const Values = () => {
	return (
		<section className="container mx-auto px-4 py-16">
			<div className="flex flex-col space-y-12 text-center">
				<ValueItem
					title="Collaboration"
					quote="Reaching your highest potential is only possible through collaboration—together, we inspire, challenge, and grow."
				/>
				<ValueItem
					title="Boldness"
					quote="True innovation comes from boldness: taking calculated risks, challenging the norm, and pursuing new paths."
				/>
				<ValueItem
					title="Work Ethic"
					quote="Great achievements start with a strong work ethic—turning vision into reality through consistent effort and dedication."
				/>
				<ValueItem
					title="Growth"
					quote="Growth is at the heart of fulfillment. We strive to learn, adapt, and evolve constantly, ensuring continuous improvement."
				/>
				<ValueItem
					title="Curiosity"
					quote="Curiosity is our compass, leading us to embrace mistakes as opportunities to grow, adapt, and innovate."
				/>
			</div>
		</section>
	);
};

export default Values;
