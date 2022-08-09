function fizzbuzz(iterations) {
    const _iterNumLen = _numLen(iterations);

    for (let i = 1; i <= iterations; i++) {
        let out;

        if (i % 3 === 0) {
            out = "Fizz";
        } else if (i % 5 === 0) {
            out = "Buzz";
        } else if (i % 15 === 0) {
            out = "FizzBuzz";
        } else {
            out = i;
        }

        console.log(`${_pad(i, _iterNumLen)}) ${out}`);
    }
}

const _numLen = (n) => Math.floor(Math.log10(n)) + 1;
const _pad = (n, p = 3) => n.toString().padStart(p, " ");

const iterations = parseInt(process.argv[2]) || 20;
fizzbuzz(iterations);
