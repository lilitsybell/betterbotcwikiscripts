var exceptions = {

    "Devil's Advocate": "devils-advocate.html",

    "Lil' Monsta": "lil-monsta.html",

    "Hell's Librarian": "hells-librarian.html",

    "Al-Hadikhia": "al-hadikhia.html",

    "Deus ex Fiasco": "deus-ex-fiasco.html"

};

var characterPages = [

    // Townsfolk
    "Acrobat",
    "Alchemist",
    "Alsaahir",
    "Amnesiac",
    "Artist",
    "Atheist",
    "Balloonist",
    "Banshee",
    "Bounty Hunter",
    "Cannibal",
    "Chambermaid",
    "Chef",
    "Choirboy",
    "Clockmaker",
    "Courtier",
    "Cult Leader",
    "Dreamer",
    "Empath",
    "Engineer",
    "Exorcist",
    "Farmer",
    "Fisherman",
    "Flowergirl",
    "Fool",
    "Fortune Teller",
    "Gambler",
    "General",
    "Gossip",
    "Grandmother",
    "High Priestess",
    "Huntsman",
    "Innkeeper",
    "Investigator",
    "Juggler",
    "King",
    "Knight",
    "Librarian",
    "Lycanthrope",
    "Magician",
    "Mathematician",
    "Mayor",
    "Minstrel",
    "Monk",
    "Nightwatchman",
    "Noble",
    "Oracle",
    "Pacifist",
    "Philosopher",
    "Pixie",
    "Poppy Grower",
    "Preacher",
    "Princess",
    "Professor",
    "Ravenkeeper",
    "Sage",
    "Sailor",
    "Savant",
    "Seamstress",
    "Shugenja",
    "Slayer",
    "Snake Charmer",
    "Soldier",
    "Steward",
    "Tea Lady",
    "Town Crier",
    "Undertaker",
    "Village Idiot",
    "Virgin",
    "Washerwoman",

    // Outsiders
    "Barber",
    "Butler",
    "Damsel",
    "Drunk",
    "Golem",
    "Goon",
    "Hatter",
    "Heretic",
    "Hermit",
    "Klutz",
    "Lunatic",
    "Moonchild",
    "Mutant",
    "Ogre",
    "Plague Doctor",
    "Politician",
    "Puzzlemaster",
    "Recluse",
    "Saint",
    "Snitch",
    "Sweetheart",
    "Tinker",
    "Zealot",

    // Minions
    "Assassin",
    "Baron",
    "Boffin",
    "Boomdandy",
    "Cerenovus",
    "Devil's Advocate",
    "Evil Twin",
    "Fearmonger",
    "Goblin",
    "Godfather",
    "Harpy",
    "Marionette",
    "Mastermind",
    "Mezepheles",
    "Organ Grinder",
    "Pit-Hag",
    "Poisoner",
    "Psychopath",
    "Scarlet Woman",
    "Spy",
    "Summoner",
    "Vizier",
    "Widow",
    "Witch",
    "Wizard",
    "Wraith",
    "Xaan",

    // Demons
    "Al-Hadikhia",
    "Fang Gu",
    "Imp",
    "Kazali",
    "Legion",
    "Leviathan",
    "Lil' Monsta",
    "Lleech",
    "Lord of Typhon",
    "No Dashii",
    "Ojo",
    "Po",
    "Pukka",
    "Riot",
    "Shabaloth",
    "Vigormortis",
    "Vortox",
    "Yaggababble",
    "Zombuul",

    // Travellers
    "Apprentice",
    "Barista",
    "Beggar",
    "Bishop",
    "Bone Collector",
    "Bureaucrat",
    "Butcher",
    "Cacklejack",
    "Deviant",
    "Gangster",
    "Gnome",
    "Gunslinger",
    "Harlot",
    "Judge",
    "Matron",
    "Scapegoat",
    "Thief",
    "Voudon",

    // Fabled
    "Angel",
    "Buddhist",
    "Deus ex Fiasco",
    "Djinn",
    "Doomsayer",
    "Duchess",
    "Ferryman",
    "Fibbin",
    "Fiddler",
    "Hell's Librarian",
    "Revolutionary",
    "Sentinel",
    "Spirit of Ivory",
    "Toymaker",

    // Lores / Misc
    "Big Wig",
    "Bootlegger",
    "Gardener",
    "God of Ug",
    "Hindu",
    "Knaves",
    "Pope",
    "Storm Catcher",
    "Tor",
    "Ventriloquist",
    "Zenomancer"

];

var searchBox = document.getElementById("searchBox");
var searchResults = document.getElementById("searchResults");

if(searchBox && searchResults){

searchBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        var firstResult = searchResults.querySelector(".search-item");
        if(firstResult){
            firstResult.click();
        }
    }
});

searchBox.addEventListener("input", function(){
var searchTerm = searchBox.value.toLowerCase().trim();
    searchResults.innerHTML = "";
if(searchTerm === ""){
        searchResults.style.display = "none";
        return;
    }
var matches = characterPages.filter(function(page){

    return page.toLowerCase().indexOf(searchTerm) === 0;

});

    if(matches.length === 0){
        searchResults.style.display = "none";
        return;
    }
matches.forEach(function(page){

    var item = document.createElement("div");

    item.className = "search-item";

    item.textContent = page;


item.onclick = function(){

    var url;


    if(exceptions[page]){

        url = exceptions[page];

    } else {

        url = page
            .toLowerCase()
            .replace(/'/g, "")
            .replace(/ /g, "-") + ".html";

    }


    window.location.href =
        "https://betterbotcwiki.weebly.com/" + url;

};


    searchResults.appendChild(item);

});

    searchResults.style.display = "block";
});

}
    
document.addEventListener("click", function(e){

    var searchArea = document.querySelector(".wiki-search");

    if(searchArea && searchResults){

        if(!searchArea.contains(e.target)){
            searchResults.style.display = "none";
        }

    }

});

function moveSearchBar(){

    var search = document.querySelector(".wiki-search");
    var logo = document.querySelector(".header .logo");

    if(search && logo){

        logo.insertAdjacentElement("afterend", search);

        search.style.opacity = "1";

        return true;

    }

    return false;

}


var moveSearchTimer = setInterval(function(){

    if(moveSearchBar()){

        clearInterval(moveSearchTimer);

    }

},100);
