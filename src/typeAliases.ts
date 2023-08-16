/* 
    const greet = (user: { name: string, id: string | number }) => {
        console.log(`Name: ${user.name} Id: ${user.id} `);
    }; 
*/

// same type ar jinish gulo avabe rakha jay 
type StringOrNumber = string | number;
type objWithNameAndId = { 
    name: string, 
    id: StringOrNumber 
}

const greetStudent = (student:objWithNameAndId) => {
    console.log(`Name: ${student.name} Id: ${student.id} `)
}

const greetTeacher = (teacher:objWithNameAndId) => {
    console.log(`Name: ${teacher.name} Id: ${teacher.id} `)
}

