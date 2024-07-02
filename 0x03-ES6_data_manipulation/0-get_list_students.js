
export default getListStudents = () => {

  let id = [1,2 ,5];
  let firstName = ["John", "Jane", "Serena"];
  let location =[ "London", "Columbia", "San Francisco"];
  let info =[]
  for(let i = 0; i < id.length; i++){
    info.push({
      id : id[i],
      firstName : firstName[i],
      location : location[i]
    })
  }
  return info
}
