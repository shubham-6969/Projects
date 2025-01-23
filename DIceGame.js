// Dice Roller Program 

function rollDice(){
  const numOfDice  = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = [];
  

  for(let i=0; i < numOfDice; i++){
      const value = Math.floor(Math.random() * 6) + 1;

      // .push is used  to add the new elements at the end of an array 
      values.push(value);
    
      images.push(`<img src="images/dice_imgs/${value}.png" alt="Dice ${value}" style="width: 50px; margin: 5px;">`);

  }

  diceResult.textContent =`Dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
  
}