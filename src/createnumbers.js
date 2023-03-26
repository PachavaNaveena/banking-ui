
export const createNumbers = () => {
    const rows = new Array(3);
    const n = 3;
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j=0; j< n; j++) {
            row.push((i * n) + j + 1)
        }
        rows.push(row)
    }
    return rows
}