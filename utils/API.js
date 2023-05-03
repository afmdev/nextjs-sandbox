export async function getPost() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=post`, {
			next: {
				revalidate: 10,
			}
		});
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export async function getCategory() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=categories`, {
			next: {
				revalidate: 10,
			}
		});
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export async function getTag() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=tags`, {
			next: {
				revalidate: 10,
			}
		});
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export async function getPaidFree() {
	try {
		const response = await fetch(
			`https://cdn.contentful.com/spaces/39eo3nd1n1px/entries?access_token=Kg2zFy4PmKUAwMZKHN3vy7ZrB8AM1G3weQdFBSJkP0c&content_type=blogModel`, {
			next: {
				revalidate: 10,
			}
		});
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
	}
}