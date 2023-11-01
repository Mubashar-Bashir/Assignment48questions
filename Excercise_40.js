"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(title, artist, num_of_tracks) {
    const album = {
        album_title: title,
        album_artist: artist,
    };
    if (num_of_tracks != undefined) {
        album.tracks = num_of_tracks;
    }
    return album;
}
const album1 = make_album('Album_title1', "Nusrat Fateh Ali Khan");
console.log(album1);
const album2 = make_album('Album_title2', "Atif Aslam", 12);
console.log(album2);
const album3 = make_album('Album_title3', "Lata Mangeshker");
console.log(album3);
