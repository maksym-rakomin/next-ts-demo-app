import {Htag, Button, Ptag, Tag} from "../components";

export default function Home(): JSX.Element {

	return (
		<div>
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
		</div>
	);
}
