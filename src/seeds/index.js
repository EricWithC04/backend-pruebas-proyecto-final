import seedUnits from "./unit.seed.js";
import seedThemes from "./theme.seed.js";

const executeAllSeeds = async () => {
    await seedUnits();
    await seedThemes();
};

export default executeAllSeeds