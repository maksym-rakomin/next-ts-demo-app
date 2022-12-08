import {Htag, Button, Ptag, Tag, Rating, Input, Textarea} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(2)

	return (
		<>
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

			<Input placeholder="test"/>
			<Textarea placeholder="Textarea" />
		</>
	);
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0

	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, { firstCategory })

    return {
        props: { menu, firstCategory },
    }
}

interface HomeProps extends Record<string, unknown>{
	menu: MenuItem[]
	firstCategory: number
}
