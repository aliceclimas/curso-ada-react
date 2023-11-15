// Funções no JavaScript começam em maiscúlo
function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente/>
      <MeuComponente/>
      <MeuBotao></MeuBotao>
    </div>
  )
}
function MeuBotao() {
  return (
    <button>Olá</button>
  )
}
function MeuComponente() {
  return (
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi ipsam rem sint, saepe nesciunt labore eius architecto possimus ipsum amet! Tempore libero odio aut ratione eligendi perferendis sapiente qui.
    </p>
  
  )
}
export default App


//Anotações React

// React é uma biblioteca de JavaScript
// Props são objetos no JavaScript

// Aula 06) Listas e chaves

// Listas em react são identificadas por chaves únicas , caso não o React fica confuso com várias listas sem ID

//Aula 07) Efeitos colaterais
//Efeitos colaterais são ações externas do escopo do React

// Exemplos de efeitos colaterais:
// Buscar dados, configurar uma subscription, e mudar o DOM manualmente dentro dos componentes React.


// Aula 08) Buscando dados com fetch
//O hook useEffect permite que você execute tarefas que envolvam a interação com entidades ou APIs externas, como APIs da web como localStorage ou fontes de dados externas.

// Aula 09) Estilizando com classes e CSS modules



//Aula 10) Publicando um site com vercel

