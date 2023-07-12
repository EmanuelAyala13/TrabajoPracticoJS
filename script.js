const pizzas = [
    {
      id: 1,
      nombre: 'Pizza Margarita',
      precio: 500,
      ingredientes: ['tomate', 'queso', 'albahaca']
    },
    {
      id: 2,
      nombre: 'Pizza Napolitana',
      precio: 700,
      ingredientes: ['tomate', 'queso', 'anchoas', 'orégano']
    },
    {
      id: 3,
      nombre: 'Pizza Hawaiana',
      precio: 600,
      ingredientes: ['tomate', 'queso', 'piña', 'jamón']
    },
    {
      id: 4,
      nombre: 'Pizza Cuatro Quesos',
      precio: 800,
      ingredientes: ['tomate', 'queso azul', 'queso mozzarella', 'queso parmesano', 'queso provolone']
    },
    {
      id: 5,
      nombre: 'Pizza Vegetariana',
      precio: 550,
      ingredientes: ['tomate', 'queso', 'pimientos', 'cebolla', 'champiñones']
    }
  ];
  
  function listarPizzasImpares() {
    console.log('Listado de pizzas con ID impar:');
    pizzas.forEach(pizza => {
      if (pizza.id % 2 !== 0) {
        console.log(`Nombre: ${pizza.nombre} | ID: ${pizza.id}`);
      }
    });
  }
  
  function verificarPrecioMenor600() {
    const pizzasMenos600 = pizzas.filter(pizza => pizza.precio < 600);
    if (pizzasMenos600.length > 0) {
      console.log('Las pizzas que valen menos de $600 son:');
      pizzasMenos600.forEach(pizza => {
        console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`);
      });
    } else {
      console.log('No hay pizzas que valgan menos de $600.');
    }
  }
  
  function mostrarNombreYPrecio() {
    console.log('El nombre y precio de cada pizza son:');
    pizzas.forEach(pizza => {
      console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`);
    });
  }
  
  function mostrarIngredientes() {
    console.log('Los ingredientes de cada pizza son:');
    pizzas.forEach(pizza => {
      console.log(`Ingredientes de la pizza "${pizza.nombre}":`);
      pizza.ingredientes.forEach(ingrediente => {
        console.log(ingrediente);
      });
      console.log('------------------');
    });
  }
  