import QuestionModel from "../models/Questions.model";

export const findAllQuestions = async () => {
    const questions = await QuestionModel.findAll();
    return questions;
}

export const findOneQuestion = async (id) => {
    const question = await QuestionModel.findByPk(id);
    return question;
}