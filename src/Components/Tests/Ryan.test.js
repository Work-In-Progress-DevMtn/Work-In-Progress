const fns = require('../../utils/ryanFunctions');
const users = require('../../../server/userData.json');

test('Get All Students returns data', () => {
    expect.assertions(1);
    const url = 'http://localhost:3005/getallstudents';

    return fns.getAllStudents(url).then( res => {
        expect(res.length).toBeGreaterThan(0);

    })
})

test('filter by state returns user specific state', () => {
    let userToCheck = fns.getStudentsByState(users, 'CA');
    expect(userToCheck[0].state).toEqual('CA');
})

test('filtering by name returns user specific name', () => {
    let userToCheck = fns.getStudentByName(users, 'Ryan');
    expect(userToCheck[0].name).toEqual('Ryan');
})

test('Filtering by id returns student by id', () => {
    let userToCheck = fns.getStudentById(users, 5);
    expect(userToCheck[0].name).toEqual('Alan');
})

test('All seniors to be returned', () => {
    let studentToFind = fns.getStudentsByYear(users, 'Senior');
    expect(studentToFind[0].current_year).toEqual('Senior')
})