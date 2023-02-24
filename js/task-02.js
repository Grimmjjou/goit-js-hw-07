const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const item =document.getElementById("ingredients");
ingredients.forEach(value=>{
  const listItem=document.createElement('li');
  listItem.innerHTML=value;
  item.append(listItem);

});


