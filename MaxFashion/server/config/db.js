const mongoose = require("mongoose");
const password = "incorrect_2801" 
try {
  mongoose.connect(`mongodb+srv://hustler2801:${password}@cluster0.xye7m9m.mongodb.net/maxfashion?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
