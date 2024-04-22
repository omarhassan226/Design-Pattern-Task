function*  iterator (start:number, end:number, step:number) {
    for (let i = start; i <= end; i+=step){
        yield i;
    }
}

for (const value of iterator(0, 10, 1)) {
	console.log(value); 
}

console.log([...iterator(1, 10, 1)]);

const iterator1 = iterator(1, 10, 1)
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
