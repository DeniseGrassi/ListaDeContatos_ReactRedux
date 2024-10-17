module.exports = {
    parser: '@typescript-eslint/parser', // Define o parser para TypeScript
    parserOptions: {
        ecmaVersion: 2020,					 // Usa a versão do ECMAScript
        sourceType: 'module', 				// Permite o uso de import/export
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'], 	 // Lista os plugins usados
    extends: [
        'eslint:recommended', 			// Inclui as regras recomendadas do ESLint
        'plugin:react/recommended',			 // Inclui as regras recomendadas para React
        'plugin:@typescript-eslint/recommended', 			// Inclui as regras recomendadas para TypeScript
    ],
    rules: {
        'react/react-in-jsx-scope': 'off', 				// Desativa a regra que exige 'React' no escopo para JSX
        '@typescript-eslint/explicit-module-boundary-types': 'off',	 // Desativa a regra para tipos explícitos em funções
"react/props-types": "off",
    // Regras do plugin react-hooks
    'react-hooks/rules-of-hooks': 'error',			 // Verifica as regras de chamada de hooks
    'react-hooks/exhaustive-deps': 'warn',			 // Verifica as dependências dos hooks
    },
    env: {	
        browser: true,	 // Configura o ambiente do navegador
        jest: true, 		// Configura o ambiente para Jest (testes)
node: true,

    },
    settings: {
        react: {
            version: 'detect', // Detecta automaticamente a versão do React
        },
    },
};
