app.config(['$translateProvider', function($translateProvider) {

    $translateProvider.translations('pt_BR', {

        'MENU.HOME': 'Home',
    	'MENU.USERS': 'Usuários',
    	'MENU.USER.CREATE': 'Cadastrar',
        'MENU.USER.VIEW': 'Visualizar',
    	'MENU.CREATE': 'Criar',

        'TITLE.USER': 'Usuário',
        'TITLE.SYSTEMS': 'Sistemas',
    	'TITLE.USER.CREATE': 'Usuário - Cadastrar',
        'TITLE.USER.UPDATE': 'Usuário - Alterar',
        'TITLE.USER.SYSTEM.CREATE': 'Usuário - Cadastrar Sistema',

    	'NAV.CREATE': 'Cadastro',
    	'NAV.SYSTEMS': 'Sistemas',

        'LIST.PROVIDER.LOCAL': 'Local',
        'LIST.PROVIDER.PRODUCTION': 'Produção',

    	'LABEL.GENDER': 'Sexo',
    	'LABEL.NAME': 'Nome',
        'LABEL.LASTNAME': 'Sobrenome',
        'LABEL.USERNAME': 'Username',
    	'LABEL.EMAIL': 'Email',
    	'LABEL.PASSWORD': 'Senha',
        'LABEL.DESCRIPTION': 'Descrição',
        'LABEL.ROLE': 'Role',
        'LABEL.PERIOD': 'Período',
        'LABEL.DE': 'De',
        'LABEL.ATE': 'Até',
        'LABEL.DATE.BEGIN': 'Date Inicio',
        'LABEL.DATE.END': 'Date Fim',
        'LABEL.ACOES': 'Ações',
        'LABEL.VIEW': 'Visualizar',
        'LABEL.SYSTEMS': 'Sistemas',
        'LABEL.EDIT': 'Editar',
        'LABEL.ADD': 'Incluir',
        'LABEL.REMOVE': 'Excluir',

        'BUTTON.ADD': 'Adicionar',
        'BUTTON.ADD.SYSTEM': 'Adicionar Sistema',
        'BUTTON.SAVE': 'Salvar',
        'BUTTON.EDIT': 'Editar',
        'BUTTON.CANCEL': 'Cancelar',
        'BUTTON.REMOVE.IMAGE': 'Remover Imagem',

        'MSG.EXISTS.INCORRET.DATA': 'Verfique os dados preenchidos.',
    	'MSG.ITEM.CHOOSE.ONE': 'Escolha um item da lista.',
        'MSG.ITEM.CHOOSE.SYSTEM': 'Escolha um sistema para cadastrar',
    	'MSG.USER.NAME': 'Digite o nome do usuário.',
        'MSG.USER.LASTNAME': 'Digite o sobrenome do usuário.',
        'MSG.USER.USERNAME': 'Digite o username do usuário.',
    	'MSG.USER.EMAIL': 'Digite o email do usuário.',
    	'MSG.USER.PASSWORD': 'Digite a senha do usuário.',
        'MSG.USER.WITHOUT.SYSTEM': 'Não possui sistemas cadastrados!',
    	'MSG.VALID.EMAIL': 'Digite um email válido.',
        'MSG.USER.SEARCH.ERROR': 'Problemas ao pesquisar os usuários!',
        'MSG.USER.CREATE.SUCCESS': 'Usuário cadastrado com sucesso!',
        'MSG.USER.CREATE.ERROR': 'Problemas ao cadastrar o usuário!',
        'MSG.USER.UPDATE.SUCCESS': 'Usuário alterado com sucesso!',
        'MSG.USER.UPDATE.ERROR': 'Problemas ao alterar o usuário!',
        'MSG.USER.REMOVE.SUCCESS': 'Usuário removido com sucesso!',
        'MSG.USER.REMOVE.ERROR': 'Problemas ao remover o usuário!',
        'MSG.IMAGE.REMOVE.SUCCESS': 'Imagem removida com sucesso!',
        'MSG.IMAGE.REMOVE.ERROR': 'Problemas ao remover a imagem!',
        'MSG.SYSTEM.UPDATE.SUCCESS': 'Sistema do usuário alterado com sucesso!',
        'MSG.SYSTEM.UPDATE.ERROR': 'Problemas ao alterar o sistema do usuário!',
        'MSG.DRAG_DROP.NOT_SUPORTTED': 'Arquivo Drag/Drop não suportado neste navegador!'

    });

	$translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('pt_BR');
}]);
