
const users = require('../../../server/userData.json');

const fns = require('../../utils/jadenFunctions');


test('return specific state from filtering by state', () => {
    let userToCheck = fns.getStudentsByState(users, 'UT');
    expect(userToCheck[0].state).toEqual('UT');
})




test('Junior to be returned', () => {
    let studentToFind = fns.getStudentsByYear(users, 'Junior');

    expect(studentToFind[0].current_year).toEqual('Senior')
})


test('return specific user id from searching by id', () => {
    let userToCheck = fns.getStudentById(users, 2);

    expect(userToCheck[0].name).toEqual('Jaden');
})


test('return specified name from searching by name', () => {
    let userToCheck = fns.getStudentByName(users, 'Jaden');

    expect(userToCheck[0].name).toEqual('Jaden');
})

test('return all students from db', () => {

    expect.assertions(1);

    const url = 'http://localhost:3005/getallstudents';

    return fns.getAllStudents(url).then(res => {
        expect(res.length).toBeGreaterThan(0);

    })
})