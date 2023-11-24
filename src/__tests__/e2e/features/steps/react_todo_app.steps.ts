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
    browser = await launch({ headless: "new" });
    page = await browser.newPage();
    await page.setViewport({ width: 1360, height: 1080 });
    await page.goto(TODO_URL);
  });
  afterAll(async () => {
    await browser.close();
  });

  test("Adding a new ToDo", ({ given, when, then }) => {
    given("I am on the Todo website", async () => {
      const PAGE_TITELE = "React ToDo App";
      const EXPECTED_PAGETITLE = await page.title();
      expect(EXPECTED_PAGETITLE).toBe(PAGE_TITELE);
    });

    when('I enter a new ToDo item "Buy groceries"', async () => {
      const todoInputSelector = 'input[name="task"]';
      await page.waitForSelector(todoInputSelector);
      await page.waitForTimeout(1000);
      await page.type(todoInputSelector, "Buy groceries");
      const searchInputValue = await page.$eval(
        todoInputSelector,
        (input) => input.value
      );
      expect(searchInputValue).toBe("Buy groceries");
    });
    when('I press the "Add ToDo" button', async () => {
      const buttonSelector = "form.NewTodoForm button";
      const button = await page.$(buttonSelector);
      expect(button).toBeTruthy();
      await page.click(buttonSelector);
    });

    then('the ToDo list should contain "Buy groceries"', async () => {
      const lastLiSelector = ".todo-list .Todo:last-child li";
      const lastItem = await page.$eval(lastLiSelector, (li) => li.textContent);
      expect(lastItem).toBe("Buy groceries");
    });
  }, 25000);

  test("Adding a new ToDo with empty task", ({ given, when, then }) => {
    

    given('I enter an empty ToDo item', async () => {
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

    then('the ToDo list should not contain an empty task', async () => {
      const lastLiSelector = ".todo-list .Todo:last-child li";
      const lastItem = await page.$eval(lastLiSelector, (li) => li.textContent);
      expect(lastItem).not.toBe("");
    });
  }, 25000);
});
