const priceInput = document.getElementById("price");
const productInput = document.getElementById("name");
const categoryInput = document.getElementById("category");
const myForm = document.getElementById("form");

myForm.addEventListener("submit", onSubmit);

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/f0de899ddf6c44438f7faf9c1e24662d/productData"
    )
    .then((res) => {
      res.data.forEach((element) => {
        display(element);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

//onSubmitOfForm
function onSubmit(e) {
  e.preventDefault();
  if (
    priceInput.value === "" ||
    productInput.value === "" ||
    categoryInput.value === ""
  ) {
    ;
  } else {
    let newData = {
      price: priceInput.value,
      name: priceInput.value,
      category: categoryInput.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/f0de899ddf6c44438f7faf9c1e24662d/productData",
        newData
      )
      .then((res) => {
        display(newData);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function display(data) {
  const parentNode = document.getElementById(`${data.category}UL`);
  const childHTML = `<li id="${data.category}LI">${data.price}-${data.category}-${data.name} <button type="button" class="btn btn-danger" id="deleteBtn"onClick= "Delete('${data._id}','${data.category}LI')">Delete Order</button></li>`;
  parentNode.innerHTML += childHTML;
}

function Delete(crudId,listId) {
    axios.delete(`https://crudcrud.com/api/f0de899ddf6c44438f7faf9c1e24662d/productData/${crudId}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err); 
    })
    let deleteNode = document.getElementById(listId);
    deleteNode.remove(); 
}