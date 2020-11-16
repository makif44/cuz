class utils {

    selectStartDate(year, month, day) {
               
        $("//body/div[2]//input[@class='numInput cur-year']").setValue(year);
        //$("//body/div[2]//select[@class='flatpickr-monthDropdown-months']").click(); 
        $("//body/div[2]//select[@class='flatpickr-monthDropdown-months']").setValue(month);
        browser.keys("\uE007"); 
        var dayStart= "//body/div[2]//div[@class='dayContainer']/span[text()='" + day + "'][@class='flatpickr-day ']"
        $(dayStart).click();
    }
    selectStartDateTime(hour, minute) {
        $("//body/div[2]//input[@class='numInput flatpickr-hour']").setValue(hour);
        $("//body/div[2]//input[@class='numInput flatpickr-minute']").setValue(minute);

    }
    selectEndDate(year, month, day) {
        $("//body/div[3]//input[@class='numInput cur-year']").setValue(year);
        $("//body/div[3]//select[@class='flatpickr-monthDropdown-months']").setValue(month);
        browser.keys("\uE007");    
        var dayEnd= "//body/div[3]//div[@class='dayContainer']/span[text()='" + day + "'][@class='flatpickr-day ']"
        $(dayEnd).click();
    }
    selectEndDateTime(hour, minute) {
        $("//body/div[3]//input[@class='numInput flatpickr-hour']").setValue(hour);
        $("//body/div[3]//input[@class='numInput flatpickr-minute']").click();
        $("//body/div[3]//input[@class='numInput flatpickr-minute']").setValue(minute);

    }
    editStartDate(year, month, day) {
        //$("//body/div[2]//input[@class='numInput cur-year']").setValue(year);
        //$("//body/div[2]//select[@class='flatpickr-monthDropdown-months']").selectByVisibleText(month);
        $("//body/div[2]//div[@class='dayContainer']/span[text()='" + day + "'][@class='flatpickr-day ']").click();
    }
    editEndDate(year, month, day) {
        //$("//body/div[3]//input[@class='numInput cur-year']").setValue(year);
        //$("//body/div[3]//select[@class='flatpickr-monthDropdown-months']").click();
        //$("//body/div[3]//select[@class='flatpickr-monthDropdown-months']/option[contains(text(),'"+month+"')]").click();      
        $("//body/div[3]//div[@class='dayContainer']/span[text()='" + day + "'][@class='flatpickr-day ']").click();

    }
}
export default new utils();