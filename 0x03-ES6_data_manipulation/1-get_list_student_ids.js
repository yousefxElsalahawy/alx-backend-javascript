// export default function getListStudentIds(list) {
//   if (Array.isArray(list)) {
//     return list.map((obj) => obj.id);
//   }
//   return [];
// }

const getListStudentIds = (listStudents) => {
  let listStudentIds = [];
  if (!(listStudents instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = listStudents.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;
