export function CapitalFirstChar(value?: string) {
    return value && `${value?.slice(0, 1).toLocaleUpperCase()}${value?.slice(1)}`
}