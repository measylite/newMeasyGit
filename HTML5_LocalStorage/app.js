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
var clearBtn = document.getElementById('clear');

// add event listner for each btn
saveBtn.addEventListener('click', saveItem);
retrieveBtn.addEventListener('click', retrieveItem);
reviewBtn.addEventListener('click', reviewItem);
deleteBtn.addEventListener('click', deleteItem);
clearBtn.addEventListener('click',clearAll);

// event listner to update the page of and changes to on other windows
addEventListener('storage', reviewItem);

}

function saveItem() {
	// get key val
	var key = document.getElementById('key').value;
	var value = document.getElementById('value').value;
	localStorage[key] = value;
}

function retrieveItem() {
	var data = document.getElementById('data');
	var key = document.getElementById('key').value;
	var value = localStorage[key];

	data.innerHTML = '<div>' + key + ': ' + value + '</div>';
}
function deleteItem() {
	if (confirm('Delete ?')) {
		var key = document.getElementById('key').value;
		localStorage.removeItem(key);
		// msg
		data.innerHTML = '<div>Item has been deleted!</div>';
	};
}

function reviewItem() {
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		// console.log(key);
		// console.log(localStorage(key));

		data.innerHTML += '<div>' + key + ': ' + value + '<br></div>';
	};
}

function clearAll() {
	if (confirm('Do you want to clearAll?')) {
		localStorage.clear();
		data.innerHTML = '<div>Cleared All</div>';
	};
}
addEventListener("load", measyInit);