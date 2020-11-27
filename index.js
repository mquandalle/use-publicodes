import Engine, { formatValue } from "publicodes";

const rules = `
prix . carottes: 2€/kg
prix . champignons: 5€/kg
prix . avocat: 2€/avocat

dépenses primeur:
  formule:
    somme:
      - prix . carottes * 1.5 kg
      - prix . champignons * 500g
      - prix . avocat * 3 avocat
`;

const engine = new Engine(rules);
console.log(formatValue(engine.evaluate("dépenses primeur")));
