import * as Puppeteer from "puppeteer";

describe("Testing React ToDo App", () => {
  let browser: Puppeteer.Browser;
  let page: Puppeteer.Page;
  const PAGE_URL = "https://debashis26.github.io/React-ToDo-App/";
  const PAGE_URL_LOCAL = "http://localhost:3000/React-ToDo-App";
  beforeAll(async () => {
    browser = await Puppeteer.launch({  headless:"new"});
    page = await browser.newPage();
    await page.goto(PAGE_URL);
    await page.setViewport({ width: 1360, height: 1080 });
    await page.waitForTimeout(1000);
  }, 30000);

  afterAll(async () => await browser.close());

  it("should have the title", async () => {
    const pageTitle = await page.title();
    expect(pageTitle).toBe("React ToDo App");
  });

  it('should select the input element', async () => {
    const inputSelector = 'input[name="task"]';
    await page.waitForSelector(inputSelector);
    const inputValue = await page.$eval(inputSelector, (input: HTMLInputElement) => input.value);

    expect(inputValue).toBe('');
  });

  it('should add a new todo', async () => {
    const todoInputSelector = 'input[name="task"]';
    const addButtonSelector = `${todoInputSelector} button`;
    await page.waitForSelector(todoInputSelector);
    await page.waitForTimeout(1000);
    await page.type(todoInputSelector, 'New Todo Item');
    await page.waitForSelector(addButtonSelector);
    await page.click(addButtonSelector);
  
    const lastTodoSelector = '.todo-list li:last-child';
    await page.waitForSelector(lastTodoSelector);
  
    const lastTodoText = await page.$eval(lastTodoSelector, (todo) => todo.textContent);
    expect(lastTodoText).toBe('New Todo Item');
  },250000);
  
});
