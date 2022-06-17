class ArchivePage{
    get organization(){
        return cy.get('.vs-c-media__object').eq(2)
    }
    get configureBtn(){
        return cy.get('.vs-c-site-logo').eq(8)
    }
    get archiveBtn(){
        return cy.get('button[class="vs-c-btn vs-c-btn--success vs-c-btn--spaced"]')

    }
    get submitBtn(){
        return cy.get('.el-button').eq(7)
    }
    get boardsModal() {
        return cy.get(".vs-c-modal__body");
      }
      get okBtn() {
        return this.boardsModal.find("button").last();
      }
      get confirmBtnModal(){
        return cy.get('.vs-c-modal')
      }
      get confirmBtn(){
        return this.confirmBtnModal.find("button").last();
      }
    archive(){
        this.organization.click()
        
        this.boardsModal.click()
        this.okBtn.click()
        this.configureBtn.click()
        this.archiveBtn.click()
        this.confirmBtn.click()
        //this.submitBtn.click()
    }
}
export const archivePage = new ArchivePage()