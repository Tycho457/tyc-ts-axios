import { AxiosTransformer } from '../types'

// fns代表一个或多个转换函数
export default function transform(
    data: any,
    headers: any,
    fns?: AxiosTransformer | AxiosTransformer[]
): any {
    if(!fns) {
        return data
    }
    if(!Array.isArray(fns)) {
        fns = [fns]
    }
    fns.forEach(fn => {
        data = fn(data, headers)
    })
    return data
}