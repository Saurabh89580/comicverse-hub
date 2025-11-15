/* comics.js - static dataset (window.COMICS) */
const COMICS = [
  {
    id: "001",
    title: "Nightfall: Issue #1",
    series: "Nightfall",
    publisher: "Image",
    characters: ["Raven", "Detective Cole"],
    genre: ["Action", "Mystery"],
    price: 3.99,
    release_date: "2025-07-10",
    img: "assets/images/images/nightfall.jpg",
    synopsis: "A gritty origin story where shadows reveal more than they hide.",
    creators: { writer: "A. Author", artist: "B. Artist" }
  },
 {
  id: "002",
  title: "Invincible (Compendium)",
  series: "Invincible",
  publisher: "Image Comics",
  characters: ["Mark Grayson", "Omni-Man", "Viltrumites"],
  genre: ["Superhero", "Action", "Sci-Fi"],
  price: 31.00, // you didn't give price, so I used views = 31M → placeholder
  release_date: "2024-01-01", // no date given → placeholder, change if needed
  img: "assets/images/images/invincible.jpg", // update filename based on your image
  synopsis:
    "Mark Grayson is teenage superhero Invincible. He lived a normal high-school life until discovering he inherited superpowers from his father Nolan — the legendary Omni-Man. As Mark learns the truth about his Viltrumite heritage, he is pulled into a universe-spanning journey of duty, power, and the struggle between destiny and free will.",
  creators: {
    writer: "Robert Kirkman",
    artist: "Ryan Ottley, Cory Walker, Bill Crabtree, Cliff Rathburn, Nathan Fairbairn, Rus Wooton"
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Superhero"],
  art_style: ["Western Comics"],
  stats: {
    views: "31M",
    shelves: 99377,
    releases: 3,
    rating: "13+"
  }
},
{
  id: "003",
  title: "Absolute Batman",
  series: "Absolute Batman (2024–)",
  publisher: "DC",
  characters: ["Batman"],
  genre: ["Superhero"],
  price: 14.00, // placeholder based on "14 Releases" (change if needed)
  release_date: "2024-05-01", // placeholder, update if needed
  img: "assets/images/images/batman.jpg", // update filename to match your image
  synopsis:
    "Without the mansion… without the money… without the butler… what's left is the Absolute Dark Knight. This series reimagines Batman stripped down to his core, forcing him to confront Gotham and himself as never before.",

  creators: {
    writer: "Daniel Warren Johnson, James Harren, Meredith McClaren, Scott Snyder",
    artist:
      "Clay Mann, Daniel Warren Johnson, Gabriel Walta, James Harren, Marcos Martin, Meredith McClaren, Nick Dragotta",
    inker:
      "Clay Mann, Daniel Warren Johnson, Gabriel Walta, James Harren, Marcos Martin, Meredith McClaren, Nick Dragotta",
    cover_artist: "Daniel Warren Johnson, Frank Martin, Nick Dragotta",
    colorist: "Frank Martin, Ivan Plascencia, Muntsa Vicente"
  },

  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Superhero"],
  time_era: ["Earth timeline not applicable"],
  art_style: ["Western Comics"],

  stats: {
    views: "234K",
    shelves: 6185,
    releases: 14,
    rating: "13+"
  }
},


  
];
window.COMICS = COMICS;
