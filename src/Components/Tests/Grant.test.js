const college = require('../../../server/collegeData.json');

const fns = require('../../utils/grantFunctions');

test('retrun specific region by filtering reginon', () => {
    let regionToCheck = fns.getSchoolsByRegion(college, 4);
    expect(regionToCheck[0].region).toEqual(4)
})

test('return specific school by filtering state', () => {
    let stateToCheck = fns.getSchoolsByState(college, 'CA');
    expect(stateToCheck[0].state).toEqual('CA')
})
test('Get All Colleges returns data', () => {
    expect.assertions(1);
    const url = 'http://localhost:3005/getcolleges';

    return fns.getAllColleges(url).then( res => {
        expect(res.length).toBeGreaterThan(0);

    })
})

test('retrun specific school by name', () => {
    let collegeToCheck = fns.getSchoolByName(college, "WashBurn University");
    expect(collegeToCheck[0].name).toEqual("WashBurn University")
})

test('retrun specific college by id', () => {
    let CollegeToCheck = fns.getCollegeById(college, 2);
    expect(CollegeToCheck[0].id).toEqual(2)
})

// test('retrun specific region by filtering reginon', () => {
//     let regionToCheck = fns.getSchoolsByRegion(college, 4);
//     expect(regionToCheck[0].region).toEqual(4)
// })