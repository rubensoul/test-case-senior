# LoanForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.


# Descrição do teste:

-Crie um projeto em AngularIO(2.x, 5.x, 7.x, 9.x).

-Deverá conter um formulário de solicitação de empréstimo com os seguintes campos:

Nome do solicitante.
Valor desejado.
Numero de parcelas.

Após clicar em “Simular empréstimo”, o Front-end deverá realizar uma requisição para o Back-end para realizar a simulação do valor final de acordo com o juros.
Para o campo de juros considere como 5% do valor solicitado.
Para a requisição de Back-end anunciada, não precisa criar o Back-end em si, pode ser valores retornados de um MOC, ou o que você julgar mais aproximado da realidade de um retorno de um Back-end.


O Back-end retornará os campos abaixo. 
•	Valor das parcelas
•	Número de parcelas 
•	Total do valor com juros

Estes precisam ser expostos logo abaixo do formulário e deve-se habilitar para clique um botão de “confirmação”.
Ao clicar no botão confirmação deve-se abrir uma pop-up com os 3 campos listados em uma pop-up, valor das parcelas, número de parcelas e total do valor com juros de uma forma organizada e visível.

Nesta pop-up deve conter um botão de confirmar empréstimo e cancelar.
Ao clicar em cancelar, deve-se retornar a tela anterior, sem editar nenhum parâmetro.
Ao clicar em confirmar empréstimo deve-se redirecionar para uma página nova que dirá:
“O empréstimo foi realizado com sucesso! Veja abaixo o que você contratou”
E listar novamente os 3 atributos, valor das parcelas, número de parcelas e total do valor com juros.

Se Julgar fazer qualquer outra funcionalidade, seja ela uma ação, layout, ... faça e deixe descrito as motivações.

## Desenvolvido em Angular 9 
Conforme descrito, foi realizado na versão 9 do angular

## Info extra
Foi criado uma condicional para caso queira pegar os dados do mock ou da api, em env.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
