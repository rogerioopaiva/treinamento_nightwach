module.exports = {

    'senha incorreta': (browser) => {

        let login = browser.page.login()
        login
            .with('rogerioop@zumbi.com', 'admin123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    },

    'nao cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('blabla@zumbi.com', 'admin123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    },
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', 'admin123')
            .expectAlertInfo('Opps. Cadê o email?')
    },
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('rogerioop@zumbi.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    },
}