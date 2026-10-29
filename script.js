const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices= document.querySelectorAll(".price")
	let total=0
  prices.forEacch(item =>{
	  total+=Number(item.textContent)
  })
	    const row = document.createElement("tr");
    const cell = document.createElement("td");
	    cell.textContent = "Total Price: Rs " + total;
    cell.colSpan = 2;

    row.appendChild(cell);

    // Add the row to the table
    document.querySelector("table").appendChild(row);

};

getSumBtn.addEventListener("click", getSum);

