import fs from "node:fs";

const path = "src/App.tsx";
let source = fs.readFileSync(path, "utf8");
const broken = ":a)}>Editar</button>";
const fixed = ":a))}>Editar</button>";

if (source.includes(broken)) {
  source = source.replace(broken, fixed);
  fs.writeFileSync(path, source);
  console.log("PetViva build syntax repaired.");
} else {
  console.log("PetViva syntax already repaired.");
}
