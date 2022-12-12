
describe("Epam task 1",() => {
    beforeEach( async() =>{
        await browser.url("//pastebin.com/");
    })
    // Task 1
    it.only("Task 1",async() => {
        const TextArea= await $("#postform-text");
        const PasteName= await $("#postform-name");
        const Selected = await $("#select2-postform-expiration-container");
        const Selecting = $("#select2-postform-expiration-results");
        
        await TextArea.setValue("Hello from WebDriver");
        
        await PasteName.setValue("helloweb");
        
        await Selected.click();
        
        await Selecting.$$("li")[2].click();

        await browser.pause(5000);
    })
    // Task 2
    it("task 2",async() =>{
        const TextArea= await $("#postform-text");
        const PasteName= await $("#postform-name");
        const SelectBashClick = await $("#select2-postform-format-container");
        
        const Select10MinutesClick = await $("#select2-postform-expiration-container");

        const Select10Minutes = $("#select2-postform-expiration-results");

        await TextArea.setValue(`
    git config --global user.name "New Sheriff in Town"
    git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    git push origin master --force`);
        await SelectBashClick.click();

        await $("#select2-postform-format-results").$$("li")[1].$("ul").$$("li")[0].click();

        await Select10MinutesClick.click();

        await Select10Minutes.$$("li")[2].click();

        await PasteName.setValue("how to gain dominance among developers");
        
        await browser.pause(2000);

        const Submit=await $("//button[text()='Create New Paste']");
        await Submit.click();

        // Task 3
        const Gettitle=await browser.getTitle();
        const TextArea1=await $("textarea[class='textarea -raw js-paste-raw']");
        const Gettext= await $("//div[@class='col-sm-9 field-wrapper']").$("div").$("div[class='ms_cur js-ms-title']");
        await expect(Gettitle).toEqual("how to gain dominance among developers - Pastebin.com");
        
        // I could not do the last 2 parts of the task such as "* Syntax is suspended for bash*",
        // "Check that the code matches the one entered in paragraph 2"
        // Then,I tried like these: expect(Gettext).toEqual("Bash"),
        // expect(Textarea1.getValue()).toEqual("git config --global user.name "New Sheriff in Town"
    // git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    // git push origin master --force");

        await browser.pause(3000);
    })
})