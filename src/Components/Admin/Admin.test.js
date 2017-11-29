const fns = require('../../utils/josiFunctions');


test('Get All Students returns data', () => {
    expect.assertions(1);
    const url = 'http://localhost:3005/getallstudents';

    return fns.getAllStudents(url).then( res => {
        expect(res.length).toBeGreaterThan(0);
    })
})