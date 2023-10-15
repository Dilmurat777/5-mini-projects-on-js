const usersAPI = document.getElementById('users')
const search = document.getElementById('search')




fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => {
			searchUsers = data
			displayUsers(data)
		})

		search.addEventListener('keyup', (e) => {
		 const searchFilter = e.target.value.toLowerCase();
		 const filterData = searchUsers.filter((user) => {
		 return (
			user.username.toLowerCase().includes(searchFilter)
		 )
		 })
		 displayUsers(filterData)
		})
	
	function displayUsers(users) {
		const usersHTML = users.map((user) => getUsers(user))
		usersAPI.innerHTML = usersHTML.join(' ')
	} 


	function getUsers(user){
		return `
				
				<tbody>
				<tr>
					<td>${user.id}</td>
					<td>${user.name}</td>
					<td>${user.username}</td>
					<td>${user.email}</td>
					<td>${user.address.city}</td>
					<td>${user.address.street}</td>
					<td>${user.phone}</td>
					<td>${user.company.name}</td>
				</tr>
			</tbody>
			`
		}
		
