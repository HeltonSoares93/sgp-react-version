# Fluxo de Atualização (Tarefas) e Refatoração Pessoal

Este relatório resume os as alterações feitas nos arquivos de Tarefas e te guiará num passo-a-passo detalhado para aplicar a mesmíssima lógica para atualizar Projetos de forma solo!

## O Que Mudou em Tarefas e Erros Corrigidos?
Nas tarefas, a requisição de busca era disparada num "beco sem saída" (direto no seu construtor de ciclo de vida). E na tela de Cadastro as variáveis passadas via props não conversavam corretamente entre as partes, impedindo que a atualização acontecesse.

No seu código incluí as correções junto com os comentários:
- Em [Tarefas.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Tarefas.jsx), criei a função independente `buscarTarefas` e mandamos para os *props* do Modal.
- Em [Tarefas.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Tarefas.jsx), alterei o repasse de prop para coincidir com a variável real (`dadosTarefa` ao invés de `dadosTarefas`).
- Em [CadastroTarefa.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroTarefa.jsx), os IDs das chaves extrangeiras de `usuario` e `projeto` são salvos corretamente a partir do objeto que vem do banco.
- Em [CadastroTarefa.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroTarefa.jsx), [salvar()](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroUsuario.jsx#45-77) agora faz o intercâmbio entre `POST` e `PUT`.

---

## Passo a Passo para [Projetos.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Projetos.jsx) e [CadastroProjeto.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroProjeto.jsx)

Você pode utilizar essas exatas mesmas táticas para aplicar esse conhecimento em Projetos. Eis os 6 passos na ordem exata de refatoração para garantir que não vai ser surpreendido:

### Passo 1: No arquivo [Projetos.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Projetos.jsx), criar o "Carregador"
Localize o `useEffect` que executa o "fetch" do banco em `/projetos`. Imediatamente antes dele, crie uma função englobando-o:
```javascript
const buscarProjetos = () => {
    fetch('http://localhost:8080/projetos')
    // ... todo o bloco then e catch continuam inalterados
}
```
Depois modifique seu useEffect original apenas para focar o `buscarProjetos()` ao montar o componente:
```javascript
useEffect(() => {
    buscarProjetos();
}, []);
```

### Passo 2: Mandar Propriedades e Consertar Nomes Corretos
Navegue ao final do [Projetos.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/Projetos.jsx) onde o componente de Cadastro está engatado.
Passe o dado do estado, não esqueça do singular (`dadosProjeto={dadosProjeto}`) e mande a nova função de busca:
```javascript
<CadastroProjeto show={show} handleClose={handleClose} dadosProjeto={dadosProjeto} buscarProjetos={buscarProjetos} />
```

### Passo 3: Em [CadastroProjeto.jsx](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroProjeto.jsx), Importar Propriedades Modificadas
No topo do arquivo, o seu componente agora vai receber quatro informações. As garanta lá em cima nos parênteses:
```javascript
export default function CadastroProjeto({ show, handleClose, dadosProjeto, buscarProjetos }) {
```

### Passo 4: Tratar Formatos com Exatidão
No preenchimento (`useEffect`) de CadastroProjeto, recupere corretamente. Observe bem se tem objetos englobados (como usuários relacionados ao projeto) para sempre tirar apenas seus IDs (`algumaCoisa.dono?.id` ou semelhante).

### Passo 5: Criar Roteador `PUT` vs `POST`
Dentro do seu [salvar()](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroUsuario.jsx#45-77) logo acima do loop principal do fetch do backend, insira a lógica baseada na prop do ID do Projeto:
```javascript
const id = dadosProjeto?.id;
const metodo = id ? 'PUT' : 'POST';
const url = id 
  ? `http://localhost:8080/projetos/${id}`
  : `http://localhost:8080/projetos`;
```
Mude a chamada de configuração do seu fetch para passar a usar essas variáveis de dinamismo (`method: metodo`). Não se esqueça de usar `url` diretamente no fetch (`await fetch(url, ...`).

### Passo 6: Chamar a Tabela para a Ação
Após salvar as confirmações do fetch para o servidor e fechar o Modal, ative a busca automática no finalzinho de [salvar()](file:///c:/Users/hgsdl/OneDrive/Desktop/react-js/projeto-final-treinarecife/pre%20-release/sgp-react-version/src/componentes/CadastroUsuario.jsx#45-77):
```javascript
handleClose();
if (buscarProjetos) {
  buscarProjetos();
}
```

O conhecimento estruturado dessa forma torna sua aplicação não apenas correta, como flexível, e vai te evitar imensuráveis reescritas! Siga estes 6 passos lógicos e refatore e faça magia no código!
