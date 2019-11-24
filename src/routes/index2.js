const express = require('express');
const router = express.Router();

router.get('/descripcerveza/agregarcerveza', (req , res) => {
    res.render('descripcerveza/agregarcerveza.html');
});

router.get('/descripcerveza/modificarcerveza', (req , res) => {
    res.render('descripcerveza/modificarcerveza.html');
});

router.get('/descripcerveza/witbier', (req , res) => {
    res.render('descripcerveza/witbier.html');
});

router.get('/descripcerveza/ale', (req , res) => {
    res.render('descripcerveza/ale.html');
});

router.get('/descripcerveza/weizen-weissbier', (req , res) => {
    res.render('descripcerveza/weizen-weissbier.html');
});

router.get('/descripcerveza/vegetable', (req , res) => {
    res.render('descripcerveza/vegetable.html');
});

router.get('/descripcerveza/trigo', (req , res) => {
    res.render('descripcerveza/trigo.html');
});

router.get('/descripcerveza/sweet-stout', (req , res) => {
    res.render('descripcerveza/sweet-stout.html');
});

router.get('/descripcerveza/stout', (req , res) => {
    res.render('descripcerveza/stout.html');
});

router.get('/descripcerveza/spice', (req , res) => {
    res.render('descripcerveza/spice.html');
});

router.get('/descripcerveza/schwarzbier', (req , res) => {
    res.render('descripcerveza/schwarzbier.html');
});

router.get('/descripcerveza/red-ale', (req , res) => {
    res.render('descripcerveza/red-ale.html');
});

router.get('/descripcerveza/porter', (req , res) => {
    res.render('descripcerveza/porter.html');
});

router.get('/descripcerveza/pilsner', (req , res) => {
    res.render('descripcerveza/pilsner.html');
});

router.get('/descripcerveza/pale-ale', (req , res) => {
    res.render('descripcerveza/pale-ale.html');
});

router.get('/descripcerveza/oktoberfest-marzen', (req , res) => {
    res.render('descripcerveza/oktoberfest-marzen.html');
});

router.get('/descripcerveza/munich-helles', (req , res) => {
    res.render('descripcerveza/munich-helles.html');
});

router.get('/descripcerveza/lager', (req , res) => {
    res.render('descripcerveza/lager.html');
});

router.get('/descripcerveza/irish-red-ale', (req , res) => {
    res.render('descripcerveza/irish-red-ale.html');
});

router.get('/descripcerveza/india-pale-ale', (req , res) => {
    res.render('descripcerveza/india-pale-ale.html');
});

router.get('/descripcerveza/imperial-stout', (req , res) => {
    res.render('descripcerveza/imperial-stout.html');
});

router.get('/descripcerveza/imperial-ipa', (req , res) => {
    res.render('descripcerveza/imperial-ipa.html');
});

router.get('/descripcerveza/herb', (req , res) => {
    res.render('descripcerveza/herb.html');
});

router.get('/descripcerveza/fruit-lambic', (req , res) => {
    res.render('descripcerveza/fruit-lambic.html');
});

router.get('/descripcerveza/extra-strong-bitter', (req , res) => {
    res.render('descripcerveza/extra-strong-bitter.html');
});

router.get('/descripcerveza/english-pale-ale', (req , res) => {
    res.render('descripcerveza/english-pale-ale.html');
});

router.get('/descripcerveza/dusseldorf-altbier', (req , res) => {
    res.render('descripcerveza/dusseldorf-altbier.html');
});

router.get('/descripcerveza/dry-stout', (req , res) => {
    res.render('descripcerveza/dry-stout.html');
});

router.get('/descripcerveza/dark-ale', (req , res) => {
    res.render('descripcerveza/dark-ale.html');
});

router.get('/descripcerveza/bohemian-pilsener', (req , res) => {
    res.render('descripcerveza/bohemian-pilsener.html');
});

router.get('/descripcerveza/blonde-ale', (req , res) => {
    res.render('descripcerveza/blonde-ale.html');
});

router.get('/descripcerveza/belgian', (req , res) => {
    res.render('descripcerveza/belgian.html');
});

router.get('/descripcerveza/belgian-golden-ale', (req , res) => {
    res.render('descripcerveza/belgian-golden-ale.html');
});

router.get('/descripcerveza/belgian-dubbel', (req , res) => {
    res.render('descripcerveza/belgian-dubbel.html');
});

router.get('/descripcerveza/american-pale-ale', (req , res) => {
    res.render('descripcerveza/american-pale-ale.html');
});

router.get('/descripcerveza/american-ipa', (req , res) => {
    res.render('descripcerveza/american-ipa.html');
});

router.get('/descripcerveza/american-amber-ale', (req , res) => {
    res.render('descripcerveza/american-amber-ale.html');
});



module.exports = router;