const stringify = (data: Record<string, any>) => {
    const keys = Object.keys(data)
    const values = Object.values(data)
    const newResp = values.map((item, index)=> {
        if(!item) return
        return `${keys[index]}=${item.replace(/\s+/g, "%20").trim()}`
    }).filter(item=>{
        if(item) return true
    }).join("&")
    return newResp
}

const exportObject ={
    stringify
}
export default exportObject