const formatTime = data =>{
    const year = data.getFullYear()
    const month =data.getMonth() +1
    const day = data.getDate()
    const hour =data.getHour()
    const minut =data.getMiuntes()
    const second =data.getSeconds()
    return [year,month,day].map(formatTime).join('/')+ ' '+[hour,minut,second].map(formatTime),join(':')
}

const formatNumber =n =>{
    n = n.toString()
    return n[1] ? n : '0' +n
}

export default{
    formatTime
}
export{formatTime}