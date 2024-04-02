const express = require('express');
const app = express();

const books = [
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        description: "A powerful story of racial injustice and moral growth set in the American South during the Great Depression."
    },
    {
        name: "1984",
        author: "George Orwell",
        category: "Dystopian Fiction",
        description: "A dystopian novel set in a totalitarian society, where the government constantly monitors and controls its citizens."
    },
    {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Romance",
        description: "A classic novel about the complexities of love, marriage, and social expectations in early 19th-century England."
    },
    {
        name: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        category: "Science Fiction",
        description: "A comedic science fiction series following the misadventures of an unwitting human and his alien friend."
    },
    {
        name: "The Catcher in the Rye",
        author: "J.D. Salinger",
        category: "Coming-of-Age",
        description: "A controversial novel that explores themes of teenage angst, alienation, and identity."
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        category: "Fantasy",
        description: "The first book in the beloved Harry Potter series, chronicling the magical adventures of a young wizard."
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Classic",
        description: "A tragic love story set against the backdrop of the roaring 1920s, exploring themes of wealth, ambition, and the American Dream."
    }
];

const movies = [
    {
        name: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        description: "A mind-bending thriller about a thief who enters the dreams of others to steal their secrets."
    },
    {
        name: "The Shawshank Redemption",
        director: "Frank Darabont",
        genre: "Drama",
        description: "A powerful tale of hope and redemption, following the lives of two imprisoned men."
    },
    {
        name: "The Godfather",
        director: "Francis Ford Coppola",
        genre: "Crime",
        description: "A mafia epic chronicling the Corleone family's rise to power and the patriarch's struggle to maintain control."
    },
    {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        genre: "Crime",
        description: "A nonlinear narrative that weaves together the intersecting lives of various criminals in Los Angeles."
    },
    {
        name: "The Dark Knight",
        director: "Christopher Nolan",
        genre: "Action",
        description: "A gritty superhero film that pits Batman against the Joker in a battle for Gotham's soul."
    }
];


app.get('/:type', (req, res) => {
  const type = req.params.type;
  if (type == "movies") {
    const movieName = req.query.name;
    if (movieName == null) {
      return res.send({ Status: "OK", Result: movies });
    } else {
      let result = movies.filter((movie) => {
        return movie.name.toLowerCase().includes(movieName.toLowerCase());
      });

      return res.send({ Status: "OK", Result: result });
    }
  } else if (type == "books") {
    const bookName = req.query.name;
    if (bookName == null) {
      return res.send({ Status: "OK", Result: books });
    } else {
      let result = books.filter((book) => {
        return book.name.toLowerCase().includes(bookName.toLowerCase());
      });
      return res.send({ Status: "OK", Result: result });
    }
  } else {
    return res.status(404).send("Invalid type");
  }
});




const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});