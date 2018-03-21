const assert  = require("assert"),
      User    = require("../assets/src/user.js");


describe("\"Reading\" User Test", () => {
  let joeTest;

  beforeEach((done) => {
    joeTest = new User({name: "joeTest"});
    joeTest.save()
      .then(() => { done(); });
  });

  it("finding all users with name of joeTest", (done) => {
    User.find({ name: "joeTest" })
      .then((users) => {
        assert(joeTest._id.toString === users[0]._id.toString);
        done();
      });
  });

  it("find a user with a particular id", (done) => {
    User.findOne({ _id: joeTest._id })
      .then((returnedUser) => {
        assert(returnedUser.name === "joeTest");
        done();
      });
  });
});
