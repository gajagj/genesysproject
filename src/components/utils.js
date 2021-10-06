export const frameAuthorName=(name)=>{
    if(name){
        let nameSplit=name.split(",");
        return nameSplit[0];
    }
}

export const framePublishDate=(date)=>{
    let dateFrame=new Date(date);
    const months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let hourValue=dateFrame.getHours()
    let minValue=dateFrame.getMinutes().toString()
    let timeStamp = hourValue >12 ? hourValue-12+":"+minValue +" PM" : hourValue-12+":"+minValue +" AM"
    dateFrame= dateFrame.getDate().toString()+ " " + months[dateFrame.getMonth()]+ " " + dateFrame.getFullYear().toString() +" "+ timeStamp
    console.log(dateFrame)
    return dateFrame
}