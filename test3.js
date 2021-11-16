/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
 const data = [
    { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
    { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
  ];
  
  function result(data) {
    // Your Code Here
    for ( let i = 0 ; i < data.length ; i++ ) {
      let type = checkObject(data[i])
      if (type == "object") {
        removeUndefined(data)
      }
    }
    return data
  }

  function checkObject (data) { 
    return typeof data
  }

  function removeUndefined (data) {

    for ( let key in data ) {
      if (data.key == null || !data.key) {
        delete data[key]
        console.log(data)
      }
    }
  
    return data
  }
  console.log(checkObject(data))
  console.log(result(data));