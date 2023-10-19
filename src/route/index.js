// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
 
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/main', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('main', {
    style: 'main',
    page:{
      title: 'First page',
    },
    header:[
      {
        text: "GreenU",
        url: "https://example.com/home",
      },
      {
        text: "News",
        url: "https://example.com/home",
      },
      {
        text: "Financing",
        url: "https://example.com/home",
      },
      {
        text: "Solutions",
        url: "https://example.com/home",
      },
      {
        text: "About",
        url: "https://example.com/home",
      }
      
      
    ],
    hero:{
      text:'Application',
      title: 'Do you have an account?',
      card:[
        {
          icon: "/svg/play.svg",
          text: "Skip this stop",
        },
        {
          icon: "/svg/profadd.svg",
          text: "Create account",
        },
        {
          icon: "/svg/log.svg",
          text: "Log in",
        },
      ]
    },
    footer:[
      {
        title: "GreenU",
        links: [
          {
            text: "Knowledge base",
            url: "https://example.com/cool-stuff"
          },
          {
            text: "Case studies",
            url: "https://example.com/random-feature"
          },
          {
            text: "Interactive tools",
            url: "https://example.com/team-feature"
          },
          {
            text: "Training Platform",
            url: "https://example.com/stuff-for-developers"
          },
          {
            text: "Events",
            url: "https://example.com/stuff-for-developers"
          },
          {
            text: "Documents",
            url: "https://example.com/stuff-for-developers"
          },
        ]
      },
      {
        title: "Solutions",
        links: [
          {
            text: "Categories",
            url: "https://example.com/resource-name"
          },
          {
            text: "Vendors",
            url: "https://example.com/another-resource"
          },
        ]
      },
      {
        title: "Financing",
      },
      {
        title: "News",
      },
      {
        title: "About",
      },
      {
        title: "Contacts",
        links: [
          {
            text: "e-mail",
            url: "https://example.com/resource-name"
          },
          {
            text: "callback",
            url: "https://example.com/another-resource"
          },
        ]
      },
    ]
  })
  //                  ↑↑ сюди вводимо JSON дані
})
router.get('/form', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('form', {
    style: 'form',
    page:{
      title: 'Contact form',
    },
    header:[
      {
        text: "GreenU",
        url: "https://example.com/home",
      },
      {
        text: "News",
        url: "https://example.com/home",
      },
      {
        text: "Financing",
        url: "https://example.com/home",
      },
      {
        text: "Solutions",
        url: "https://example.com/home",
      },
      {
        text: "About",
        url: "https://example.com/home",
      }
      
      
    ],
    form:{
      title: 'Contact',
    },
    footer:[
      {
        title: "GreenU",
        links: [
          {
            text: "Knowledge base",
            url: "https://example.com/cool-stuff"
          },
          {
            text: "Case studies",
            url: "https://example.com/random-feature"
          },
          {
            text: "Interactive tools",
            url: "https://example.com/team-feature"
          },
          {
            text: "Training Platform",
            url: "https://example.com/stuff-for-developers"
          },
          {
            text: "Events",
            url: "https://example.com/stuff-for-developers"
          },
          {
            text: "Documents",
            url: "https://example.com/stuff-for-developers"
          },
        ]
      },
      {
        title: "Solutions",
        links: [
          {
            text: "Categories",
            url: "https://example.com/resource-name"
          },
          {
            text: "Vendors",
            url: "https://example.com/another-resource"
          },
        ]
      },
      {
        title: "Financing",
      },
      {
        title: "News",
      },
      {
        title: "About",
      },
      {
        title: "Contacts",
        links: [
          {
            text: "e-mail",
            url: "https://example.com/resource-name"
          },
          {
            text: "callback",
            url: "https://example.com/another-resource"
          },
        ]
      },
    ]
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
