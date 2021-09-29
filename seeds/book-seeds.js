const sequelize = require("../config/connection");
// Add other required models to this existing const
const { Book } = require("../models");

// Book-currently reading-seeds
const bookdata = [
  {
    title: "Barrows Inc",
    author: "Khalil O'Hearn",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 3,
  },
  {
    title: "Runolfsdottir-Kulas",
    author: "Bel Meeson",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 3,
  },
  {
    title: "Gleason-Weber",
    author: "Niels Lasslett",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 1,
  },
  {
    title: "Altenwerth, Beahan and Kilback",
    author: "Tessie Schwaiger",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 1,
  },
  {
    title: "Mertz-Balistreri",
    author: "Johann Bowdon",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 1,
  },
  {
    title: "Hirthe, Bins and Farrell",
    author: "Cornall Buzek",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 1,
  },
  {
    title: "Jones LLC",
    author: "Hinda Dekeyser",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 2,
  },
  {
    title: "Feil-Daniel",
    author: "Sara-ann Sutlieff",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 2,
  },
  {
    title: "Swaniawski-Schmidt",
    author: "Thurston Bearblock",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 1,
  },
  {
    title: "Boyle Group",
    author: "Loria Pert",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio eveniet assumenda ratione asperiores natus porro similique dignissimos. Aliquid, voluptatem. Accusantium praesentium minus, ut saepe quisquam voluptates doloribus placeat ipsa!",
    user_id: 2,
  },
];

// Need User.bulkcreate method
const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;
