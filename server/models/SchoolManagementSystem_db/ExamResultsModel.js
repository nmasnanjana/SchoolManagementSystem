import ExamResultsModelGenerated from "./generated/ExamResultsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ExamResultsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ExamResultsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ExamResultsModelGenerated,
  ...customModel
};
