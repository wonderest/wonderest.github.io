import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link
				href="/"
				className="text-salmon border-b border-dashed border-dotRed no-underline"
			>
				Return Home
			</Link>
		</div>
	);
}
