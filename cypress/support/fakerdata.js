import { faker } from '@faker-js/faker'; 
 
export function generateRegistrationData() { 
 
    const roles = [ 
        { id: 'role-quiz-master', value: 'quiz_master', redirect: 
'/manage-topics' }, 
        { id: 'role-user', value: 'user', redirect: '/topics' } 
    ]; 
    const selectedRole = faker.helpers.arrayElement(roles); 
    const randomNumber = faker.string.numeric(3); 
    const usernameBase = faker.internet.username().toLowerCase(); 
    const email = faker.internet.email().toLowerCase(); 
    const username = usernameBase + randomNumber; 
 
    return { 
        username: username, 
        email: email, 
        password: 'regietest', 
        confirmPassword: 'regietest', 
        role: selectedRole.value, 
        roleId: selectedRole.id, 
        expectedRedirect: selectedRole.redirect 
    }; 

}

export function generateUserData() {

    const ubase = faker.internet.username().toLowerCase()
    const randnum =faker.string.numeric(3),
    username = ubase + randnum

    return{
        username: username,
        email: faker.internet.email().toLowerCase(),
        password:'testingpassword12345',
        confirmPassword: 'testingpassword12345',
        role: 'user',
    }
}

export function generateQMData() {

    const ubase = faker.internet.username().toLowerCase()
    const randnum =faker.string.numeric(3),
    username = ubase + randnum

    return{
        username: username,
        email: faker.internet.email().toLowerCase(),
        password:'qwerty213456',
        confirmPassword: 'qwerty213456',
        role: 'quiz_master',
    }
}