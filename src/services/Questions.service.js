import QuestionModel from "../models/Questions.model";

export const getAllQuestions = async () => {
    const questions = await QuestionModel.findAll();
    return questions;
}

export const getOneQuestion = async (id) => {
    const question = await QuestionModel.findByPk(id);
    return question;
}