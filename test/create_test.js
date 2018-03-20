const assert = require("assert"),
      User  = require("../assets/src/user.js");




describe("\"Creating\" User Test", () => {
  it("saves a user", (done) => {

    const joeTest = new User({name:"JoeTest"});

    joeTest.save()
      .then(() => {
        assert(joeTest.isNew === false);
        done();
      });
  });
});

describe("second test", () => {
  it("testing 1,2,3 :)", () => {
    assert( true === true);
  });
});
