// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
	let uri = ' http://localhost:3000/posts?_sort=id&_order=asc';
	console.log(term);
	if (term) {
		uri += `&q=${term}`;
		console.log(uri);
	}
	const res = await fetch(uri);
	const posts = await res.json();
	let template = '';
	posts.forEach((post) => {
		template += `
        <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html?id=${post.id}">read more...</a>
        </div>
        `;
	});

	container.innerHTML = template;

	return posts;
};

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(searchForm.term.value);
	renderPosts(searchForm.term.value.trim());
});
window.addEventListener('DOMContentLoaded', () => renderPosts());
