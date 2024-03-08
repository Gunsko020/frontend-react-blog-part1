export default function ReadTime(time) {


    const amountOfWords = (time.split(" ").length)
    return Math.round(amountOfWords / 100 * 0.3)



}