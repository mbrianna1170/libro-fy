const { Book } = require("../models");

const bookData = [
  {
    book_name: "Goodnight Moon",
    author_name: "Margaret Wise Brown",
    book_url: "https://www.hoopladigital.com/title/12293865",
    category_id: "1",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_920d7619-524e-4d7f-a8e8-20242dd1a022%3Fwid%3D488%26hei%3D488%26fmt%3Dpjpeg&imgrefurl=https%3A%2F%2Fwww.target.com%2Fp%2Fgoodnight-moon-reissue-by-margaret-wise-brown-board-book%2F-%2FA-11340485&tbnid=8mAYUFX-4IheRM&vet=12ahUKEwiMi4vt1r3yAhXui60KHbKrC68QMygAegUIARCXAg..i&docid=go_-rPe6K0ih0M&w=488&h=488&q=goodnight%20moon&ved=2ahUKEwiMi4vt1r3yAhXui60KHbKrC68QMygAegUIARCXAg",
  },
  {
    book_name: "The Little Engine that Could",
    author_name: "Watty Piper",
    book_url: "https://www.hoopladigital.com/title/12193985",
    category_id: "1",
    img_url: "https://www.google.com/aclk?sa=L&ai=DChcSEwiY8Jjq_L_yAhUFMjgKHSciA2kYABAFGgJqZg&sig=AOD64_0vn3km7SKljsAP9K73AO5OpJpF5g&adurl&ctype=5&ved=2ahUKEwjG2obq_L_yAhUWZq0KHQziBc4Qvhd6BAgBEFk",
  },
  {
    book_name: "Dragonflight",
    author_name: "Anne McCaffrey",
    book_url:
      "https://www.amazon.com/Dragonflight-Dragonriders-Pern-Anne-McCaffrey/dp/0345335465",
    category_id: "2",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2527%2F6884%2Fproducts%2Fmccaffrey-dragonflight_1800x.jpg%3Fv%3D1592239499&imgrefurl=https%3A%2F%2Fgrimoakpress.com%2Fproducts%2Fdragonflight-limited-edition&tbnid=Mpk6KVSstTLoLM&vet=12ahUKEwiP9OKZ_b_yAhVQXqwKHaFAAJMQMygEegUIARDCAg..i&docid=0XhwumFCECPRoM&w=1800&h=2700&q=dragonflight%20book&ved=2ahUKEwiP9OKZ_b_yAhVQXqwKHaFAAJMQMygEegUIARDCAg",
  },
  {
    book_name: "Trail of Lightning",
    author_name: "Rebecca Roanhorse",
    book_url:
      "https://www.amazon.com/s?k=trail+of+lightning+by+rebecca+roanhorse&i=stripbooks&crid=3FRI0RLR85Z8D&sprefix=Trail+of+Light%2Cstripbooks%2C248&ref=nb_sb_ss_ts-doa-p_1_14",
    category_id: "2",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81bdCVrK-xL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FTrail-Lightning-Sixth-Rebecca-Roanhorse%2Fdp%2F1534413499&tbnid=qNM4_sBfptv3qM&vet=12ahUKEwjDiczP_b_yAhVPvKwKHRF6CVMQMygAegUIARDwAQ..i&docid=TRTQI6J2p32ZPM&w=1400&h=2113&q=trail%20of%20lightning%20book&ved=2ahUKEwjDiczP_b_yAhVPvKwKHRF6CVMQMygAegUIARDwAQ",
  },
  {
    book_name: "Treasure Island",
    author_name: "Robert Louis Stevenson",
    book_url: "https://www.hoopladigital.com/title/12638617",
    category_id: "3",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51T%2BMW-DfLS.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FTreasure-Island-Robert-Louis-Stevenson-ebook%2Fdp%2FB0727RCR4Y&tbnid=4u6RauLzaFj4LM&vet=12ahUKEwic2vSI_r_yAhUMa60KHYg4C2oQMygEegUIARDNAg..i&docid=jks83vopBr1PAM&w=339&h=500&q=treasure%20island%20book&ved=2ahUKEwic2vSI_r_yAhUMa60KHYg4C2oQMygEegUIARDNAg",
  },
  {
    book_name: "Life of Pi",
    author_name: "Yann Martel",
    book_url: "https://www.hoopladigital.com/title/13919129",
    category_id: "3",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flibrarykvadoor.files.wordpress.com%2F2016%2F10%2Flife-of-pi.jpg%3Fw%3D300&imgrefurl=https%3A%2F%2Flibrarykvadoor.wordpress.com%2Ftag%2Flife-of-pi%2F&tbnid=lsK9r785Qe3UuM&vet=12ahUKEwjJxryj_r_yAhXJfqwKHRRPClkQMyg3egUIARDJAQ..i&docid=JN5OcFZammankM&w=300&h=463&q=life%20of%20pi%20book&ved=2ahUKEwjJxryj_r_yAhXJfqwKHRRPClkQMyg3egUIARDJAQ",
  },
  {
    book_name: "And Then There Were None",
    author_name: "Agatha Christie",
    book_url: "https://www.amazon.com/Then-There-Were-None/dp/0062073486",
    category_id: "4",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fjudsgamereviews.files.wordpress.com%2F2011%2F06%2Fthentherewerenone-001.jpg&imgrefurl=https%3A%2F%2Fjudsgamereviews.wordpress.com%2Fagatha-christie-games%2Fagatha-christie-and-then-there-were-none%2F&tbnid=qKl5x-YBqWSfCM&vet=10CEcQMyiBAWoXChMIsMe-9v6_8gIVAAAAAB0AAAAAEAg..i&docid=PxwIyIHuNpOBqM&w=1440&h=2157&q=and%20then%20there%20were%20none%20book&ved=0CEcQMyiBAWoXChMIsMe-9v6_8gIVAAAAAB0AAAAAEAg",
  },
  {
    book_name: "The Big Sleep",
    author_name: "Raymond Chandler",
    book_url: "https://www.hoopladigital.com/title/12679300",
    category_id: "4",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fkbimages1-a.akamaihd.net%2Ffcdfdec0-1dc6-480e-8fa7-a1d4fb77e0aa%2F1200%2F1200%2FFalse%2Fthe-big-sleep-25.jpg&imgrefurl=https%3A%2F%2Fwww.kobo.com%2Fus%2Fen%2Febook%2Fthe-big-sleep-25&tbnid=KYpNbwpekgD9uM&vet=12ahUKEwjJ9Jrn_7_yAhULWKwKHSUWBLcQMygDegUIARDRAg..i&docid=uLTxS1-qPmApNM&w=1200&h=1600&q=the%20big%20sleep%20book&ved=2ahUKEwjJ9Jrn_7_yAhULWKwKHSUWBLcQMygDegUIARDRAg",
  },
  {
    book_name: "The Great Gatsby",
    author_name: "F. Scott Fitzgerald",
    book_url: "https://www.hoopladigital.com/title/13810718",
    category_id: "5",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftarget.scene7.com%2Fis%2Fimage%2FTarget%2FGUEST_f000133c-11ec-430a-9d79-1371169a4be4%3Fwid%3D488%26hei%3D488%26fmt%3Dpjpeg&imgrefurl=https%3A%2F%2Fwww.target.com%2Fp%2Fthe-great-gatsby-deluxe-illustrated-edition-by-f-scott-fitzgerald-hardcover%2F-%2FA-82016716&tbnid=l9VT7uPDIPQGDM&vet=12ahUKEwjQhJX5_7_yAhUNNK0KHRe-BygQMygVegUIARCXAw..i&docid=2eSlcTVhcFo4rM&w=488&h=488&q=the%20great%20gatsby%20book&ved=2ahUKEwjQhJX5_7_yAhUNNK0KHRe-BygQMygVegUIARCXAw",
  },
  {
    book_name: "To Kill a Mockingbird",
    author_name: "Harper Lee",
    book_url: "https://www.hoopladigital.com/title/13326642",
    category_id: "5",
    img_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2982.pcdn.co%2Fwp-content%2Fuploads%2F2015%2F07%2FTo-Kill-a-Mockingbird-1st-ed.gif&imgrefurl=https%3A%2F%2Fbookriot.com%2Fmany-book-covers-kill-mockingbird%2F&tbnid=yMxf0zGS4slFRM&vet=12ahUKEwjotZWXgMDyAhUIyawKHfGdDbYQMygMegUIARDnAg..i&docid=_EBeGqybRbhKeM&w=200&h=296&q=to%20kill%20a%20mockingbird%20book%20cover&ved=2ahUKEwjotZWXgMDyAhUIyawKHfGdDbYQMygMegUIARDnAg",
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
