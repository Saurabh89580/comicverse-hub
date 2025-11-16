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
},{
  id: "004",
  title: "Marvel Zombies: Resurrection (2020)",
  series: "Marvel Zombies: Resurrection",
  publisher: "Marvel",
  characters: ["Spider-Man", "Galactus (Corpse)", "Ragtag Survivors"],
  genre: ["Horror", "Action", "Zombies"],
  price: 3.99,
  release_date: "2020-09-01",
  img: "assets/images/images/marvel-zombies-resurrection.jpg",
  synopsis: "When the corpse of Galactus crashes to Earth carrying a terrifying cannibalistic virus, Spider-Man and a desperate team of heroes fight to save humanity and uncover the horrifying truth behind the outbreak.",
  creators: { 
    writer: "Phillip Kennedy Johnson", 
    artist: "Leonard Kirk",
    cover_artist: "Inhyuk Lee"
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Zombies"],
  art_style: "Western Comics"
},{
  id: "005",
  title: "Civil War (2006)",
  series: "Civil War",
  publisher: "Marvel",
  characters: [
    "Iron Man",
    "Captain America",
    "Spider-Man",
    "Fantastic Four",
    "Avengers"
  ],
  genre: ["Superhero", "Action", "Drama"],
  price: 3.99,
  release_date: "2006-05-01",
  img: "assets/images/images/civil-war-2006.jpg",
  synopsis:
    "A facsimile re-presentation of the landmark crossover that reshaped the Marvel Universe. After a tragedy in Stamford sparks the Superhuman Registration Act, the world's heroes split into two opposing sides—Iron Man leading pro-registration forces and Captain America leading the resistance. As alliances fracture and tensions rise, Spider-Man faces a life-altering decision that will change the course of the conflict.",
  creators: {
    writer: "Mark Millar",
    artist: "Steve McNiven",
    penciler: "Steve McNiven",
    cover_artist: "Steve McNiven"
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Superhero"],
  art_style: "Western Comics"
},{
  id: "006",
  title: "World War Hulk (2007)",
  series: "World War Hulk",
  publisher: "Marvel",
  characters: [
    "Hulk",
    "Iron Man",
    "Reed Richards",
    "Doctor Strange",
    "Black Bolt",
    "Warbound"
  ],
  genre: ["Superhero", "Action", "Sci-Fi"],
  price: 3.99,
  release_date: "2007-06-01",
  img: "assets/images/images/world-war-hulk-2007.jpg",
  synopsis:
    "After being exiled to the savage world of Sakaar, the Hulk rose from slave to gladiator to king. Now he returns to Earth with unstoppable rage and his Warbound allies to unleash vengeance on the heroes who sent him away—Iron Man, Reed Richards, Doctor Strange, and Black Bolt. Stronger than ever, Hulk threatens to tear the planet apart as he seeks justice and retribution.",
  creators: {
    writer: "Greg Pak",
    penciler: "John Romita Jr.",
    cover_artist: "David Finch",
    artist: "John Romita Jr."
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Superhero"],
  art_style: "Western Comics"
},{
  id: "007",
  title: "Predator vs. Wolverine (2023)",
  series: "Predator vs. Wolverine",
  publisher: "Marvel",
  characters: [
    "Wolverine",
    "Predator (Yautja)",
    "Weapon X"
  ],
  genre: ["Superhero", "Action", "Sci-Fi"],
  price: 4.99,
  release_date: "2023-09-01",
  img: "assets/images/images/predator-vs-wolverine-2023.jpg",
  synopsis:
    "Witness the untold blood-soaked battles between Wolverine and the ultimate hunter: a Predator. As one Yautja seeks the greatest prey in existence, it sets its sights on Weapon X—leading to brutal confrontations from the frozen Canadian wilderness to the deadly streets of Madripoor. Benjamin Percy delivers a savage saga where Wolverine and a Predator break everything in their path in pursuit of victory…or glorious death.",
  creators: {
    writer: "Benjamin Percy",
    penciler: [
      "Andrea Di Vito",
      "Gavin Guidry",
      "Greg Land",
      "Hayden Sherman",
      "Kei Zama",
      "Ken Lashley",
      "Lashley"
    ],
    cover_artist: null,
    artist: null
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Superhero"],
  art_style: "Western Comics"
},{
  id: "008",
  title: "Ultimate Spider-Man (2024)",
  series: "Ultimate Spider-Man",
  publisher: "Marvel",
  characters: [
    "Spider-Man",
    "Ben Parker",
    "J. Jonah Jameson",
    "Green Goblin"
  ],
  genre: ["Superhero", "Action", "Mystery"],
  price: 4.99,
  release_date: "2024-01-01",
  img: "assets/images/images/ultimate-spider-man-2024.jpg",
  synopsis:
    "Ben Parker and J. Jonah Jameson take the spotlight in a gripping investigative mystery. In a world full of shadows, secrets, and danger, every discovery leads to greater risk. As the Green Goblin looms, they must decide whether uncovering the truth—or keeping it hidden—is the bigger challenge.",
  creators: {
    writer: "Jonathan Hickman",
    artist: ["David Messina", "Marco Checchetto"],
    cover_artist: "Marco Checchetto"
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Superhero"],
  art_style: "Western Comics"
},
{
  id: "009",
  title: "Star Wars: Darth Vader (2020)",
  series: "Darth Vader",
  publisher: "Marvel",
  characters: [
    "Darth Vader",
    "Luke Skywalker",
    "Emperor Palpatine",
    "Cloud City Imperials"
  ],
  genre: ["Space", "Sci-Fi", "Action"],
  price: 4.99,
  release_date: "2020-02-01",
  img: "assets/images/images/star-wars-darth-vader-2020.jpg",
  synopsis:
    "Following the shocking events of *The Empire Strikes Back*, Darth Vader reels from Luke Skywalker's refusal to join him. Consumed by rage and betrayal, Vader launches a brutal mission of vengeance against anyone responsible for hiding the truth of his son's past. As he uncovers long-buried secrets, Vader must confront both new enemies and the shadows of his own dark history. Greg Pak and Raffaele Ienco deliver a gripping tale of fury, discovery, and the dark side unleashed.",
  creators: {
    writer: "Greg Pak",
    penciler: "Raffaele Ienco",
    artist: "Raffaele Ienco",
    cover_artist: [
      "Aaron Kuder",
      "Daniel Acuna",
      "Inhyuk Lee"
    ]
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Space"],
  art_style: "Western Comics"
},
{
  id: "010",
  title: "Batman/Superman: World's Finest (2022–)",
  series: "Batman/Superman: World's Finest",
  publisher: "DC",
  characters: [
    "Batman",
    "Superman",
    "Doom Patrol",
    "Metallo",
    "Bruce Wayne"
  ],
  genre: ["Superhero", "Fighting", "Friendship"],
  price: 4.99,
  release_date: "2022-03-01",
  img: "assets/images/images/batman-superman-worlds-finest-2022.jpg",
  synopsis:
    "In a thrilling adventure set in the not-too-distant past, Superman becomes dangerously supercharged after a chemical attack by Metallo. With his powers spiraling out of control, he turns to the one ally he can trust—Batman. To save the Man of Steel, Batman recruits the Doom Patrol, leading to an explosive chain of events that set the stage for major shifts in the DC Universe. Legendary creators Mark Waid and Dan Mora bring the World's Finest together in a bold, high-energy saga collecting issues #1–6.",
  creators: {
    writers: [
      "Mark Waid",
      "Christopher Cantwell",
      "Cullen Bunn",
      "Dennis Culver",
      "Mark Russell",
      "Morgan Hampton",
      "Stephanie Williams"
    ],
    pencilers: [
      "Adrian Gutierrez",
      "Clayton Henry",
      "Dan McDaid",
      "Dan Mora",
      "Edwin Galmon",
      "Emanuela Lupacchino",
      "Fran Galan",
      "Gleb Melnikov",
      "Jorge Fornés",
      "Lucas Meyer",
      "Rosi Kämpe",
      "Sean Izaakse",
      "Steve Pugh",
      "Travis G. Moore",
      "Travis Mercer"
    ],
    inkers: [
      "Adrian Gutierrez",
      "Clayton Henry",
      "Dan McDaid",
      "Dan Mora",
      "Edwin Galmon",
      "Fran Galan",
      "Gleb Melnikov",
      "Jorge Fornes",
      "Lucas Meyer",
      "Norm Rapmund",
      "Rosi Kämpe",
      "Sean Izaakse",
      "Steve Pugh",
      "Travis G. Moore",
      "Travis Mercer",
      "Wade von Grawbadger"
    ],
    colorists: [
      "Adriano Lucas",
      "Andrew Dalhouse",
      "Dave Stewart",
      "Edwin Galmon",
      "Fran Galan",
      "John Kalisz",
      "Jordie Bellaire",
      "Lee Loughridge",
      "Matt Herms",
      "Neeraj Menon",
      "Rain Beredo",
      "Tamra Bonvillain"
    ],
    illustrators: [
      "Dan Mora",
      "Emanuela Lupacchino",
      "Travis G. Moore"
    ],
    cover_artist: "Dan Mora"
  },
  audience: ["Teenagers (13-18)", "Adults (18+)"],
  theme: ["Fighting", "Superhero", "Friendship", "Time / Era: Earth timeline not applicable"],
  art_style: "Western Comics"
}







  
];
window.COMICS = COMICS;
