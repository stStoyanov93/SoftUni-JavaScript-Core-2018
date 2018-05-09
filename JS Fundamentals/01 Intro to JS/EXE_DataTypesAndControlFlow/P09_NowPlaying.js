function displayCurrentTrack(data) {
    let [songName, artistName, duration] = data;

    return `Now Playing: ${artistName} - ${songName} [${duration}]`;
}