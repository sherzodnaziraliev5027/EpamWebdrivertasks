const homePage = require("../../app/pageobjects/home-page");
const claimPage=require("../../app/pageobjects/claim-page");

describe("Epam task 2",() => {
    it("first test",async() =>{
        await homePage.open();
        await homePage.textArea.setValue(`git config --global user.name "New Sheriff in Town"
        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        git push origin master --force`);
        await homePage.makingVisiblePasteExpiration.click();
        await homePage.selectingPasteExpiration.click();
        await homePage.makingVisibleSyntaxHighlighting.click()
        await homePage.selectingSyntaxHighlighting.click();
        await homePage.pasteNameTitle.setValue("how to gain dominance among developers");
        await browser.pause(1000);
        await homePage.goToClaimPage();
        await browser.pause(1000);
        });
    it('second test',async() =>{    
        await expect(claimPage.getBash).toEqual("Bash");
        await expect(claimPage.getTitle).toEqual("how to gain dominance among developers - Pastebin.com");
        await expect(claimPage.checkCode).toExist()
        await browser.pause(5000);
    })        
    });  
