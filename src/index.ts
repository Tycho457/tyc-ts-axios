import { AxiosRequestConfig} from './types'
import {bulidURL} from './helpers/url'
import { transformRequest } from './helpers/data'
import xhr from './xhr'

function axios (config:AxiosRequestConfig):void {
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    config.url = transformURL(config)
    config.data = transformRequestData(config)
}

function transformURL(config:AxiosRequestConfig): string {
    const {url, params} = config
    return bulidURL(url, params)
}

function transformRequestData (config: AxiosRequestConfig): any {
    return transformRequest(config.data)
}

export default axios