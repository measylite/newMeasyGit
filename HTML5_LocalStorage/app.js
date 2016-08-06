/*
 * We can use sessionStorage or localStorage to hold our incoming data
 * Do a search and replace to change from local or session
 * measyLite 
*/
function measyInit() 
{
// Buttons
var saveBtn = document.getElementById('save');
var retrieveBtn = document.getElementById('retrieve');
var reviewBtn = document.getElementById('review');
var deleteBtn = document.getElementById('delete');
var clearBtn = document.getElementById('clear');

/* Add Event Listener for each btn */ 
saveBtn.addEventListener('click', saveItem);
retrieveBtn.addEventListener('click', retrieveItem);
reviewBtn.addEventListener('click', reviewItem);
deleteBtn.addEventListener('click', deleteItem);
clearBtn.addEventListener('click',clearAll);

/*
* Add Event Listener to update the page of any changes to any other windows
* Swap below listenter to display more detailed informtion see func reviewStorage
*/ 
addEventListener('storage', reviewStorage);
// addEventListener('storage', reviewItem);

}

function reviewStorage(e) {
 data.innerHTML += '<div>' + 'key: ' + e.key + '<br>' + 'Old Value: ' + 
 e.oldValue + '<br>' + 'New Value: ' + e.newValue + '<br>' + 'url: ' +
 e.url + '<br>' + 'Storage Area: ' + e.storageArea + '<br></div>';
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