import { findAllExercises, createExerciseModel } from "../services/Exercise.service.js";

const exercises = [
    {
        name: "1",
        description: "Este es un ejercicio de prueba de Python",
        code: "print('Hello World!')",
        themeId: 1,
    },
    {
        name: "2",
        description: "Este es un ejercicio de prueba de Python",
        code: "print('Hello World!')",
        themeId: 1,
    },
    {
        name: "3",
        description: "Este es un ejercicio de prueba de Python",
        code: "print('Hello World!')",
        themeId: 1,
    },
    {
        name: "4",
        description: "Este es un ejercicio de prueba de Python",
        code: "print('Hello World!')",
        themeId: 1,
    },
    {
        name: "5",
        description: "Este es un ejercicio de prueba de Python",
        code: "print('Hello World!')",
        themeId: 1,
    },
]

const seedExercises = async () => {
    const allExercises = await findAllExercises();
    if (allExercises.length > 0) {
        return;
    }
    for (const exercise of exercises) {
        await createExerciseModel(exercise);
    }
}

export default seedExercises