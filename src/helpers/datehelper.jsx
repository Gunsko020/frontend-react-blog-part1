export default function datehelper(date) {
    const newDate =  new Date(date)

    return newDate.toLocaleDateString('nl-NL',{
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    })
}

