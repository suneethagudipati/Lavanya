//function App()
//{
  //return(
   // <react:Fragment>
 // <h1> chicken mutton   </h1>
 // <h2> chicken mutton 

 // </h2>
 // </react:Fragment>
 // )
//}
//export default App;

//declare  varibles.....

 //function App()
 //{
  //const username="suni";
  //const posword="lavanya@212";
  //return(
    //<>
    //<h1>Login Details</h1>
    //<p>username:{username}</p>
    //<p>userposword:{posword}</p>
   // </>
 // )
 //}
 //export default App;

 //declare only one object...

//  function App()
//  {
//   const employee={id:101,name:"lavanya",salary:10000.45}
//    return(
//     <>
//     <h1>employee data </h1>
//     <p> employee id:{employee.id}</p>
//     <p>employee name:{employee.name}</p>
//     <p>employee salary:{employee.salary}</p>
//     </>
//    )

//  }
// export default App;


//products data .....
// function App()
// {
//   const products={id:121,name:"phone" ,price:250000,available:"false"};
//     return (
//       <>
//       <h1>product details</h1>
//       <p>products id:{products.id}</p>
//       <p>products name:{products.name}</p>
//       <p>products price:{products.price}</p>
//       <p>products available:{products.available==true ? "in stock" : "out of stock"}</p>

//       </>
//     );
// }
// export default App;






// function App()
// {
//   const food=[
//     {id:101,name:"Chicken",category:"Non veg"},
//     {id:102,name:"Bringal",category:"Veg"},
//     {id:103,name:"Egg",category:"Non veg"},
//     {id:104,name:"ladesfinger,category:veg"}

    
//   ];
//   const fooditems=food.map(food=>
//                     <li key={food.id}
//           style= {{colour:food.category=="veg"?"green":"red"}}> 
//           id:{food.id},name:{food.name},category:{food.category}</li>
//   );
//   return(
//     <>
//     <h1>food Data</h1>
//     <ul>{ fooditems}</ul>
//     </>
//   );

                    
  

// }
// export default App;


// function Sum()
//  {
//   const sum1 = (n1, n2) => n1 + n2;
//   const sum2 = (n1, n2, n3) => n1 + n2 + n3;

//   const res1 = sum1(10, 20);
//   const res2 = sum2(10, 20, 30); 

//   return (
//     <>
//       <h1>{res1}</h1>
//       <h1>{res2}</h1>
//     </>
//   );
// }

// export default Sum; 
// function App() {
//   const items = [
//     { id: 101, name: 'chicken', category: 'veg' },
//     { id: 102, name: 'mutton', category: 'veg' },
//     { id: 103, name: 'paneer-curry', category: 'non-veg' },
//     { id: 104, name: 'tomato-curry', category: 'non-veg' }
//   ];

//   const listItems = items.map(item => (
//     <li key={item.id} style={{ color: item.category =='veg' ? 'green' : 'red' }}>
//       Id: {item.id}, Item Name: {item.name}, Item Category: {item.category}
//     </li>
//   ));

//   const vegItems = items.filter(item => item.category =='veg').map(item => (
//     <li key={item.id} style={{ color: 'green' }}>
//       Id: {item.id}, Name: {item.name}, Category: {item.category}
//     </li>
//   ));

//   const nonvegItems = items.filter(item => item.category =='non-veg').map(item => (
//     <li key={item.id} style={{ color: 'red' }}>
//       Id: {item.id}, Name: {item.name}, Category: {item.category}
//     </li>
//   ));

//   const checkvegItems = items.filter(item => item.category =='veg');
//   const vegItems2 = checkvegItems.length > 0
//     ? checkvegItems.map(item => (
//       <li key={item.id}>Id: {item.id}, Name: {item.name}, Category: {item.category}</li>
//     ))
//     : 'Veg products not there';

//   const checknonveg= items.filter(item => item.category == 'non-veg');
//   const nonvegItems2 = checknonveg.length > 0
//     ? checknonveg.map(item => (
//       <li key={item.id}>Id: {item.id}, Name: {item.name}, Category: {item.category}</li>
//     ))
//     : 'Non-veg products not there';

//   return (
//     <>
//       <h2>Food Items</h2>
//       <ul>{listItems}</ul>
//       <h2>Veg Items</h2>
//       <ul>{vegItems}</ul>
//       <h2>Non-Veg Items</h2>
//       <ul>{nonvegItems}</ul>
//       <h2>check Veg Products </h2>
//       <ul>{vegItems2}</ul>
//       <h2>check Non-Veg Products </h2>
//       <ul>{nonvegItems2}</ul>
//     </>
//   );
// }

// export default App;
function App()
{
  const products=[
    {id:11,name:"sugar",price:90},
    {id:12,name:"milk",price:40}
  ]
  const productsWithQuantity = products.map((product) => ({
    ...product,
    quantity: 10,
  }));
  const list = productsWithQuantity.map((product) => (
    <li key={product.id}>
      id: {product.id}, name: {product.name}, price: {product.price}, quantity: {product.quantity}
    </li>
  ));

  return(
<>
<h1>product details..</h1>
<ul>{list}</ul>
</>
  )
}

export default App;