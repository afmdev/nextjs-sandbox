export async function getPost() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=post`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getCategory() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=categories`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getTag() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=tags`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getModel() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=blogModel`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}