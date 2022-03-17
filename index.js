function superbowlWin(record) {
    const result = record.find(year => year.result === "W")
    console.log(result)
    if (result) {
        return result.year;
    }    
    else {
         return undefined;
    }
}