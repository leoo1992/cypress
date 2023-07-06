describe("Teste calculadora idade", () => {
  it("testar um idade de 25 anos", () => {
    cy.visit(
      "https://samucab2b.github.io/aulas-test-sistemas-senai/C%C3%A1lculo%20de%20Idade/"
    );

    cy.get("#nascimento").type("1992-04-13");
    cy.get(".btn").contains("Calcular").click();
    cy.get("#result").should("have.text", "31 anos");
  });
});

describe("Teste calculadora", () => {
  it("valores vazios", () => {
    cy.visit(
      "https://samucab2b.github.io/aulas-test-sistemas-senai/Calculadora/"
    );

    cy.get("#numb1").type("sdfg");
    cy.get("#numb2").type("gsfdgfd");
    cy.get(".btn").contains("Calcular").click();
    cy.get("#result").should("have.text", "NaN");
    cy.get("#numb1").should("have.value", "");
    cy.get("#numb2").should("have.value", "");
  });

  it("numeros inteiros", () => {
    cy.visit(
      "https://samucab2b.github.io/aulas-test-sistemas-senai/Calculadora/"
    );

    cy.get("#numb1").type("1");
    cy.get("#numb2").type("1");
    cy.get(".btn").contains("Calcular").click();
    cy.get("#result").should("have.text", "2");
    cy.get("#numb1").should("have.value", "1");
    cy.get("#numb2").should("have.value", "1");
  });

  it("numeros decimais", () => {
    cy.visit(
      "https://samucab2b.github.io/aulas-test-sistemas-senai/Calculadora/"
    );

    cy.get("#numb1").type("1.5");
    cy.get("#numb2").type("1.3");
    cy.get(".btn").contains("Calcular").click();
    cy.get("#result").should("have.text", "2.8");
    cy.get("#numb1").should("have.value", "1.5");
    cy.get("#numb2").should("have.value", "1.3");
    cy.get("h1").should("contains.text", "de");
  });
});

describe("Teste login", () => {
  it("teste de login sair de ferias", { defaultCommandTimeout: 50000 }, () => {
    cy.visit("https://samucab2b.github.io/aulas-test-sistemas-senai/Login/");

    cy.get("#login").type(Cypress.env("usuario"), { log: false });
    cy.get("#password").type(Cypress.env("senha"), { log: false });
    cy.get(".mt-2 > .btn-success").contains("Entrar").click();
    cy.get("#modulo").find("option").should("have.length", 3);
    cy.get("#modulo").select("Sair de Ferias");
    cy.get(".card-footer > .btn").contains("Efetivar").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Você escolheu: Sair de Ferias`);
    });
  });

  it("teste de login comer algo", { defaultCommandTimeout: 50000 }, () => {
    cy.visit("https://samucab2b.github.io/aulas-test-sistemas-senai/Login/");

    cy.get("#login").type(Cypress.env("usuario"), { log: false });
    cy.get("#password").type(Cypress.env("senha"), { log: false });
    cy.get(".mt-2 > .btn-success").contains("Entrar").click();
    cy.get("#modulo").find("option").should("have.length", 3);
    cy.get("#modulo").select("Comer algo");
    cy.get(".card-footer > .btn").contains("Efetivar").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Você escolheu: Comer algo`);
    });
  });

  it("teste de login Estudar mais", { defaultCommandTimeout: 50000 }, () => {
    cy.visit("https://samucab2b.github.io/aulas-test-sistemas-senai/Login/");

    cy.get("#login").type(Cypress.env("usuario"), { log: false });
    cy.get("#password").type(Cypress.env("senha"), { log: false });
    cy.get(".mt-2 > .btn-success").contains("Entrar").click();
    cy.get("#modulo").find("option").should("have.length", 3);
    cy.get("#modulo").select("Estudar mais");
    cy.get(".card-footer > .btn").contains("Efetivar").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Você escolheu: Estudar mais`);
    });
  });
});

describe("Teste radio LOW", () => {

  it("teste de volume low no radio", { defaultCommandTimeout: 50000 }, () => {
    cy.visit("https://samucab2b.github.io/aulas-test-sistemas-senai/Radio/");
   
    cy.get('input[type="radio"]')
    .should("have.length", 3)
    .last()
    .should("have.value","low")
    .check();

  });
});