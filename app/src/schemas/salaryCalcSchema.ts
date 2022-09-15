import Joi from "joi";

const salaryCalcSchema = Joi.object().keys({
  salary: Joi.number().required(),
});

export default salaryCalcSchema;
