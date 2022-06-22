async function test() {
  const promise = Promise.resolve(123222);
  console.log(await promise);
}
test();
