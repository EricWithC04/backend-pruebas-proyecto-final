import seedUnits from "./unit.seed.js";
import seedThemes from "./theme.seed.js";
import seedExercises from "./exercise.seed.js";

const executeAllSeeds = async () => {
    await seedUnits();
    await seedThemes();
    await seedExercises();
};

export default executeAllSeeds