import { DataTableRow, DataTableRows } from '../../types/DataTableTypes'

/* eslint-disable @typescript-eslint/no-unused-vars */
type FunctionType = (
  value: string | number,
  prop: number | string,
  subject: DataTableRow | Array<unknown>
) => boolean

function filter(value: unknown, fn: FunctionType) {
  if (Array.isArray(value)) {
    return filterArray(value, fn)
  } else if (Object.getPrototypeOf(value) === Object.prototype) {
    return filterObject(value as DataTableRow, fn)
  }
  return value
}

function filterObject(obj: DataTableRow, fn: FunctionType) {
  for (const key in obj) {
    const value = filter(obj[key], fn)
    if (fn.call(obj, value as string | number, key, obj)) {
      return true
    }
  }
  return false
}

function filterArray(array: Array<unknown>, fn: FunctionType) {
  array.forEach(function (value, index, array) {
    value = filter(value, fn)
    if (fn.call(array, value as string | number, index, array)) {
      return true
    }
  })
  return false
}

function filterForString(dataSet: DataTableRows, key: string): DataTableRows {
  const filtered: DataTableRows = []
  dataSet.forEach(function (set, index, array) {
    const result = filter(set, (value, prop, subject) => {
      // prop is an array index or an object key
      // subject is either an array or an object
      return value.toString().toLowerCase().includes(key.toLowerCase())
    })
    if (result === true) {
      filtered.push(set)
    }
  })
  return filtered
}

export { filterForString }
