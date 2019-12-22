
// module.exports = {
//     'dado que eu acesse a pagina de login': (browser) => {
//         browser
//         .url('http://zombie-web:5000/login')
//         .waitForElementVisible('.card-login', 3000)
//     },
//     'quando eu faço login com sucesso': (browser) => {
//         browser
//         .setValue('input[name=email]', 'rogerioop@zumbi.com')
//         .setValue('input[name=password]', 'Ssenha123')
//         .click('.login-button')
//     },
//     'então devo ver o seu nome na área logada': (browser) => {
//         let userInfo = '.user .info span'
//         browser
//         .waitForElementVisible(userInfo, 3000)
//         .assert.containsText(userInfo, 'Rogerio Paiva')
//         .end();
//     }
// }

module.exports = {
    'login com sucesso': (browser) => {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('rogerioop@zumbi.com', 'Ssenha123')
        sidebar.expectLoggedUser('Rogerio Paiva')
    }
}