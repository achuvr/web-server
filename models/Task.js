const mongoose = require("mongoose");

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

module.exports = mongoose.model("Task", TaskSchema);
