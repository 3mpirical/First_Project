const assert  = require("assert"),
      User    = require("../assets/src/user.js");

describe("\"Deleting\" User Test", () => {
  let joeTest;

  beforeEach((done) => {
    joeTest = new User({ name: "joeTest"});
    joeTest.save()
      .then(() => { done(); });
  });

  it("model instance remove", (done) => {
    joeTest.remove()
      .then(() => { User.findOne({ name: "joeTest"})
      .then((userReturned) => {
        assert(userReturned === null);
        done();
      });
    });
  });

  it("class method remove", (done) => {
    User.remove()
      .then(() => { User.findOne({ name: "joeTest"})
      .then((userReturned) => {
        assert(userReturned === null);
        done();
      });
    });
  });

  it("class method findOneAndRemove", (done) => {
    User.findOneAndRemove({ name: "joeTest" })
      .then(() => { User.findOne({ name: "joeTest"})
      .then((returnedUser) =>{
        assert(returnedUser === null);
        done();
      });
    });
  });

  it("class method findByIdAndRemove", (done) => {
    User.findByIdAndRemove({ _id: joeTest._id})
      .then(() => { User.findOne({ name: "joeTest"})
      .then((userReturned)=>{
        assert(userReturned === null);
        done();
      });
    });
  });


});
