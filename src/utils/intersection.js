'use strict'

function intersection (a, b, key) {
  // Indices for quick lookups
  var processed = {}
  var existing = {}

  // Create an index of the first collection
  var addToIndex = e => (existing[key ? e[key] : e] = true)
  a.forEach(addToIndex)

  // Reduce to entries that are not in the first collection
  var reducer = (res, entry) => {
    var isInFirst = existing[key ? entry[key] : entry] !== undefined
    var hasBeenProcessed = processed[key ? entry[key] : entry] !== undefined
    if (isInFirst && !hasBeenProcessed) {
      res.push(entry)
      processed[key ? entry[key] : entry] = true
    }
    return res
  }

  return b.reduce(reducer, [])
}

module.exports = intersection
