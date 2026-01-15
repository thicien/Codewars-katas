async function getState(promise) {
  const pending = {};
  try {
    const result = await Promise.race([promise, pending]);
    return result === pending ? "pending" : "fulfilled";
  } catch {
    return "rejected";
  }
}
(async () => {
  console.log(await getState(Promise.resolve()));
  console.log(await getState(Promise.reject()));
  console.log(await getState(new Promise(() => {}))); 
})();