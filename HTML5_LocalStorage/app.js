/*
 * We can use sessionStorage or localStorage to hold our incoming data
 * Do a search and replace to change from local or session
 * measyLite 
*/
function measyInit() 
{
// save and retieve btn
var saveBtn = document.getElementById('save');
var retrieveBtn = document.getElementById('retrieve');
var reviewBtn = document.getElementById('review');
var deleteBtn = document.getElementById('delete');

// add event listner for each btn
saveBtn.addEventListener('click', saveItem);
retrieveBtn.addEventListener('click', retrieveItem);
reviewBtn.addEventListener('click', reviewItem);
deleteBtn.addEventListener('click', deleteItem);

}

function saveItem() {
	// get key val
	var key = document.getElementById('key').value;
	var value = document.getElementById('value').value;
	sessionStorage[key] = value;
}

function retrieveItem() {
	var data = document.getElementById('data');
	var key = document.getElementById('key').value;
	var value = sessionStorage[key];

	data.innerHTML = '<div>' + key + ': ' + value + '</div>';
}
function deleteItem() {
	if (confirm('Delete ?')) {
		var key = document.getElementById('key').value;
		sessionStorage.removeItem(key);
		// msg
		data.innerHTML = '<div>Item has been deleted!</div>';
	};
}

function reviewItem() {
	for (var i = 0; i < sessionStorage.length; i++) {
		var key = sessionStorage.key(i);
		var value = sessionStorage.getItem(key);
		// console.log(key);
		// console.log(sessionStorage(key));

		data.innerHTML += '<div>' + key + ': ' + value + '<br></div>';
	};
}
addEventListener("load", measyInit);