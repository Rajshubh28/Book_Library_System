
/*
NAME = SHUBHAM RAJ
ROLL = 1905424 
*/

//data Structure For Storing Data

const library = [
  {
    Id: 1,
    Title: 'Book 1',
    Author: 'Author 1',
    Lender: 'User C',
    Borrower: 'User B',
    Action: ''
  },
  {
    Id: 2,
    Title: 'Book 2',
    Author: 'Author 2',
    Lender: 'User C',
    Borrower: '',
    Action: ''
  },

  {
    Id: 3,
    Title: 'Book 3',
    Author: 'Author 3',
    Lender: 'User D',
    Borrower: 'User C',
    Action: ''
  },
  {
    Id: 4,
    Title: 'Book 4',
    Author: 'Author 4',
    Lender: 'User A',
    Borrower: '',
    Action: ''
  },
  {
    Id: 5,
    Title: 'Book 5',
    Author: 'Author 5',
    Lender: 'User A',
    Borrower: '',
    Action: ''
  },
  {
    Id: 6,
    Title: 'Book 6',
    Author: 'Author 6',
    Lender: 'User B',
    Borrower: 'User A',
    Action: ''
  },
];


//creating table in the web--------------------------------------


var table = document.getElementById("info-table");

function myCreateFunction() {

  for (let i = 0; i < library.length; i++) {
    var row = table.insertRow();
    row.className = "rows";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = library[i].Id;
    cell2.innerHTML = library[i].Title;
    cell3.innerHTML = library[i].Author;
    cell4.innerHTML = library[i].Lender;
    cell5.innerHTML = library[i].Borrower;
    cell6.innerHTML = library[i].Action;

  }
}
myCreateFunction();

//add_row user name function-------------------------------------------------------------------

function borrowBook(rowNumber) {
  let row = table.rows[rowNumber]

  row.cells[5].innerHTML = `<button onclick="returnBook(${rowNumber})">Return</button>`
  row.cells[4].innerHTML = user;

  library[rowNumber - 1].Borrower = user;
}

function returnBook(rowNumber) {
  let row = table.rows[rowNumber]

  row.cells[5].innerHTML = `<button onclick="borrowBook(${rowNumber})">Borrow</button>`
  row.cells[4].innerHTML = "";

  library[rowNumber - 1].Borrower = "";
}

//Adding Last row--------------------------------------------------------------------
var newrows='';
function addNewRow(user) {
  newrows=table.insertRow(library.length + 1);
  newrows.innerHTML =
    `<tr>
<td></td>
<td>
<input type="text" id="titlenew"  placeholder="Title" required></input>
</td>
<td>
<input type="text" id="authornew"   placeholder="Author" required ></input>
</td>
<td>${user}</td>
<td></td>
<td>
<button type="button" onclick="insertNewUser(user)">Add</button>
</td>
</tr>`
}

function insertNewUser(usernew) {
  var authornew = document.getElementById("authornew");
  var titlenew = document.getElementById("titlenew");

  
  if (authornew.value == '' || titlenew.value == '') {
    alert("Enter All The Details");
    return;
  }
  else {
    library.push({
      Id: library.length,
      Title: titlenew.value,
      Author: authornew.value,
      Lender: usernew,
      Borrower: "",
      Action: ""
    })
    var row = table.insertRow(library.length)
    var id = row.insertCell(0)
    id.innerHTML = library.length
    var namenew = row.insertCell(1)
    namenew.innerHTML = titlenew.value
    var author = row.insertCell(2)
    author.innerHTML = authornew.value
    var lender = row.insertCell(3)
    lender.innerHTML = usernew
    var borrower = row.insertCell(4)
    borrower.innerHTML = ""
    var action = row.insertCell(5)

  }

}


//  buttons in action Field----------------------------------

function actionField(user) {

  addNewRow(user);

  for (let i = 1; i < table.rows.length; i++) {
    if (library[i - 1].Lender !== user && library[i - 1].Borrower === "") {
      table.rows[i].cells[5].innerHTML = `<button onclick="borrowBook(${i})">Borrow</button>`
    }
    else if (library[i - 1].Lender !== user && library[i - 1].Borrower === user) {
      table.rows[i].cells[5].innerHTML = `<button onclick="returnBook(${i})">Return</button>`;
    }
  }
}

//when there is successfull login

const Allowed_users = ["User A", "User B", "User C", "User D"];
var user = '';
function changeLoggedInUser() {
  const username = document.getElementById("logged-user").value;
  let text = document.getElementById("logged-in-user-name");
  if (Allowed_users.includes(username)) {
    text.innerHTML = "Logged in user: " + username;
    user = username;
    actionField(user);

  }
  else if (!Allowed_users.includes(username)) {

    text.innerHTML = "No User Logged In";
    document.getElementById("logged-user").value = "";
    for (let i = 1; i < table.rows.length; i++) {
      row = table.rows[i];
      row.cells[5].innerHTML = "";
      newrows.innerHTML='';
    }
  }
  else {}
}

