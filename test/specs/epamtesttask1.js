const homePage = require('../../app/pageobjects/home-page');


describe("Epam task 1",() => {
    // Task 1
    it("Task 1",async() => {
        await homePage.open();
        
        await homePage.textArea.setValue("Hello from WebDriver");
        
        await homePage.pasteNameTitle.setValue("helloweb");
        
        await homePage.makingVisiblePasteExpiration.click();
        await homePage.selectingPasteExpiration.click();

        await browser.pause(5000);
    })
})
