const lib = require('../code/content');

test("Returns number of year of experience", () => {
    expect(lib.getExperience("2+ years of experience")).toBe("2+ years");
});

test("Returns degree required", () => {
    expect(lib.getDegree("Masters and Bachelors in Computer Science")).toBe(["Masters ", "Bachelors "]);
});

test("Returns if job is remote or not", () => {
    expect(lib.getRemote("remote work till end of June")).toBe("Yes");
});

test("Returns if Sponsorship is provided or not", () => {
    expect(lib.getSponsorship("US Citizens required")).toBe("Yes");
});
