import { findAllThemes, createThemeModel } from '../services/Theme.service.js'

const themes = [
    { id: 1, name: "¿Qué es la ciencia de datos?", unitId: 1, description: ''},
    { id: 2, name: "¿Qué es Python?", unitId: 1, description: ''},
    { id: 3, name: "Sintaxis, semántica y reglas de Python.", unitId: 1, description: ''},
    { id: 4, name: "Debugging en Python.", unitId: 1, description: ''},
    { id: 5, name: "Entornos virtuales y librerías de python.", unitId: 1, description: ''},
    { id: 6, name: "Desarrollo de pensamiento algorítmico mediante actividades prácticas", unitId: 1, description: ''},
    { id: 7, name: "Introducción a la librería NumPy de Python.", unitId: 1, description: ''},

    { id: 8, name: "Limpieza y estructura de los datos.", unitId: 2, description: ''},
    { id: 9, name: "Obtención de datos a partir de archivos CSV.", unitId: 2, description: ''},
    { id: 10, name: "Obtención de datos a partir de bases de datos SQL.", unitId: 2, description: ''},
    { id: 11, name: "Introducción a Pandas para ciencia de datos.", unitId: 2, description: ''},
    { id: 12, name: "Introducción a Matplotlib para gráficos estadísticos.", unitId: 2, description: ''},

    { id: 13, name: "¿Qué es “Optimizar” un algoritmo?", unitId: 3, description: ''},
    { id: 14, name: "¿Qué es la complejidad algorítmica?", unitId: 3, description: ''},
    { id: 15, name: "Algoritmos más utilizados.", unitId: 3, description: ''},
    { id: 16, name: "Introducción al análisis algorítmico.", unitId: 3, description: ''},
    { id: 17, name: "Introducción a la notación asintótica.", unitId: 3, description: ''},
    { id: 18, name: "Iteración de soluciones aplicando pensamiento algorítmico optimizado.", unitId: 3, description: ''},

    { id: 19, name: "Fundamentales del Aprendizaje Automático.", unitId: 4, description: ''},
    { id: 20, name: "Preprocesamiento de Datos para Aprendizaje Automático.", unitId: 4, description: ''},
    { id: 21, name: "Modelos Básicos de Aprendizaje Automático.", unitId: 4, description: ''},
    { id: 22, name: "Evaluación de Modelos de Aprendizaje Automático", unitId: 4, description: ''},
    { id: 23, name: "Aplicaciones Prácticas del Aprendizaje Automático", unitId: 4, description: ''},
    { id: 24, name: "Herramientas y Librerías de Aprendizaje Automático en Python", unitId: 4, description: ''},

]

const seedThemes = async () => {
    const allThemes = await findAllThemes();
    if (allThemes.length > 0) {
        return;
    }
    for (const theme of themes) {
        await createThemeModel(theme);
    }
};

export default seedThemes