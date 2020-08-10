function multy(band, album, song) {
    let bandName;
    let albumName;
    let songName;
    if (typeof(band) === 'string') {
        bandName = band;
    }else {
        bandName = band.toString();
    }
    if (typeof(album) === 'string') {
        albumName = album;
    }else {
        albumName = album.toString();
    }
    if (typeof(song) === 'string') {
        songName = song;
    }else {
        songName = song.toString();
    }
    let songDuration = Math.ceil((bandName.length * albumName.length * songName.length / 2)/2.5);
    console.log(`The plate was rotated ${songDuration} times.`)
}