export const itemsArray = {
  'items': [
    {
      'id': 1,
      'title': 'Jugo de Zanahoria',
      'content': 'Jugo de Zanahoria 100% natural, retornable',
      'user':'John Smith',
      'city': 'Bogotá'
    },
    {
      'id': 2,
      'title': 'Hamburguesa Preasada',
      'content': 'Hamburguesa Preasada Zenu X 400G. 25% Reducido En Sodio, Buena Fuente De Proteína PLU: 802599 x400G',
      'user':'Luis Sambrano',
      'city': 'Medellín'
    },
    {
      'id': 3,
      'title': 'Costilla de Cerdo Ahumadas',
      'content': 'Costilla Ahumada Ranchera, 500 Gramo(s)',
      'user':'Luisa Amaranta',
      'city': 'Medellín'
    },
    {
      'id': 4,
      'title': 'Jamón de Pavo',
      'content': 'Pietran 225 Gramo(s)Jamón De Pavo Pietrán, 225 Gramo(s).',
      'user':'John Smith',
      'city': 'Bogotá'
    },
    {
      'id': 5,
      'title': 'Leche Entera Alqueria',
      'content': 'Sixpack 1100 Ml leche Entera Alqueria Sixpack 1100 Ml PLU:175786',
      'user':'Luisa Amaranta',
      'city': 'Medellín'
    },
    {
      'id': 6,
      'title': 'Chocoleche Tetra X 6 Unidades',
      'content': 'Alqueria 1 und Chocoleche Tetra X 6 Unidades Alqueria 1 und PLU: 1428156 $ 11.150',
       'user':'Luisa Amaranta',
      'city': 'Medellín'
    },
    {
      'id': 7,
      'title': 'Chocorramo Mini',
      'content': 'Chocoramo Ponque Chocorramo Mini x 20 Unidades, 400 Gramo(s).',
      'user':'John Smith',
      'city': 'Bogotá'
    },
    {
      'id': 8,
      'title': 'Galletas Oreo Rellenas',
      'content': 'Con Crema Sabor A Vainilla Bolsa 432G Galletas Oreo Rellenas Con Crema Sabor A Vainilla Bolsa 432G PLU: 313461',
      'user':'John Smith',
      'city': 'Bogotá'
    },
    {
      'id': 9,
      'title': 'Silk Almond ',
      'content': 'Original 2pk/64oz Bebida De Almendra Silk - Silk Almond Original 2Pk/64Oz - Item#: 389898',
        'user':'Luis Sambrano',
      'city': 'Medellín'
    },
    {
      'id': 10,
      'title': 'MS Ex Virg. Olive',
      'content': 'Olive Oil 2 L Aceite Extra Virgen Member´S Selection 2 Lt - Ms Ex Virg. Olive Oil 2 L - Item#: 388043',
       'user':'John Smith',
      'city': 'Bogotá'
    }
  ]
};

export const jsonItems=()=>
  {
    
    return itemsArray;
  };

  /**Genera el id si no coincide con uno ya existente */
export function generateId(ids){
  const randomId = Number(Number(Math.random()*100).toFixed(0));

  const numberS=ids.find((item)=>item===randomId);

  //Si el número es undefined es porque no ha sido creado el id
  if(numberS===undefined){
    return randomId;
  }else{
    return -1;
  }

}
  export function generateFirstId(){

    return Number(Number(Math.random()*100000).toFixed(0));
  
}

