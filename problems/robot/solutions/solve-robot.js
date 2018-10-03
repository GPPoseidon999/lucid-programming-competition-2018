const seqs = [
    'FRLF',
    'FRFRFRF',
    'FRFLFRFLFRFL',
    'FRFLFRFLFRFLL',
    'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFRR',
];

function addTuples(a, b) {
    return [a[0] + b[0], a[1] + b[1]];
}

function tuplesAreEqual(a, b) {
    return a[0] == b[0] && a[1] == b[1];
}

const moves = {
    0: [0, 1],
    1: [1, 0],
    2: [0, -1],
    3: [-1, 0]
};

function movesToLoop(sequence) {
    direction = 0; // 0=up, 1=right, 2=down, 3=left
    position = [0, 0]; // up=[x, y++], right=[x++, y], down=[x, y--], left=[x--, y]

    for (char of sequence) {
        if (char == 'R') direction = Math.abs((direction + 1) % 4);
        else if (char == 'L') direction = Math.abs((direction - 1) % 4);
        else position = addTuples(position, moves[direction]);
    }

    if (tuplesAreEqual(position, [0, 0])) return 1;
    else if (direction == 2) return 2;
    else if (direction == 0) return -1;
    else return 4;
}

seqs.forEach((val, i) => {
    console.log(val, ': ', movesToLoop(val));
});