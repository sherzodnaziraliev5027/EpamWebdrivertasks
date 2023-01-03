const Page = require('./page');

class Claim{
    get getBash(){
        return $(".left a:nth-child(1)").getText();
    }
    get getTitle(){
        return browser.getTitle();
    }
    get getCode(){
        return $("//ol/li[position() >1 and position()<3]//span[text()='git reset']");
    }
}

module.exports=new Claim;