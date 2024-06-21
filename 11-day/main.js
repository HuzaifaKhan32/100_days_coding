function createAlbum(artist, title, track) {
    let album = {
        artist: artist,
        title: title,
    };
    if (track) {
        album.track = track;
    }
    return album;
}
console.log(createAlbum("Roby", "Knees"));
console.log(createAlbum("Lex", "Let's Begins", 23));
// Question 41: Magicians: Display magician names from an array.
let magicians = ["Harry Poter", "Alice", "Leonard"];
for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
}
export {};
