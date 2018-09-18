// Example of a side menu

enum Module {
    DASHBOARD = "Dashboard",
    CAMPAIGN = "Campaign Manager",
    POLICY = "Policy Manager",
    TRAINING = "Training",
    CASEMANAGEMENT = "Case Management",
    DUEDILIGENCE = "Due Diligence",
    GIFT = "Gift",
    VENDOR = "Vendor Management",
    RISK = "Risk Management",
    WELCOME = "Welcome",
    OVERVIEW = "Overview",
    THIRDPARTY = "Third Party",
    EMPLOYEES = "Employees",
    CUSTOMGROUPS = "Custom Groups",
    ENTITYCONFIGURATION = "Entity Configuration Manager"
}

enum ModuleId { 
    DUEDILIGENCE = "dueDiligence"
}

class Side_Menu {

    // public get moreContextMenu() { return browser.element("#") }
    // Use something that is not translate related!
    public get sideMenu() { return browser.element("//button[@aria-label='Menu']") }
    public get isNewHeader() : boolean { return !(browser.isExisting(".old-gan-sidebar"))}

    static readonly Modules = Module
    readonly Modules = Side_Menu.Modules

    public menuButton(module: Module) {
        return browser.element("span*=" + module)
    }

    public navigateToDashboard(): void {
        this.menuButton(Module.DASHBOARD).waitForVisible()
        this.menuButton(Module.DASHBOARD).click()
    }

    public canSeeModule(module: Module, subModule?: Module): boolean {
        //Missing a catch to return false
        if (this.isNewHeader) {
            this.sideMenu.waitForVisible()
            this.sideMenu.click()
            this.sideMenu.click()
        }

        if (subModule)
        {
            this.menuButton(module).waitForVisible()
            this.menuButton(module).click()

            browser.waitUntil(function () { return SideMenu.menuButton(subModule).isVisible() })
        } else { 
            browser.waitUntil(function () { return SideMenu.menuButton(module).isVisible() })
        }
        return true
    }

    public navigateToModule(module: Module, subModule?: Module) {
        //Missing a catch to return false
        if (this.isNewHeader) {
            this.sideMenu.waitForVisible()
            this.sideMenu.click()
        }

        if (subModule) {
            this.menuButton(subModule).waitForVisible()
            this.menuButton(subModule).click()
        }
    }

    public navigateToThirdParty() {
        this.navigateToModule(Module.DUEDILIGENCE, Module.THIRDPARTY)
    }

}
const SideMenu = new Side_Menu()
export default SideMenu

