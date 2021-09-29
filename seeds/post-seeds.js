const sequelize = require("../config/connection");
// Add other required models to this existing const
const { Post } = require("../models");

// Posts seeds
const postdata = [
  {
    book_name: "Ugly",
    book_author: "Hank Oakeby",
    price: "14.13",
    content:
      "orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
    user_id: 3,
  },
  {
    book_name: "Father Goose",
    book_author: "Petronella Giffkins",
    price: "4.57",
    content: "est donec odio justo sollicitudin ut suscipit a feugiat et",
    user_id: 2,
  },
  {
    book_name: "Two-Lane Blacktop",
    book_author: "Codee Munro",
    price: "13.57",
    content:
      "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
    user_id: 3,
  },
  {
    book_name: "Pirates of the Caribbean: Dead Man's Chest",
    book_author: "Benedicta Studders",
    price: "5.95",
    content:
      "ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",
    user_id: 3,
  },
  {
    book_name: "Saint John of Las Vegas",
    book_author: "Rey Paine",
    price: "13.91",
    content:
      "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra",
    user_id: 2,
  },
  {
    book_name: "Paper Heart",
    book_author: "Bernetta Pritchard",
    price: "1.78",
    content:
      "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
    user_id: 1,
  },
  {
    book_name: "Violent Cop (Sono otoko, kyôbô ni tsuki)",
    book_author: "Darcy Maystone",
    price: "12.54",
    content:
      "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in",
    user_id: 2,
  },
  {
    book_name: "Deadtime Stories",
    book_author: "Tucker Bulfoot",
    price: "3.48",
    content:
      "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
    user_id: 2,
  },
  {
    book_name: "Red Shoes, The (Bunhongsin)",
    book_author: "Ludwig Nolder",
    price: "5.57",
    content:
      "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
    user_id: 3,
  },
  {
    book_name: "Dirty Dozen, The: The Fatal Mission",
    book_author: "Darcy O'Looney",
    price: "13.65",
    content:
      "augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
    user_id: 3,
  },
  {
    book_name: "Pat Garrett and Billy the Kid",
    book_author: "Ky Ondrus",
    price: "13.33",
    content:
      "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum",
    user_id: 3,
  },
  {
    book_name: "Women Without Men (Zanan-e bedun-e mardan)",
    book_author: "Corliss Orae",
    price: "5.13",
    content:
      "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
    user_id: 1,
  },
  {
    book_name: "Quick Change",
    book_author: "Sheena Pepperill",
    price: "14.03",
    content:
      "sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus",
    user_id: 1,
  },
  {
    book_name: "Overboard",
    book_author: "Reinaldo Castelyn",
    price: "12.61",
    content:
      "donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
    user_id: 1,
  },
  {
    book_name: "Fados",
    book_author: "Oswell Arntzen",
    price: "1.52",
    content:
      "nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget",
    user_id: 3,
  },
  {
    book_name: "Tokyo Chorus (Tôkyô no kôrasu)",
    book_author: "Sheelah Millen",
    price: "13.47",
    content:
      "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    user_id: 3,
  },
  {
    book_name: "Still Life (Sanxia haoren)",
    book_author: "Addie Le Marchand",
    price: "6.78",
    content:
      "est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc",
    user_id: 3,
  },
  {
    book_name: "White Hell of Pitz Palu, The (Die weiße Hölle vom Piz Palü) ",
    book_author: "Becki Hymor",
    price: "3.56",
    content:
      "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
    user_id: 1,
  },
  {
    book_name: "Man Without a Past, The (Mies vailla menneisyyttä)",
    book_author: "Donica Dickons",
    price: "2.17",
    content:
      "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
    user_id: 3,
  },
  {
    book_name: "I Want to Look Like That Guy",
    book_author: "Corie Warrington",
    price: "5.86",
    content:
      "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
    user_id: 1,
  },
];

// Need User.bulkcreate method
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
