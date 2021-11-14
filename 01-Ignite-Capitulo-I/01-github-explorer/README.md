# Ignite-ChapterI 

Inciando a minha jornada no ignite, tenho muito orgulho de mim mesmo por isso, mas não seria justo e até egoismo da minha parte , não citar pessoas
que estão me ajudando nessa jornada, Primeiramente a minha esposa que nunca deixou eu desistir, Ao meu filho, que tem e vem sendo muito compreensivo comigo. E claro aos meus amigos
que acreditaram no meu potencial. 


## Resumo das primeiras aulas. 
### Conceitos do React

- Component

    Componentes , são como tags, formas de encapsular dentro do elemento. São formas de dividir a aplicação.

    Tudo é componente. 

    Componente = Função , que devolve um HTML. 

    Um Componente por arquivo.

- Propriedade

    o conceito de propriedade , consiste em enviar uma propriedade do componente pai para o filho (parent)

- Estado

    Varieaveis que o react monitora, e que toda vez que tem alteração ele renderiza novamente. 

- Imutabilidade

    o conceito de imutabilidade ele prevê, que uma variavel, nunca vai ter o valor alterado, e sim receber um novo valor.

    ```jsx
    usuarios = [ 'users...' ]
    ```

    ```jsx
    usuarios.puch('fulano')
    ```

    Na imutabilidade 

    ```jsx
    novoUsuarios = [...usuarios, 'fulano']
    ```

Fast Refresh no WebPack

- UseEffect

    serve para disparar uma função assim que algo acontece na aplicação

    useEffect  dois parms, a primeira a função que eu quero executar, e a segunda 

    a dependencia. 

    Dependencia vazia ele executa uma unica vez. 

    ```jsx
    useEffect(() => {}, [repositories])
    ```

    ⚠️ Cuidado para nao deixar sem o segundo parametro. 

- TypeScript (Tipagem ou Linguagem)

    Vantagens: Escalavel e trabalhos em grupos.

    ```tsx
    type User = {
    name: string
    email: string
    address: {
    	state?: string
    	city: string
     }
    }

    function showWelcomeMessage(user) {
     return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.city}
    and your state is ${user.state}`
    };

    showWelcomeMessage({
    name: 'fulano',
    email: 'fulano@fulano.com',
    address: {
    	state: 'SC',
    	city: 'imbituba',
    	}
    })
    ```
