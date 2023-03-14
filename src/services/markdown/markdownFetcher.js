export default async function markdownFetcher(path) {
  const res = await fetch(path);
  return await res.json()
}
