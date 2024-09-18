import React from "react";
import SectionHeader from "../ui/SectionHeader";
import BlurFade from "../ui/Blur";
import { Typography } from "../ui/Typography";

const values = [
	"Collaboration",
	"Passion",
	"Innovation",
	"Integrity",
	"Excellence",
];

const Values = () => {
	return (
		<section>
			<BlurFade inView>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{values.map((value, index) => (
						<div key={index} className="text-center">
							<Typography variant="h2" className="text-4xl mb-4 text-primary">
								{value}
							</Typography>
							<Typography variant="body" className="text-muted-foreground">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</Typography>
						</div>
					))}
				</div>
			</BlurFade>
		</section>
	);
};

export default Values;
