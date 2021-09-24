const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "mmegroff0",
    email: "mhagston0@squidoo.com",
    zip_code: "49035",
    password: "hg7OUq",
  },
  {
    username: "lchinnery1",
    email: "ehounihan1@weebly.com",
    zip_code: "23155",
    password: "cRoXeXY",
  },
  {
    username: "jhelin2",
    email: "aiacoboni2@pbs.org",
    zip_code: "51655",
    password: "gzitOkI",
  },
  {
    username: "bsatterley3",
    email: "epreist3@sogou.com",
    zip_code: "56062",
    password: "2RKdVNw",
  },
  {
    username: "hlozano4",
    email: "oclues4@yolasite.com",
    zip_code: "37823",
    password: "g7wh69jQ1I",
  },
  {
    username: "dbucklan5",
    email: "sfelder5@acquirethisname.com",
    zip_code: "63148",
    password: "3IpSy380BjvQ",
  },
  {
    username: "pingley6",
    email: "kgimbrett6@go.com",
    zip_code: "76237",
    password: "Jiz31SH",
  },
  {
    username: "lskipworth7",
    email: "svowden7@istockphoto.com",
    zip_code: "57520",
    password: "zC5pPRK",
  },
  {
    username: "mheinrich8",
    email: "espadaro8@zdnet.com",
    zip_code: "58177",
    password: "JAtayQJPE26F",
  },
  {
    username: "rdanko9",
    email: "sspurway9@skype.com",
    zip_code: "76439",
    password: "NxtGlNRUnE",
  },
  {
    username: "dokenfold0",
    email: "mgrise0@addtoany.com",
    zip_code: "52959",
    password: "nqjQllyUz",
  },
  {
    username: "mbone1",
    email: "aaustin1@spiegel.de",
    zip_code: "21695",
    password: "3cguoh7",
  },
  {
    username: "dagnolo2",
    email: "dtitley2@wiley.com",
    zip_code: "24338",
    password: "64XGpJAQcTiA",
  },
  {
    username: "byakovliv3",
    email: "phessay3@arizona.edu",
    zip_code: "68400",
    password: "fESIq59sGv",
  },
  {
    username: "tlochead4",
    email: "jroyl4@cbc.ca",
    zip_code: "55289",
    password: "KbMFLiI7",
  },
  {
    username: "cwaszkiewicz5",
    email: "fdownes5@ning.com",
    zip_code: "63941",
    password: "MkoNqcZIpt",
  },
  {
    username: "ndawidman6",
    email: "bhirsthouse6@sourceforge.net",
    zip_code: "49643",
    password: "Pbf0rCNGWL4v",
  },
  {
    username: "ddesremedios7",
    email: "lbrugden7@deviantart.com",
    zip_code: "51645",
    password: "UnknpiiHIW",
  },
  {
    username: "tmarchelli8",
    email: "ocrock8@google.com.au",
    zip_code: "63629",
    password: "686b9SGJxz",
  },
  {
    username: "mraspin9",
    email: "fantham9@edublogs.org",
    zip_code: "64525",
    password: "nN7G6bwHo1G",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
