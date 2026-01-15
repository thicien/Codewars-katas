async function getState(promise) {
  const pendingMarker = {};

  try {
    const result = await Promise.race([
      promise,
      pendingMarker
    ]);

    return result === pendingMarker ? "pending" : "fulfilled";
  } catch {
    return "rejected";
  }
}
await getState(Promise.resolve());
// "fulfilled"

await getState(Promise.reject());
// "rejected"

await getState(new Promise(() => {}));
// "pending"
