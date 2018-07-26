const h1=document.querySelector('h1');
//instancia a tag primeira tag h1 para a
//constante h1
const pagina=document.querySelector('#pagina');
//instancia o id chamado pagina
// .nome = class, #nome=id, [nome]=atributo
const paragrafo=document.createElement('p');
//cria um novo elemento (tag)
//no documento atual


h1.innerHTML='Alfa';
//insere um texto ou tags para dentro
//do elemento instanciado e o sobrepõe
paragrafo.innerHTML='Loren Ipsunnnnn';

pagina.appendChild(paragrafo);
//adiciona como filho da pagina (div)
//o paragrafo (p)

pagina.classList.remove('red-text','text-accent-4');
//REmove da lista de classes do elemento 
//os contextos relacionados dentro da
//função remove