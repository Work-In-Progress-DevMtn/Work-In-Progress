const fns = require('../../utils/josiFunctions');
const users = require('../../../server/userData.json');


test('Get All Students returns data', () => {
    expect.assertions(1);
    const url = 'http://localhost:3005/getallstudents';

    return fns.getAllStudents(url).then( res => {
        expect(res.length).toBeGreaterThan(0);
    })
})

test('Filter by State returns All users from specified state', () => {
    let userToCheck = fns.getStudentsByState(users, 'UT');

    expect(userToCheck[0].state).toEqual('UT');
})

test('Filter by Name returns all users with specified name', () => {
    let userToCheck = fns.getStudentByName(users, 'Josi');

    expect(userToCheck[0].name).toEqual('Josi');
})


test('Filter by Name and State returns all users with specified name and state', () => {
    let userToCheck = fns.getStudentByNameAndState(users, 'Josi', 'UT');

    expect(userToCheck[0].name).toEqual('Josi');
    expect(userToCheck[0].state).toEqual('UT');
})

test('Filter admin returns users who are admin', () => {
    let userToCheck = fns.filterAdmin(users, true);

    expect(userToCheck[0].is_admin).toEqual(true);
    expect(userToCheck[1].is_admin).toEqual(true);
})