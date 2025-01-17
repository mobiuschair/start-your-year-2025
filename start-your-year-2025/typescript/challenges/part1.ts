function plus(x: string | undefined | number, y: string | number) {
    return (typeof x === "number" && typeof y === "number") ? x + y :
           (x === undefined) ? undefined :
           (typeof x === "string" && typeof y === "string") ? x + y : undefined;
}

console.log(plus(2025, 1))       // 2026
console.log(plus(undefined, 21));   // undefined
console.log(plus("StackUp", "Learn"))// StackUpLearn
