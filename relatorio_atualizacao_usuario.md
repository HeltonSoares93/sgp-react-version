# Entendendo a Atualização de Usuários no React (O Método PUT)

Olá! Vamos analisar juntos como implementamos a edição de um usuário em nosso sistema. Pense nesta explicação como uma aula onde vamos desconstruir o código passo a passo para entender exatamente o que acontece quando você clica em "Editar Usuário".

---

## 1. O Ponto de Partida (O Problema)

Imagine que você tem uma tabela cheia de usuários na tela ([Usuarios.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Usuarios.jsx)). O seu objetivo é:
1. Clicar no botão de edição de uma linha específica.
2. Abrir uma janelinha (Modal) já preenchida com os dados daquele usuário.
3. Modificar algumas informações.
4. Salvar essas modificações no banco de dados (usando o método HTTP `PUT`).
5. Ver a tabela ser atualizada magicamente, sem precisar recarregar a página.

Parece complexo, mas no React resolvemos isso fazendo com que os componentes "conversem" entre si.

---

## 2. Capturando o Usuário (O Arquivo [Usuarios.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Usuarios.jsx))

Tudo começa na nossa tabela. Quando iteramos sobre a lista de usuários para desenhar as linhas, criamos um botão de edição. Nós precisamos dizer ao React: *"Ei, quando alguém clicar aqui, guarde as informações DESSA linha"*.

Para isso, consertamos a função que abre o Modal:

```javascript
// O "usuario" que chega aqui é exatamente o objeto da linha que foi clicada!
const abrirModalAtualizarUsuario = (usuario) => {
  setDadosUsuarios(usuario); // Guardamos esse usuário na "memória" do componente (estado)
  setShow(true);             // Mandamos o Modal aparecer na tela
};
```

**Por que isso é importante?** Porque agora o componente pai ([Usuarios.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Usuarios.jsx)) sabe exatamente quem estamos editando e pode entregar essa ficha cadastral para o componente filho (o Modal). Isso é feito injetando os dados através das chamadas **props** (propriedades):

```javascript
<CadastroUsuario dadosUsuario={dadosUsuarios} />
```

---

## 3. O Componente Filho Sabe o que Fazer ([CadastroUsuario.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroUsuario.jsx))

Aqui entra um truque muito elegante do React: **reaproveitamento**. 
A mesma tela que serve para criar um usuário novo também serve para editar um existente. Mas como o Modal sabe se deve criar (`POST`) ou atualizar (`PUT`)? 

A resposta é o **ID**. Um usuário novo ainda não tem ID. Um usuário que estamos editando já existe, logo, ele tem um ID.

No momento em que o Modal abre, ele executa um "efeito colateral" (`useEffect`) para olhar a ficha (prop `dadosUsuario`) que o Pai mandou:
- Se tiver dados com ID, ele preenche os campos do formulário com esses dados.
- Se a ficha estiver vazia, ele limpa o formulário para um novo cadastro.

Na hora que você clica em **Salvar**, a lógica decide o caminho automaticamente:

```javascript
const id = dadosUsuario?.id;                      // Tentamos pegar o ID
const metodo = id ? 'PUT' : 'POST';               // Se tem ID, é PUT (Editar). Se não, é POST (Criar).
const url = id 
  ? `http://localhost:8080/usuarios/${id}`        // URL para editar um usuário específico  
  : 'http://localhost:8080/usuarios';             // URL padrão para criar
```

Dessa forma, a nossa requisição vai bater na porta certa do backend.

---

## 4. O Toque de Mágica: Atualizando a Tela

Você salvou a edição. O backend confirmou o sucesso. Mas e a nossa tabela na tela? Ela ainda está exibindo o dado antigo! Como forçamos o React a buscar os dados novos do banco de dados?

Antes, a nossa busca (GET) acontecia em um bloco selado que só rondava quando abríamos a página.
**A Solução:** Extraímos essa busca para uma função solta chamada [buscarUsuarios()](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Usuarios.jsx#68-85).

Ao transformar isso numa função livre no Componente Pai ([Usuarios.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Usuarios.jsx)), podemos "emprestar" essa função para o Modal, enviando-a como propriedade:

```javascript
// O Pai mandando a função para o Filho
<CadastroUsuario buscarUsuarios={buscarUsuarios} />
```

Agora, o nosso Modal de cadastro e edição tem um "controle remoto" que pode forçar a tabela a se atualizar. Dentro da função [salvar()](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroUsuario.jsx#45-77), assim que o sucesso é detectado, apertamos esse botão:

```javascript
const dadosSalvos = await resposta.json();
alert(`${dadosSalvos.nome} salvo com sucesso.`);
handleClose(); // Esconde o modal

// Se a função foi emprestada com sucesso, execute-a!
if (buscarUsuarios) {
  buscarUsuarios(); // <-- Aqui a tela pisca e traz os dados atualizados do backend!
}
```

---

## Conclusão da Aula

Para que tudo funcionasse em harmonia, você:
1. Ensino o **Pai** a capturar os dados exatos do usuário clicado.
2. Modificou o **Filho** inteligente que sabe distinguir entre Cadastrar e Atualizar com base na presença do ID.
3. Criou uma ponte para que o Filho possa pedir ao Pai: *"Amigo, acabei de fazer uma modificação, por favor atualize os seus dados buscando no servidor novamente!"*.

E é assim que construímos uma interface reativa moderna! Qualquer dúvida sobre alguma dessas partes, é só perguntar.
