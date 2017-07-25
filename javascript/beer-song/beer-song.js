class BeerSong {
    subject(index) {
        if (index === 0) {
            return 'no more bottles';
        }
        return index + ' ' + ((index === 1) ? 'bottle' : 'bottles');
    }

    thisExerciseIsBoring(index) {
        return ((index === 1) ? 'it' : 'one');
    }

    verse(index) {
        let verse;
        if (index === 0) {
            verse = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
        } else {
            verse = '@@@@@ of beer on the wall, @@@@@ of beer.\nTake §§§§§ down and pass it around, ##### of beer on the wall.\n';
        }
        return verse
            .replace(/@@@@@/g, this.subject(index))
            .replace(/#####/, this.subject(index - 1))
            .replace(/§§§§§/, this.thisExerciseIsBoring(index));
    }

    sing(fromVerse, toVerse) {
        if (toVerse === undefined) {
            toVerse = 0;
        }
        let song = '';
        for (let i = fromVerse; i >= toVerse; i--) {
            song += this.verse(i) + ((i !== toVerse) ? '\n' : '');
        }
        return song;
    }
}

module.exports = BeerSong;
