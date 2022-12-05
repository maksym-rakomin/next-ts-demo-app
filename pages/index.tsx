import {Htag, Button, Ptag, Tag, Rating} from "../components";
import {useState} from "react";
import {Layout} from "../layout/Layout";

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(2)

	return (
		<Layout>
			<Htag tag="h1">test head 1</Htag>
			<Htag tag="h2">test head 2</Htag>
			<Htag tag="h3">test head 3</Htag>

			<Button appearance="primary" className="testClass">primary</Button>
			<Button appearance="ghost">ghost</Button>

			<Button appearance="primary" arrow="right">primary</Button>
			<Button appearance="ghost" arrow="right">ghost</Button>

			<Button appearance="primary" arrow="down">primary</Button>
			<Button appearance="ghost" arrow="down">ghost</Button>

			<Ptag size='s'>test paragraph</Ptag>
			<Ptag size='m'>test paragraph</Ptag>
			<Ptag size='l'>test paragraph</Ptag>
			<Ptag>test paragraph</Ptag>

			<Tag href='#' size="s" color="primary">tag</Tag>
			<Tag href='#' size="m" color="primary">tag</Tag>
			<Tag size="s" color="ghost">tag</Tag>
			<Tag href='#' size="s" color="red">tag</Tag>
			<Tag size="s" color="gray">tag</Tag>
			<Tag size="s" color="green">tag</Tag>

			<Rating rating={3} setRating={() => ({})} isEditable />
			<Rating rating={rating} setRating={(rating) => setRating(rating)} isEditable />
			<Rating rating={4}  />
		</Layout>
	);
}
