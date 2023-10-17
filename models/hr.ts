import mongoose, { Schema, model, models } from "mongoose";

const hrSchema = new Schema({
  name: {
    type: String,
    min: 3,
    required: true,
  },
  email: {
    type: String,
    immutable: true,
    min: 7,
  },
  role: {
    type: Number,
  },
  roleName: {
    type: String,
  },
  employeeData: {
    type: {},
    default: {
      employeeCount: Number,
      employeeSalary: Number,
      employeesGrowCount: Number,
      employeesGrowSalary: Number,
      online: Boolean,
      attendence: String,
      unSeenMessagesCount: Number,
      workingFormat: [{ employeeCount: Number, name: String }],
      employees: [
        {
          name: String,
          email: String,
          image: String,
          role: String,
          status: String,
        },
      ],
    },
  },
  jobData: {
    type: {},
    default: {
      jobsCount: Number,
      jobViewCount: Number,
      jobAppliedCount: Number,
      jobViewGrowCount: Number,
      jobAppliedGrowCount: Number,
      jobStatistics: [{ month: String, data: Number }],
    },
  },
});
const hrModel = models.hr || mongoose.model("hr", hrSchema);
export default hrModel;
