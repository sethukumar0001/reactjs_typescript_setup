export function encrypProduct(text1 : string, text2 : string) : string {
    return text1.substring(text1.length-4, text1.length) + "**** - " + text2; 
}