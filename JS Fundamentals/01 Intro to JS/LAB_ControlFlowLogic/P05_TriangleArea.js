function calculateTriangleArea(sideA, sideB, sideC) {
    let halfP = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(halfP * (halfP - sideA) * (halfP - sideB) * (halfP - sideC));
    return area;
}