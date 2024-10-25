let allBooks = [
  {
    bookId: 101,
    bookTitle: "Harry Potter and the Order of the Phoenix",
    bookPrice: 250,
    bookPublished: "2010-10-10",
    bookDescription:
      "Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time.",
    bookImageUrl:
      "https://m.media-amazon.com/images/I/81Budsu1XBL._SL1500_.jpg",
    bookAuthor: {
      authorId: 501,
      authorName: "J.K Rowling",
    },
  },
  {
    bookId: 102,
    bookTitle: "The Hobbit",
    bookPrice: 300,
    bookPublished: "2012-03-15",
    bookDescription:
      "In a hole in the ground there lived a hobbit. Bilbo Baggins, a hobbit of the Shire, enjoys a quiet and uneventful life until the wizard Gandalf and a group of thirteen dwarves arrive on his doorstep. Together, they embark on an adventure to reclaim the dwarves' treasure from the dragon Smaug. Along the way, Bilbo discovers courage, friendship, and the importance of home.",
    bookImageUrl:
      "https://m.media-amazon.com/images/I/71V2v2GtAtL._SL1500_.jpg",
    bookAuthor: {
      authorId: 502,
      authorName: "J.R.R. Tolkien",
    },
  },
  {
    bookId: 103,
    bookTitle: "To Kill a Mockingbird",
    bookPrice: 350,
    bookPublished: "2015-07-11",
    bookDescription:
      "Set in the Deep South during the 1930s, 'To Kill a Mockingbird' follows Scout Finch and her brother Jem as they navigate a world of racial injustice and moral growth. Their father, Atticus Finch, defends a black man accused of raping a white woman, challenging the prejudices of their community. This timeless novel explores themes of empathy, justice, and the loss of innocence.",
    bookImageUrl:
      "https://m.media-amazon.com/images/I/81gepf1eMqL._SL1500_.jpg",
    bookAuthor: {
      authorId: 503,
      authorName: "Harper Lee",
    },
  },
];

let allAuthors = [
  {
    authorId: 501,
    authorName: "J.K Rowling",
  },
  {
    authorId: 502,
    authorName: "J.R.R. Tolkien",
  },
  {
    authorId: 503,
    authorName: "Harper Lee",
  },
];

const loadAllBooks = () => {
  const rows = allBooks.map(
    (eachBook) => `
          <tr>
              <td>${eachBook.bookId}</td>
              <td><img src="${eachBook.bookImageUrl}" style="width: 150px; height: 150px; object-fit: contain;" ></td>
              <td>${eachBook.bookTitle}</td>
              <td><button type="button" class="btn btn-warning" onclick="loadABook(${eachBook.bookId})">VIEW</button></td>
              <td><button type="button" class="btn btn-primary" onclick="showUpdateBookCard(${eachBook.bookId})">EDIT</button></td>
              <td><button type="button" class="btn btn-danger" onclick="deleteBook(${eachBook.bookId})">DELETE</button></td>
          </tr>
      `
  );

  const content = rows.join("");
  document.getElementById("display").innerHTML = content;
};

const loadABook = (bookId) => {
  document.getElementById("table").innerHTML = ``;
  document.getElementById("title").innerText = "";
  document.getElementById("addBookButton").innerHTML = "";
  book = allBooks.find((eachBook) => eachBook.bookId === bookId);
  const content = `
    <div class="card" style="width: 56rem;">
        <div class="row no-gutters">
            <div class="col-auto d-flex justify-content-center align-items-center" style="height: 100%;">
                <img src="${book.bookImageUrl}" class="card-img" alt="${book.bookTitle}" style="width: 300px; height: auto;">
            </div>
            <div class="col">
                <div class="card-body">
                    <h5 class="card-title">${book.bookTitle}</h5>
                    <p class="card-text"><strong>Author:</strong> ${book.bookAuthor.authorName}</p>
                    <p class="card-text"><strong>Price:</strong> $${book.bookPrice}</p>
                    <p class="card-text"><strong>Published:</strong> ${book.bookPublished}</p>
                    <p class="card-text"><strong>Description:</strong> ${book.bookDescription}</p>
                    <button type="button" class="btn btn-primary" onclick="closeCard()">CLOSE</button>
                </div>
            </div>
        </div>
    </div>
    `;
  document.getElementById("view").innerHTML = content;
};

const showTable = () => {
  const tableContent = `<thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th colspan="3" class="text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody id="display"></tbody>`;
  document.getElementById("table").innerHTML = tableContent;
  loadAllBooks();
};

const closeCard = () => {
  createAddBookButton();
  document.getElementById("title").innerText = "Books";
  document.getElementById("view").innerHTML = "";
  showTable();
};

const deleteBook = (bookId) => {
  allBooks = allBooks.filter((eachBook) => eachBook.bookId != bookId);
  loadAllBooks();
};

const loadAllAuthors = () => {};

const showAddBookCard = () => {
  const content = `
        <div class="card" style="width: 56rem; margin: auto;">
            <div class="card-body">
                <form id="addBookForm">
                    <div class="form-group">
                        <label for="bookTitle">Title</label>
                        <input type="text" class="form-control" id="bookTitle" required>
                    </div>
                    <div class="form-group">
                        <label for="bookAuthor">Author</label>
                        <input type="text" class="form-control" id="bookAuthor" required>
                    </div>
                    <div class="form-group">
                        <label for="bookPrice">Price</label>
                        <input type="number" class="form-control" id="bookPrice" required>
                    </div>
                    <div class="form-group">
                        <label for="bookPublished">Published Date</label>
                        <input type="date" class="form-control" id="bookPublished" required>
                    </div>
                    <div class="form-group">
                        <label for="bookDescription">Description</label>
                        <textarea class="form-control" id="bookDescription" rows="3" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="bookImageUrl">Image URL</label>
                        <input type="url" class="form-control" id="bookImageUrl" required>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addBook()">Add Book</button>
                    <button type="button" class="btn btn-secondary" onclick="hideBookCard()">Cancel</button>
                </form>
            </div>
        </div>
    `;
  document.getElementById("addBookButton").innerHTML = "";
  document.getElementById("title").innerText = "Add Book";
  document.getElementById("table").innerHTML = "";
  document.getElementById("view").innerHTML = content;
};

const hideBookCard = () => {
  createAddBookButton();
  document.getElementById("title").innerText = "Books";
  document.getElementById("view").innerHTML = "";
  showTable();
};

const getAuthorId = (bookAuthor) => {
  let author = allAuthors.find(
    (eachAuthor) =>
      eachAuthor.authorName.toLowerCase() === bookAuthor.toLowerCase()
  );

  if (author) {
    return author.authorId;
  } else {
    let newAuthor = {
      authorId: allAuthors.length + 501,
      authorName: bookAuthor,
    };
    allAuthors.push(newAuthor);
    return newAuthor.authorId;
  }
};

const addBook = () => {
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookPrice = parseFloat(document.getElementById("bookPrice").value);
  const bookPublished = document.getElementById("bookPublished").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const bookImageUrl = document.getElementById("bookImageUrl").value;

  const newBook = {
    bookId: allBooks.length + 101,
    bookTitle,
    bookAuthor: {
      authorId: getAuthorId(bookAuthor),
      authorName: bookAuthor,
    },
    bookPrice,
    bookPublished,
    bookDescription,
    bookImageUrl,
  };

  allBooks.push(newBook);

  document.getElementById("title").innerText = "Books";
  createAddBookButton();

  document.getElementById("addBookForm").reset();
  hideBookCard();
};

const showUpdateBookCard = (id) => {
  let book = allBooks.find((eachBook) => id === eachBook.bookId);

  const content = `
        <div class="card" style="width: 56rem; margin: auto;">
            <div class="card-body">
                <form id="updateBookForm">
                    <div class="form-group">
                        <label for="bookTitle">Title</label>
                        <input type="text" class="form-control" id="bookTitle" value="${book.bookTitle}" required>
                    </div>
                    <div class="form-group">
                        <label for="bookAuthor">Author</label>
                        <input type="text" class="form-control" id="bookAuthor" value="${book.bookAuthor.authorName}" required>
                    </div>
                    <div class="form-group">
                        <label for="bookPrice">Price</label>
                        <input type="number" class="form-control" id="bookPrice" value="${book.bookPrice}" required>
                    </div>
                    <div class="form-group">
                        <label for="bookPublished">Published Date</label>
                        <input type="date" class="form-control" id="bookPublished" value="${book.bookPublished}" required>
                    </div>
                    <div class="form-group">
                        <label for="bookDescription">Description</label>
                        <textarea class="form-control" id="bookDescription" rows="3" required>${book.bookDescription}</textarea> 
                    </div>
                    <div class="form-group">
                        <label for="bookImageUrl">Image URL</label>
                        <input type="url" class="form-control" id="bookImageUrl" value="${book.bookImageUrl}" required>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="updateBook(${id})">Update Book</button> 
                    <button type="button" class="btn btn-secondary" onclick="hideBookCard()">Cancel</button>
                </form>
            </div>
        </div>
    `;
  document.getElementById("addBookButton").innerHTML = "";
  document.getElementById("title").innerText = "Update Book";
  document.getElementById("table").innerHTML = "";
  document.getElementById("view").innerHTML = content;
};

const updateBook = (id) => {
  let bookIndex = allBooks.findIndex((eachBook) => id === eachBook.bookId);

  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookPrice = parseFloat(document.getElementById("bookPrice").value);
  const bookPublished = document.getElementById("bookPublished").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const bookImageUrl = document.getElementById("bookImageUrl").value;

  const updateBook = {
    bookId: id,
    bookTitle,
    bookAuthor: {
      authorId: getAuthorId(bookAuthor),
      authorName: bookAuthor,
    },
    bookPrice,
    bookPublished,
    bookDescription,
    bookImageUrl,
  };

  allBooks[bookIndex] = { ...updateBook };

  document.getElementById("title").innerText = "Books";
  createAddBookButton();

  document.getElementById("updateBookForm").reset();
  hideBookCard();
};

let createAddBookButton = () => {
  const content = `<button type="button" class="btn btn-success" onclick="showAddBookCard()">Add Book</button>`
  document.getElementById("addBookButton").innerHTML = content;
}

window.onload = loadAllBooks();
