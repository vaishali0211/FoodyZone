"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(
  "/images",
  express_1.default.static(path_1.default.join(__dirname, "../public/images"))
);
app.get("/", (req, res) => {
  console.log(path_1.default.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Hard-boiled eggs provide only 77 calories, 5 grams of fat and a very small amount of carbs. They're also a very good source of lean protein, at about 6 grams per egg.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Ramen is a Japanese noodle dish of Chinese origin.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "grilled chicken offers better health, nutrition, and taste if cooked the right way compared to fried chicken.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Cakes are distinguished from breads in that they are usually sweet.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. ",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter, and then cooked on a hot surface such as a griddle or frying pan.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map
