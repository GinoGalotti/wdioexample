class Search_Page {

    public get searchBox() { return browser.element('#lst-ib') }
    public get searchButton() { return browser.element("//span[@class='lsbb']//input[@value='Google Search']") }
    public get luckyButton() { return browser.element("//span[@class='lsbb']//input[@value='I\'m Feeling Lucky']") }
    public get url() : string { return '/'}

    public open(): void {
        browser.url(this.url)
        browser.waitUntil(function() { return browser.getUrl().includes(SearchPage.url) })
    }

    public searchText(text): void {
        this.searchBox.waitForVisible()
        this.searchBox.setValue(text)
        this.searchButton.waitForVisible()
        this.searchButton.click()
    }

    public getLuckyText(text): void {
        this.searchBox.waitForVisible()
        this.searchBox.setValue(text)
        this.luckyButton.waitForVisible()
        this.luckyButton.click()
    }
}
const SearchPage = new Search_Page()
export default SearchPage