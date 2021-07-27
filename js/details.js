// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
console.log(location.search);
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.deleteButton');

const renderDetails = async () => {
	let uri = `http://localhost:3000/posts/${id}`;
	const res = await fetch(uri);
	const post = await res.json();
	let template = `
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes} likes</small></p>
    <p>${post.body}</p>
    <a href="/details.html?id=${post.id}">read more...</a>
    </div>
    `;
	container.innerHTML = template;
};

deleteBtn.addEventListener('click', async () => {
	console.log('switch', id);
	let uri = `http://localhost:3000/posts/${id}`;
	if (id == 1 || id == 2 || id == 3) {
		console.log('if function', id);
		alert("Can't delete my blogs. Please create and delete your own!");
		window.location.replace('/');
	} else {
		const res = await fetch(uri, {
			method : 'DELETE'
		});
		console.log('deteled');
		window.location.replace('/');
	}

	// const res = await fetch(uri, {
	// 	method : 'DELETE'
	// });
	// console.log('deteled');
	// window.location.replace('/');
});

window.addEventListener('DOMContentLoaded', () => renderDetails());
