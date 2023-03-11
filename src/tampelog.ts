import { sprintf } from "https://deno.land/std@0.178.0/fmt/printf.ts";
function getStamp(d:Date){
    return sprintf("%02d:%02d",d.getHours(),d.getMinutes())
}
export function tinf(s:string):void {
    console.error(`"\x1B[1;32mINF\x1B[0m [${getStamp(new Date)}]: ${s}`)
}
export function twrn(s:string):void {
    console.error(`"\x1B[1;93mWRN\x1B[0m [${getStamp(new Date)}]: ${s}`)
}
export function terr(s:string):void {
    console.error(`"\x1B[1;31mERR\x1B[0m [${getStamp(new Date)}]: ${s}`)
}