export const randomNames = [
    "duck",
    "short",
    "trucks",
    "crazy",
    "unicorn",
    "banana",
    "ninja",
    "star",
    "furious",
    "flamingo",
    "chocolate",
    "rainbow",
    "mystic",
    "jazz",
    "sunny",
    "whispering",
    "moon",
    "dazzling",
    "funky",
    "sparkling",
    "fantastic",
    "blazing",
    "groovy",
    "bubbly",
    "electric",
    "cosmic",
    "dreamy",
    "glitter",
    "magical",
    "silly",
    "zany",
    "dizzy",
    "giddy",
    "quirky",
    "spunky",
    "wacky",
    "wobbly",
    "jiggly",
    "sassy",
    "bouncy",
    "giggly",
    "fluffy",
    "chubby",
    "snazzy",
    "zippy",
    "jumpy",
    "cheeky",
    "hopping",
    "fuzzy",
    "witty",
    "whimsy",
    "zestful",
    "coconut",
    "butterfly",
    "marshmallow",
    "blossom",
    "breezy",
    "tootsie",
    "bubblegum",
    "skittles",
    "pumpkin",
    "scooter",
    "snickerdoodle",
    "whiskers",
    "tootsie",
    "flapjack",
    "doodlebug",
    "twinkle",
    "buttercup",
    "noodles",
    "muffin",
    "bumblebee",
    "tater",
    "scooter",
    "tinker",
    "noodle",
    "snuggle",
    "nugget",
    "pumpkin",
    "wiggle",
    "giggle",
    "nibbles",
    "butterbean",
    "pipsqueak",
    "sprout",
    "snickerdoodle",
    "munchkin",
    "squiggly",
    "fluffernutter",
    "tater",
    "gummybear",
    "whiskers",
    "tootsie",
    "chuckles",
    "wiggle",
    "tinker",
    "doodlebug",
    "squeaky",
    "marshmallow",
    "muffin",
    "twinkle",
    "bumblebee",
    "buttercup",
    "snuggle",
    "giggle",
    "nugget",
    "butterbean",
    "pipsqueak",
    "sprout",
    "nibbles",
    "sprinkle",
    "twinkle",
    "doodlebug",
    "squeaky",
    "munchkin",
    "squiggly",
    "fluffernutter",
    "gummybear",
    "chuckles",
    "scooter",
    "skittles",
    "pumpkin",
    "snickerdoodle",
    "buttercup",
    "tootsie",
    "bubblegum",
    "marshmallow",
    "blossom",
    "breezy",
    "tootsie",
    "flapjack",
    "doodlebug",
    "twinkle"  
]

export const getRandomName = () => {
    const getRandomNumber = () =>{
        return Math.floor(Math.random()*randomNames.length)
    }

    return `${randomNames[getRandomNumber()]} ${randomNames[getRandomNumber()]}`
}