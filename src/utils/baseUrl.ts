export function getBaseUrl(): string {
    const env: unknown = process.env.NODE_ENV
    if (env == 'test') {
        return `https://xxxxxx`
    } else if (env == 'production') {
        return `https://xxxxxx`
    } else {
        return `https://xxxxxx`
    }
}