import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
	return (
		<div>
			<Card className="rounded-2xl max-w-[400px] hover:border-primary cursor-pointer hover:bg-accent ">
				<CardHeader>
					<Image src={""} alt={""} />
					<CardTitle>Project1</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
						error, vero porro maiores voluptatum placeat mollitia explicabo
						dolore, tempora culpa molestias adipisci cupiditate accusamus
						fugiat.
					</CardDescription>
				</CardContent>
				<CardFooter>{/* <Link></Link> */}</CardFooter>
			</Card>
		</div>
	);
};

export default Projects;
