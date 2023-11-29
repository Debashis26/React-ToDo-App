import { loadFeature, defineFeature } from "jest-cucumber";
import { Browser, Page, launch } from "puppeteer";

const feature = loadFeature(
  "src/__tests__/e2e/features/react_todo_app.feature"
);

let browser: Browser;
let page: Page;
const TODO_URL = "https://debashis26.github.io/React-ToDo-App/";
defineFeature(feature, (test) => {
  beforeAll(async () => {
    browser = await launch({
      headless: false,
      slowMo: 50,
      args: ["--start-maximized"],
    });
    page = await browser.newPage();
    await page.setViewport({ width: 1360, height: 1080 });
    await page.goto(TODO_URL);
  }, 15000);
  afterAll(async () => {
    await browser.close();
  });

  test("Adding a new ToDo", ({ given, when, then }) => {
    given("I am on the Todo website", async () => {
      const PAGE_TITELE = "React ToDo App";
      const EXPECTED_PAGETITLE = await page.title();
      expect(EXPECTED_PAGETITLE).toBe(PAGE_TITELE);
    });

    when(/^I enter a new ToDo item "(.*)"$/, async (todoInputValue: string) => {
      const todoInputSelector = 'input[name="task"]';
      await page.waitForSelector(todoInputSelector);
      await page.waitForTimeout(1000);
      await page.type(todoInputSelector, todoInputValue);
      const searchInputValue = await page.$eval(
        todoInputSelector,
        (input) => input.value
      );
      expect(searchInputValue).toBe(todoInputValue);
    });
    when('I press the "Add ToDo" button', async () => {
      const buttonSelector = "form.NewTodoForm button";
      const button = await page.$(buttonSelector);
      expect(button).toBeTruthy();
      await page.click(buttonSelector);
    });

    then(
      /the ToDo list should contain "(.*)"$/,
      async (todoInputValue: string) => {
        const lastLiSelector = ".todo-list .Todo:last-child li";
        const lastItem = await page.$eval(
          lastLiSelector,
          (li) => li.textContent
        );
        expect(lastItem).toBe(todoInputValue);
      }
    );
  }, 25000);

  test("Adding a new ToDo with empty task", ({ given, when, then }) => {
    given("I enter an empty ToDo item", async () => {
      const todoInputSelector = 'input[name="task"]';
      await page.waitForSelector(todoInputSelector);
      await page.waitForTimeout(1000);
      await page.type(todoInputSelector, "");
      const searchInputValue = await page.$eval(
        todoInputSelector,
        (input) => input.value
      );
      expect(searchInputValue).toBe("");
    });
    when('I press the "Add ToDo" button', async () => {
      const buttonSelector = "form.NewTodoForm button";
      const button = await page.$(buttonSelector);
      expect(button).toBeTruthy();
      await page.click(buttonSelector);
    });

    then("the ToDo list should not contain an empty task", async () => {
      const lastLiSelector = ".todo-list .Todo:last-child li";
      const lastItem = await page.$eval(lastLiSelector, (li) => li.textContent);
      expect(lastItem).not.toBe("");
    });
  }, 25000);

  test("Deleting a ToDo task", async ({ given, when, then }) => {
    given(/I added a ToDo item "(.*)"$/, async (todoInputValue: string) => {
      const todoInputSelector = 'input[name="task"]';
      await page.waitForSelector(todoInputSelector);
      await page.waitForTimeout(1000);
      await page.type(todoInputSelector, todoInputValue);
      const addButtonSelector = "form.NewTodoForm button";
      await page.click(addButtonSelector);
      const lastLiSelector = ".todo-list .Todo:last-child li";
      const lastItem = await page.$eval(lastLiSelector, (li) => li.textContent);
      expect(lastItem).toBe(todoInputValue);
      // console.log("debugger..: given");

    });
    when('I click the "Delete" icon', async () => {
      const deleteButtonSelector = '.todo-list .Todo:last-child button:nth-child(2)';
      const deleteButton = await page.$(deleteButtonSelector);
      await page.waitForTimeout(1000);
      expect(deleteButton).toBeTruthy();
      await page.click(deleteButtonSelector);
      // console.log("debugger..: when");

    });
    then(
      /the ToDo list should not contain "(.*)"$/,
      async (todoInputValue: string) => {
        const lastLiSelector = ".todo-list .Todo:last-child li";
        await page.waitForTimeout(1000);
        const lastItem = await page.$eval(
          lastLiSelector,
          (li) => li.textContent
        );
        // console.log("debugger..: then "+lastItem);
        
        expect(lastItem).not.toBe(todoInputValue);
      }
    );
  },25000);


  
});
