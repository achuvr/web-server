const mongoose = require("mongoose");

/*
const TaskSchema = new mongoose.Schema({
   name: {
       type: String,
       required: [true, "タスク名を入れて下さい"],
       trim: true,
       maxlength: [30, "タスク名は30文字以内で入力してください"],
   }, 
    completed: {
       type: Boolean, 
        default: false,
    },
});
*/
const TaskSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    authCode: {
        type: String,
    },
    accessTime: {
        type: String,
    },
    mstVer: {
        type: String,
    },
});

module.exports = mongoose.model("Task", TaskSchema);
