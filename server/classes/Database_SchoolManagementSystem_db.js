// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import ExamResultsModel from "../models/SchoolManagementSystem_db/ExamResultsModel";
import StudentModel from "../models/SchoolManagementSystem_db/StudentModel";
import SubjectsModel from "../models/SchoolManagementSystem_db/SubjectsModel";
import TeacherModel from "../models/SchoolManagementSystem_db/TeacherModel";
import UserModel from "../models/SchoolManagementSystem_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.SchoolManagementSystem_db_dbUrl);

    // Start Init Models

		ExamResultsModel.init();
		StudentModel.init();
		SubjectsModel.init();
		TeacherModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_SchoolManagementSystem_db = await mongoose.connect(
        "mongodb://" + properties.SchoolManagementSystem_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_SchoolManagementSystem_db;
  }
}

export default new Database();
