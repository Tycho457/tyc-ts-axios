const toString = Object.prototype.toString;

export function isDate(val: any):boolean {
    return toString.call(val) === '[object Date]'
}

export function isObject(val:any):boolean {
    return val !== null && typeof val === 'object'
}

export function isPlainObject (val:any):val is Object{
    return toString.call(val) === '[object Object]'
}

// 把 from 里的属性都扩展到 to 中，包括原型上的属性
export function extend<T, U>(to: T, from: U): T & U {
    for (const key in from) {
      ;(to as T & U)[key] = from[key] as any
    }
    return to as T & U
}

export function deepMerge(...objs: any[]): any {
    const result = Object.create(null)
  
    objs.forEach(obj => {
      if (obj) {
        Object.keys(obj).forEach(key => {
          const val = obj[key]
          if (isPlainObject(val)) {
            if (isPlainObject(result[key])) {
              result[key] = deepMerge(result[key], val)
            } else {
              result[key] = deepMerge({}, val)
            }
          } else {
            result[key] = val
          }
        })
      }
    })
  
    return result
}

export function isFormData(val: any): boolean {
    return typeof val !== 'undefined' && val instanceof FormData
}

export function isURLSearchParams(val: any): val is URLSearchParams {
    return typeof val !== 'undefined' && val instanceof URLSearchParams
}

export function isAbsoluteURL(url: string): boolean {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

export function combineURL(baseURL: string, relativeURL?: string): string {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}
