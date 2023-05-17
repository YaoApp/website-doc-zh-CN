function GetProduct(id) {
  return Process("models.product.Find", id, { select: ["id", "name"] });
}
