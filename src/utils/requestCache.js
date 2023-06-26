const cache = new Map()

export async function fetchWithCache(url) {
  const cachedValue = cache.get(url)

  if (cachedValue === undefined) {
    const res = await (await fetch(url)).json()

    cache.set(url, res)
    return res
  } else {
    return cachedValue
  }
}
