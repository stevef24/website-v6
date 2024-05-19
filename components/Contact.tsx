/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const Contact = () => {
	return (
		<div className="grid place-items-center my-12">
			<div className="bg-accent w-[500px] h-[300px] rounded-xl flex-col flex  justify-center items-center">
				<h2 className="text-3xl md:text-5xl font-black text-end">
					Contact
					<span className="text-primary">.</span>
				</h2>
				<div className="max-w-[400px]">
					<p className="text-center my-4 text-muted-foreground leading-relaxed">
						Shoot me an email if you want to connect! You can also find me on
						<Link
							href={"https://www.linkedin.com/in/stavfernandes24/"}
							target="_blank"
							className="text-primary"
						>
							{" "}
							Linkedin{" "}
						</Link>
						or{" "}
						<Link
							href={"mailto:stevefernandes24@hotmail.co.uk"}
							target="_blank"
							className="text-primary"
						>
							{" "}
							Email{" "}
						</Link>{" "}
						if that's more your speed.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
