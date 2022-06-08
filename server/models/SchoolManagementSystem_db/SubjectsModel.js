import SubjectsModelGenerated from "./generated/SubjectsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SubjectsModelGenerated.init();
  
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
      return await SubjectsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SubjectsModelGenerated,
  ...customModel
};
