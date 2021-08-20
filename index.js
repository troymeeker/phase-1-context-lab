/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const employees =  [ 'mo', 'ba' ]

const createEmployeeRecord = (employees) => {
    const newObj = {
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour: employees[3],
        timeInEvents: [],
        timeOutEvents: []
     }
     return newObj
}
 
const createEmployeeRecords = (employees) => {
       // console.log('arrayEmp', arrayEmp);
 //.length
 let newArr = employees.map(
    function (employees){
      return createEmployeeRecord(employees)
       
    })
return newArr

} 
const createTimeInEvent = function(dateStamp){
 
    const [date, hour] = dateStamp.split(' ') 
//   console.log('hour:', hour);
//   console.log('date:', date);
   const inEvent = {
        type : 'TimeIn',
        hour: parseInt(hour),
        date: date
   }
   this.timeInEvents.push(inEvent)
      return this
 }


const createTimeOutEvent =  function(dateStamp){
    const [date, hour] = dateStamp.split(' ') 
//   console.log('hour:', hour);
//   console.log('date:', date);
   const OutEvent = {
        type : 'TimeOut',
        hour: parseInt(hour),
        date: date
   }
   this.timeOutEvents.push(OutEvent)
      return this
 }

 function hoursWorkedOnDate(workDate){
 
   let inTime = this.timeInEvents.filter((elmt)=> elmt.date === workDate).map((element) => element.hour);

   let outTime = this.timeOutEvents.filter((elmt)=> elmt.date === workDate).map((element) => element.hour);
 
    //  .map((elmt)=>elmt.hour)
   //given a date, find # of hours worked between Out and in
      return (outTime - inTime ) / 100;
}

const wagesEarnedOnDate = function(workDate){
   return hoursWorkedOnDate.call(this, workDate) * this.payPerHour 
}

 
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
} 

const findEmployeeByFirstName = function(srcArray, firstName){


     return srcArray.find(rec => rec.firstName == firstName)
}

const calculatePayroll = function(recArray){
  return recArray.reduce((total, record) => {
   return total + allWagesFor.call(record)
   },0) 
}