
module.exports = {
    'login com sucesso' : function(browser) {
        var userInfo = '.user .info span'
        browser.url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'rogerioop@zumbi.com')
            .setValue('input[name=password]', 'Ssenha123')
            .click('.login-button')
            .waitForElementVisible(userInfo, 3000)
            .assert.containsText(userInfo, 'Rogerio Paiva')
            .end();
    }
}