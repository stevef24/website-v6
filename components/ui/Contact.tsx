/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { EnvelopeOpenIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface ContactLinkProps {
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	children: React.ReactNode;
	label: string;
}

const ContactLink = ({
	href,
	icon: Icon,
	children,
	label,
}: ContactLinkProps) => {
	return (
		<div>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					"group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg",
					"font-bold",
					"focus:outline-none",
					"hover:text-orange-500 transition-colors duration-200"
				)}
				aria-label={label}
			>
				<Icon className="w-5 h-5" />
				{children}
			</Link>
		</div>
	);
};

const Contact = () => {
	return (
		<section id="contact" aria-label="Contact section" className="w-full ">
			<div className="max-sm:w-full max-w-[600px] mx-auto">
				<div className="relative rounded-xl overflow-hidden ">
					<div className="relative p-8 sm:p-12">
						<div className="flex flex-col items-center text-center space-y-6">
							<div className="space-y-2">
								<h4 className="text-lg text-orange-500 font-bold">
									Want to connect?
								</h4>
							</div>

							<div className="max-w-[400px] space-y-6 text-lg text-muted-foreground">
								<p className="text-center leading-relaxed">
									I'm always open to new opportunities and collaborations. Feel
									free to reach out through email or connect with me on
									LinkedIn.
								</p>

								<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
									<ContactLink
										href={`mailto:${atob(
											"c3RldmVmZXJuYW5kZXMyNDEwQGdtYWlsLmNvbQ=="
										)}`}
										icon={EnvelopeOpenIcon}
										label="Send an email"
									>
										Send Email
									</ContactLink>

									<ContactLink
										href="https://www.linkedin.com/in/stavfernandes24/"
										icon={LinkedInLogoIcon}
										label="Connect on LinkedIn"
									>
										LinkedIn
									</ContactLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
