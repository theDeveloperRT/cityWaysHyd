let rows = total_Stops;
let cols = total_Stops;

for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
        if (i==j) {
            row.push(0);
        }else{
            row.push(-1);
        }
    }
    arrayfaresCO.push(row);
}

for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
        if (i==j) {
            row.push(0);
        }else{
            row.push(-1);
        }
    }
    arrayfaresME.push(row);
}

// console.log(SHD.indexOf('SECUNDERABAD'), SHD.indexOf('LALAPET'))

// arrayfaresCO[993][543] = 10;
// arrayfaresME[993][543] = 10;
// arrayfaresCO[898][543] = 20;
// arrayfaresME[898][543] = 25;

function faresSetter(m, s, d, fCO, fME) {
    let sRef = SHD.indexOf(s);
    let dRef = SHD.indexOf(d);
    if (m == 1) {
        arrayfaresCO[sRef][dRef] = fCO;
        arrayfaresME[sRef][dRef] = fME;

        arrayfaresCO[dRef][sRef] = fCO;
        arrayfaresME[dRef][sRef] = fME;
    } else if (m == 2) {
        for (let i = 0; i < d.length; i++) {
            arrayfaresCO[sRef][SHD.indexOf(d[i])] = fCO[i];
            arrayfaresME[sRef][SHD.indexOf(d[i])] = fME[i];

            arrayfaresCO[SHD.indexOf(d[i])][sRef] = fCO[i];
            arrayfaresME[SHD.indexOf(d[i])][sRef] = fME[i];
        }
    } else if (m == 3) {
        for (let i = 0; i < d.length; i++) {
            arrayfaresCO[sRef][SHD.indexOf(d[i])] = fCO;
            arrayfaresME[sRef][SHD.indexOf(d[i])] = fME;

            arrayfaresCO[SHD.indexOf(d[i])][sRef] = fCO;
            arrayfaresME[SHD.indexOf(d[i])][sRef] = fME;
        }
    }

    console.log(sRef, dRef)
}

// arrayfaresME[898][620] = 25;

// faresSetter(1, 'SECUNDERABAD', 'MEHDIPATNAM', 30, 35);
// faresSetter(1, 'LALAPET', 'TARNAKA', 10, 10);

// faresSetter(2, 'SECUNDERABAD', ['AMEERPET', 'POLICE LINES', 'KUKATPALLY'], [20, 15, 30], [25, 20, 35]);

// faresSetter(3, 'SECUNDERABAD', ['CHILKALGUDA X ROADS', 'SITAFALMANDI X ROADS', 'NAMALAGUNDU', 'SITAFALMANDI', 'ALUGADDA BHAVI'], 10, 10);

// ENTRY STARTS FROM HERE
