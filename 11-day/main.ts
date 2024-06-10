// Question 40: Album: Create objects for music albums
interface Album{
    artist : string,
    title : string,
    track? : number
}
function createAlbum(artist : string, title : string, track? : number) : Album{
    let album : Album = {
        artist : artist, 
        title : title, 
    }
    if(track){
        album.track = track
    }
    return album
}
console.log(createAlbum("Roby", "Knees"));
console.log(createAlbum("Lex", "Let's Begins", 23));







// Question 41: Magicians: Display magician names from an array.

let magicians : string[] = ["Harry Poter", "Alice", "Leonard"];
for(let i = 0; i < magicians.length; i++){
    console.log(magicians[i]);
}

