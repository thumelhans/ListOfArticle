/*

App gérant l'ajout, la modification et la suppression d'une liste d'article

Créer un article ---> ajouter une ligne au tableau
modifier un article ---> modifier l'élément sélectionné
supprimer un article ---> supprimer la ligne du tableau

colonne ID = list index
colonne nom = name
colonne quantité = quantity
colonne prix = price
colonne total = price * quantity

Objets:

    - Articles {nom, quantité, prix, total}
    - Table rows {nom, mods, id, name, quantity, price, total}

Fonctions:

    - Création de la table row:
        
        <div class="articles.name-id grid">
            <div class="mods-class grid-area-mods">
            </div>
            <div id="articles.name-id" class="grid-area-id">
                <p>
                    id = listarticle[index]
                </p>
            </div>
            <div id="articles.name-name" class="grid-area-name">
                <p>
                    name = articles.name
                </p>
            </div>
            <div id="articles.name-quantity" class="grid-area-quantity">
                <p>
                    name = articles.quantity
                </p>
            </div>
            <div id="articles.name-price" class="grid-area-price">
                <p>
                    name = articles.price
                </p>
            </div>
            <div id="articles.name-total" class="grid-area-total">
                <p>
                    name = articles.total
                </p>
            </div>
        </div>

*/

// DOM Elements

const getTableContainer = document.querySelector("#table-container");

// Functions

// Objects
const articlesArray = [];

function articles(name, quantity, price) {
  function total() {
    return quantity * price;
  }

  return {
    name,
    quantity,
    price,
    total,
    show: `Vous avez ajouter ${quantity} ${name}. Vous paierez: ${total()}€`,
  };
}

let article = articles("pantalon", 1, 25);

articlesArray.push(article);

article = articles("short", 2, 35);
articlesArray.push(article);
article = articles("chemise", 1, 55);
articlesArray.push(article);
article = articles("bob", 1, 10);
articlesArray.push(article);
article = articles("caleçon", 3, 12);
articlesArray.push(article);
article = articles("t-shirt", 2, 5.25);
articlesArray.push(article);
article = articles("pantalon", 4, 120);
articlesArray.push(article);

console.log(articlesArray[0].show);
console.log(articlesArray[0].name);
console.log(articlesArray[0].price);
console.log(articlesArray[0].quantity);
console.log(articlesArray[0].total());

function nodeElementsFactory(tagname, id, name, quantity, price, total) {}
class NodeElements {
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.total = this.price * this.quantity;
  }

  createNodeElement(nameOfTag, classesNameList = null, attributesList = null) {
    const newElement = document.createElement(nameOfTag);

    if (classesNameList != null) {
      for (const element of classesNameList) {
        newElement.classList.add(element);
      }
    }

    if (attributesList != null) {
      for (const element of attributesList) {
        newElement.setAttribute(element[0], element[1]);
      }
    }

    return newElement;
  }

  rowContainerNode() {
    const nodeElement = this.createNodeElement("div", [
      "table-article",
      `${this.name}-${this.id}`,
      "grid",
    ]);
    return getTableContainer.appendChild(nodeElement);
  }

  modsClassNode() {
    return this.createNodeElement("div", [
      "mods-class-article",
      "grid-area-mods",
    ]);
  }

  articleIdNode() {
    const nodeElement = this.createNodeElement(
      "div",
      ["grid-area-id"],
      ["id", `${this.name}-id`]
    );
    nodeElement.insertAdjacentHTML("beforeend", `<span>${this.id}</span>`);
    return nodeElement;
  }

  articleNameNode() {
    const nodeElement = this.createNodeElement(
      "div",
      ["grid-area-name"],
      ["id", `${this.name}-name`]
    );
    nodeElement.insertAdjacentHTML("beforeend", `<span>${this.name}</span>`);
    return nodeElement;
  }

  articleQuantityNode() {
    const nodeElement = this.createNodeElement(
      "div",
      ["grid-area-quantity"],
      ["id", `${this.name}-quantity`]
    );
    nodeElement.insertAdjacentHTML(
      "beforeend",
      `<span>${this.quantity}</span>`
    );
    return nodeElement;
  }

  articlePriceNode() {
    const nodeElement = this.createNodeElement(
      "div",
      ["grid-area-price"],
      ["id", `${this.name}-price`]
    );
    nodeElement.insertAdjacentHTML("beforeend", `<span>${this.price} €</span>`);
    return nodeElement;
  }

  articleTotalNode() {
    const nodeElement = this.createNodeElement(
      "div",
      ["grid-area-total"],
      ["id", `${this.name}-id`]
    );
    nodeElement.insertAdjacentHTML("beforeend", `<span>${this.total} €</span>`);
    return nodeElement;
  }

  appendRowContainer() {
    return this.rowContainerNode().append(
      this.modsClassNode(),
      this.articleIdNode(),
      this.articleNameNode(),
      this.articlePriceNode(),
      this.articleQuantityNode(),
      this.articleTotalNode()
    );
  }

  // Méthode modification
  // Méthode suppression
}

const test = new NodeElements(1, "Pantalon", 3, 20);
const test2 = new NodeElements(2, "short", 4, 12);
const test3 = new NodeElements(3, "Chemise", 1, 60);
const test4 = new NodeElements(4, "Caleçon", 3, 29.99);

test.appendRowContainer();
test2.appendRowContainer();
test3.appendRowContainer();
test4.appendRowContainer();
