function fn1(a: number, cb: Function, cb2: (a: number) => string): string {
  return "dfe";
}
let fn: (a: number) => number;

fn1(
  1,
  () => 2,
  () => "dfe"
);

// function fn(a)
//   return 1;
// }
