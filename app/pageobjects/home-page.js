const Page = require('./page.js');

class Homepage extends Page{

    get textArea(){
        return $("#postform-text");
    }
    get pasteNameTitle(){
        return $("#postform-name");
    }

    get makingVisibleSyntaxHighlighting(){
        return $("#select2-postform-format-container");
    }
    get makingVisiblePasteExpiration(){
        return $("#select2-postform-expiration-container");
    }
  
    get selectingPasteExpiration(){
        return $("#select2-postform-expiration-results > li:nth-child(3)");
    }

    get selectingSyntaxHighlighting(){
        return $("#select2-postform-format-results > li:nth-child(2) > ul > li:nth-child(1)");
    }
    get clickSubmitButton(){
        return $("//button[text()='Create New Paste']");
    }

  
    open(){
       return super.open('https://pastebin.com/')
    }
    async goToClaimPage(){
        await this.clickSubmitButton.click();
    }

}

module.exports = new Homepage;