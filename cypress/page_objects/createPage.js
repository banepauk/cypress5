
class CreatePage{
    get addOrgButton(){
        return cy.get('.vs-c-my-organization__header--add-new')
    }
    
    get nameInput(){
        return cy.get('.el-form-item')
    }

    get nextBtn(){
        return cy.get('.el-button').eq(3)
    }
    get imageUpload(){
        return cy.get('.el-upload-dragger')
    }
    get uploadImgBtn(){
        return cy.get('.vs-u-text--right').eq(1)
    }
    get createBtn(){
        return cy.get('.el-button').eq(3)
    }
    get myOrganizationTitle(){
        return cy.get('.vs-c-my-organization__title')
    }
    create(nameInput){
        this.addOrgButton.click()
        this.nameInput.type(nameInput)
        this.nextBtn.click()
        this.createBtn.click()
    }
}
export const createPage = new CreatePage()