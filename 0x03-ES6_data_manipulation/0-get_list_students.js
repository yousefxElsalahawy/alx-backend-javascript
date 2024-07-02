
// export default getListStudents = () => {

//   let id = [1,2 ,5];
//   let firstName = ["John", "Jane", "Serena"];
//   let location =[ "London", "Columbia", "San Francisco"];
//   let info =[]
//   for(let i = 0; i < id.length; i++){
//     info.push({
//       id : id[i],
//       firstName : firstName[i],
//       location : location[i]
//     })
//   }
//   return info
// }




const getListStudents = () => [
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  },
  {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  },
  {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  },
];

export default getListStudents;
