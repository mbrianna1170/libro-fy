const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      book_url: 'https://www.amazon.com/dp/1524798657/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=H7TGMV1CTGSK17F1RHTC&pf_rd_t=101&pf_rd_p=435b6d4d-4bcd-4953-83c6-72f5c239ab8b&pf_rd_i=13270229011',
      book_name: 'Malibu Rising',
      author_name: 'Taylor Jenkins Reid',
    //   comments: [{}, {}],
    //   user: {
    //     username: 'test_user'
    //   }
    });
  });

module.exports = router;

