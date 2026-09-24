let precio;
console.log(precio);
precio = 20.5;
console.log(precio);

function ejemplo() {
  if (true) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // 1 — aún visible
  // console.log(y); // ReferenceError
}
