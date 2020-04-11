const greet = require('./greet');

test('greet Bob', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('NULL or empty input, expect "Hello, my friend."', () => {
    expect(greet("")).toBe("Hello, my friend.");
});

test('greet JOHN, expect "HELLO, JOHN."', () => {
    expect(greet("JOHN")).toBe("HELLO, JOHN.");
});

test('input is array of two names length 2, expect "Hello, Name1 and Name2."', () => {
    expect(greet(["Jane", "Jill"])).toBe("Hello, Jane and Jill.");
});

test('input is array of two names length >2, expect "Hello, Name1, Name2, [...], and NameN."', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
    expect(greet(["Amy", "Brian", "Charlotte", "Tammy"])).toBe("Hello, Amy, Brian, Charlotte, and Tammy.");
});

test('input is array of names length >2, expect "Hello, Name1, Name2, [...], and NameN."', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
    expect(greet(["Amy", "Brian", "Charlotte", "Tammy"])).toBe("Hello, Amy, Brian, Charlotte, and Tammy.");
});

test('input is array of length >2 with mix of shouted and non-shouted, expect "Hello, Name1, Name2, [...], and NameN. AND NAME1, NAME2, [...] AND NAMEN"', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test('input string has comas that potentially divide the string into 2 strings with names, expect each substring-name to be treated as separate name', () => {
    expect(greet("Brian, Charlotte")).toBe("Hello, Brian and Charlotte.");
});

test('Allow the input to escape intentional commas  with double quotes surrounding the entry', () => {
    expect(greet( "\"Charlie, Dianne\"" )).toBe("Hello, Charlie, Dianne.");
});

test('Allow the input to escape intentional commas  with double quotes surrounding the entry', () => {
    expect(greet([ "Bob", "\"Charlie, Dianne\"" ])).toBe("Hello, Bob and Charlie, Dianne.");
});



