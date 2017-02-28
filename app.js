

function formatName(user) {
	return user.firstName + " " + user.LastName;
}


const user = {
	firstName: "Aleksander",
	LastName: "Zuev"


}



var Nav = React.createClass({
	render: function() {
		return (
			<ul>
			<li>menu 1</li>
			<li>menu 2</li>
			<li>menu 3</li>
			<li>menu 4</li>
			</ul>
			)

		}

	});

	var Header = React.createClass({
		render: function() {
			return (

			<div className="block">
			Hello, {formatName(user)}

		
			<Nav />
			</div>

			)
		}

	});
	var App = React.createClass({
		render: function() {
			return (
			<Header />
			)
		}


	});

	React.render(

	<App />,
	document.getElementById('root')
	)