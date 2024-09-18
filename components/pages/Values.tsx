import React from "react";
import BlurFade from "../ui/Blur";
import { Typography, Variant } from "../ui/Typography";

const values = [
	"Collaboration",
	"Passion",
	"Innovation",
	"Integrity",
	"Excellence",
];

const Values = () => {
	return (
		<section className="container mx-auto px-4 py-16">
			<div className="flex flex-col space-y-12 text-center">
				{values.map((value, index) => (
					<div key={index}>
						<BlurFade inView>
							<Typography
								variant={Variant.h2}
								className="font-bold text-foreground dark:text-white"
							>
								<span className="text-orange-500">{value}</span>{" "}
								<span className="text-foreground/80 dark:text-white/80">
									in Action: Driving Success Through Our Core Principles
								</span>
							</Typography>
						</BlurFade>
					</div>
				))}
			</div>
		</section>
	);
};

export default Values;
