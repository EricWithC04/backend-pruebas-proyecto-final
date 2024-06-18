import seedUnits from "./unit.seed.js";

const executeAllSeeds = async () => {
    await seedUnits();
};

export default executeAllSeeds