const mongoose = require("mongoose");

mongoose.Promise = global.Promise;


before((done) => {

  mongoose.connect("mongodb://localhost/users_test");

  mongoose.connection
    .once("open", () => {
      console.log("Mongo Connected");
      done();
    })
    .on("error", (error) => {
      console.warn("==========Warning==========\n", error);
    });

});


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
