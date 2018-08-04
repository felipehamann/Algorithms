function extractMatrixColumn(matrix: number[][], column: number): number[] {
    const matrixColumn: number[] = [];

    matrix.forEach((row) => {
        matrixColumn.push(row[column]);
    });

    return matrixColumn;
}
